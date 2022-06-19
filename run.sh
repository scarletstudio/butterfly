#!/bin/bash

# Tells the script to exit if a command fails instead of continuing
set -e

FRONTEND_PORT=4000
BACKEND_PORT=8000
PREFECT_DASHBOARD_PORT=8080

if [ "$1" == "frontend" ]; then
  echo "Starting frontend app..."
  cd frontend
  # Get the GitPod URL for the backend, for API requests
  # Get the GitPod URL for the frontend, for hot module reloading
  if command -v gp &> /dev/null; then
    gp env VITE_BACKEND_URL=$(gp url "$BACKEND_PORT")
    gp env VITE_FRONTEND_URL=$(gp url "$FRONTEND_PORT")
    eval $(gp env -e)
    touch .env.firebase
    echo "VITE_firebase_apiKey=$VITE_firebase_apiKey" > .env.firebase
    echo "VITE_firebase_authDomain=$VITE_firebase_authDomain" >> .env.firebase
    echo "VITE_firebase_databaseURL=$VITE_firebase_databaseURL" >> .env.firebase
    echo "VITE_firebase_projectId=$VITE_firebase_projectId" >> .env.firebase
    echo "VITE_firebase_storageBucket=$VITE_firebase_storageBucket" >> .env.firebase
    echo "VITE_firebase_messagingSenderId=$VITE_firebase_messagingSenderId" >> .env.firebase
    echo "VITE_firebase_appId=$VITE_firebase_appId" >> .env.firebase
    echo "VITE_firebase_mockUserPassword=$VITE_firebase_mockUserPassword" >> .env.firebase
  else
    VITE_BACKEND_URL="http://localhost:$BACKEND_PORT"
    VITE_FRONTEND_URL="http://localhost:$FRONTEND_PORT"
    cp ../.env.firebase .env.firebase
  fi
  echo "VITE_BACKEND_URL=$VITE_BACKEND_URL" > .env
  echo "VITE_FRONTEND_URL=$VITE_FRONTEND_URL" >> .env
  cat .env.firebase >> .env
  rm .env.firebase
  # Run the frontend in development mode
  npm run dev

elif [ "$1" == "frontend-static" ]; then
  echo "Building static frontend site..."
  echo "Remember to use `./run.sh frontend` first, so that frontend/.env is created before building."
  cd frontend
  npm run build
  python3 -m http.server "$FRONTEND_PORT"

elif [ "$1" == "install-frontend" ]; then
  echo "Installing frontend dependencies..."
  # Install Node dependencies within frontend directory
  cd frontend
  npm install

elif [ "$1" == "install-frontend-ci" ]; then
  echo "Installing frontend dependencies for continuous integration runner..."
  # Install using package-lock.json instead of rebuilding dependency tree
  cd frontend
  npm ci

elif [ "$1" == "install-eslint" ]; then
  echo "Installing frontend dependencies for ESLint..."
  cd frontend
  npm install eslint-config-airbnb

elif [ "$1" == "lint-frontend" ]; then
  cd frontend
  npm run lint "${@:2}"

elif [ "$1" == "format-frontend" ]; then
  cd frontend
  npm run format "${@:2}"

elif [ "$1" == "ui" ]; then
  # Open the frontend in the GitPod preview window
  if command -v gp &> /dev/null; then
    gp preview $(gp url "$FRONTEND_PORT")
  else
    open "http://localhost:$FRONTEND_PORT"
  fi

elif [ "$1" == "storybook" ]; then
  cd frontend
  npm run storybook

elif [ "$1" == "pre-commit" ]; then
  source .venv/bin/activate
  pre-commit run

elif [ "$1" == "install-backend" ]; then
  echo "Installing backend and offline dependencies..."
  # Install Python dependencies within virtual environment
  source .venv/bin/activate
  pip3 install -r requirements.txt
  pip3 install -r requirements-dev.txt

elif [ "$1" == "pytest" ]; then
  echo "Running: pytest ${@:2}"
  source .venv/bin/activate
  pytest "${@:2}"

elif [ "$1" == "manage" ]; then
  echo "Running Django management command:"
  echo "python3 backend/manage.py ${@:2}"
  source .venv/bin/activate
  python3 backend/manage.py "${@:2}"

elif [ "$1" == "shell" ]; then
  echo "Starting Django shell."
  source .venv/bin/activate
  python3 backend/manage.py shell

elif [ "$1" == "backend" ]; then
  echo "Starting backend..."
  source .venv/bin/activate
  # Set the Django secret key and save as an environment variable
  if command -v gp &> /dev/null; then
    gp env SECRET_KEY="$RANDOM"
    gp env API_DATABASE_URL="$PREFECT__CONTEXT__SECRETS__database_url"
    gp env API_ADMIN_CREDENTIALS="$PREFECT__CONTEXT__SECRETS__admin_credentials"
    eval $(gp env -e)
  else
    SECRET_KEY=$RANDOM
    echo "Firebase keys are not automated for non-GitPod runs."
    exit 1
  fi
  echo "SECRET_KEY=$SECRET_KEY" > .env
  echo "API_DATABASE_URL=$API_DATABASE_URL" >> .env
  echo "API_ADMIN_CREDENTIALS=$API_ADMIN_CREDENTIALS" >> .env
  # Run the backend in development mode
  python3 backend/manage.py migrate
  python3 backend/manage.py runserver

elif [ "$1" == "backend-server" ]; then
  echo "Starting backend in server (non-development) mode..."
  source .venv/bin/activate
  # Set the Django secret key and save as an environment variable
  if command -v gp &> /dev/null; then
    gp env SECRET_KEY=$RANDOM
    gp env API_DATABASE_URL="$PREFECT__CONTEXT__SECRETS__database_url"
    gp env API_ADMIN_CREDENTIALS="$PREFECT__CONTEXT__SECRETS__admin_credentials"
    eval $(gp env -e)
  else
    SECRET_KEY=$RANDOM
    echo "Firebase keys are not automated for non-GitPod runs."
    exit 1
  fi
  echo "SECRET_KEY=$SECRET_KEY" > .env
  echo "API_DATABASE_URL=$API_DATABASE_URL" >> .env
  echo "API_ADMIN_CREDENTIALS=$API_ADMIN_CREDENTIALS" >> .env
  # Run the backend in development mode
  python3 backend/manage.py migrate
  gunicorn server.wsgi --bind 0.0.0.0:$BACKEND_PORT --chdir=backend

elif [ "$1" == "api" ]; then
  # Open the backend in the GitPod preview window
  if command -v gp &> /dev/null; then
    gp preview $(gp url "$BACKEND_PORT")
  else
    open "http://localhost:$BACKEND_PORT"
  fi

elif [ "$1" == "flow" ]; then
  # Set Prefect secrets then run a flow
  source .venv/bin/activate
  FLOW_NAME="$2"
  PATH_TO_FLOW="pipeline/flows/$FLOW_NAME.py"
  if command -v gp &> /dev/null; then
    env $(gp env) python3 "$PATH_TO_FLOW"
  else
    env $(cat .env.prefect | xargs) python3 "$PATH_TO_FLOW"
  fi

elif [ "$1" == "prefect-dashboard" ]; then
  # Run local Prefect UI to explore and run offline pipelines
  source .venv/bin/activate
  # Set Prefect backend to local server
  prefect backend server
  # Start Prefect services in the background
  prefect server start --detach
  # Create project for flows
  prefect create project butterfly
  # Register latest version of flows
  python3 pipeline/scripts/register_all_flows.py
  # Show developer how to connect to local services
  if command -v gp &> /dev/null; then
    echo "Copy this URL into the Prefect Server GraphQL endpoint:"
    echo "$(gp url 4200)/graphql"
  fi

elif [ "$1" == "prefect-agent" ]; then
  # Run local Prefect agent to execute offline pipelines
  source .venv/bin/activate
  # Set Prefect secrets, necessary for executing flows
  if command -v gp &> /dev/null; then
    export $(gp env)
  else
    export $(cat .env.prefect | xargs)
  fi
  # Starter local agent, necessary for executing flows
  prefect agent local start

elif [ "$1" == "prefect-register" ]; then
  # Register latest version of flows with Prefect Server
  source .venv/bin/activate
  prefect create project butterfly
  python3 pipeline/scripts/register_all_flows.py

elif [ "$1" == "open-prefect" ]; then
  if command -v gp &> /dev/null; then
    gp preview $(gp url "$PREFECT_DASHBOARD_PORT")
  else
    open "http://localhost:$PREFECT_DASHBOARD_PORT"
  fi

else
  echo "No run shortcut found for: $1"
  echo "Did you pull the latest version?"

fi
