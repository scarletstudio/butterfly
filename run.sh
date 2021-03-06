#!/bin/bash

# Tells the script to exit if a command fails instead of continuing
set -e

FRONTEND_PORT=4000
BACKEND_PORT=8000
STORYBOOK_PORT=6006
PREFECT_DASHBOARD_PORT=8080

set_prefect_secrets () {
    if command -v gp &> /dev/null; then
    export $(gp env)
  else
    export $(cat .env.prefect | xargs)
  fi
}

set_frontend_secrets () {
  cd frontend
  if command -v gp &> /dev/null; then
    gp env VITE_BACKEND_URL=$(gp url "$BACKEND_PORT")
    gp env VITE_FRONTEND_URL=$(gp url "$FRONTEND_PORT")
    gp env VITE_STORYBOOK_URL=$(gp url "$STORYBOOK_PORT")
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
    VITE_STORYBOOK_URL="http://localhost:$STORYBOOK_PORT"
    cp ../.env.firebase .env.firebase
  fi
  echo "VITE_BACKEND_URL=$VITE_BACKEND_URL" > .env
  echo "VITE_FRONTEND_URL=$VITE_FRONTEND_URL" >> .env
  echo "VITE_STORYBOOK_URL=$VITE_STORYBOOK_URL" >> .env
  cat .env.firebase >> .env
  rm .env.firebase
  cd ..
}

open_port_in_tab () {
  PORT=$1
  RELATIVE_URL=$2
  if command -v gp &> /dev/null; then
    BASE_URL=$(gp url "$PORT")
    gp preview "$BASE_URL$RELATIVE_URL"
  else
    open "http://localhost:$PORT"
  fi
}

if [ "$1" == "ui" ]; then
  # Open frontend UI in a tab
  open_port_in_tab "$FRONTEND_PORT"

elif [ "$1" == "book" ]; then
  # Open Storybook in a tab
  open_port_in_tab "$STORYBOOK_PORT"

elif [ "$1" == "api" ]; then
  # Open backend API in a tab
  open_port_in_tab "$BACKEND_PORT"

elif [ "$1" == "api-docs" ]; then
  # Open backend API in a tab
  open_port_in_tab "$BACKEND_PORT" "/docs"

elif [ "$1" == "dash" ]; then
  # Open Prefect dashboard in a tab
  open_port_in_tab "$PREFECT_DASHBOARD_PORT"

elif [ "$1" == "frontend" ]; then
  echo "Starting frontend app in development mode..."
  set_frontend_secrets
  cd frontend
  npm run dev

elif [ "$1" == "frontend-static" ]; then
  echo "Building static frontend site..."
  set_frontend_secrets
  cd frontend
  npm run build
  python3 -m http.server "$FRONTEND_PORT"

elif [ "$1" == "install-frontend" ]; then
  echo "Installing frontend dependencies..."
  # Install Node dependencies within frontend directory
  cd frontend
  # Do not save unintended changes to package-lock.json
  # https://github.com/npm/npm/issues/17722
  npm install --no-save

elif [ "$1" == "install-frontend-ci" ]; then
  echo "Installing frontend dependencies for continuous integration runner..."
  # Install using package-lock.json instead of rebuilding dependency tree
  cd frontend
  npm ci

elif [ "$1" == "install-eslint" ]; then
  echo "Installing frontend dependencies for ESLint (intended for CI only)..."
  # Helper function read the package version from our frontend dev dependencies
  package () {
    PACKAGE=$1
    VERSION=$(< frontend/package.json jq -r ".devDependencies.\"$PACKAGE\"")
    echo "$PACKAGE@$VERSION"
    echo "$PACKAGE@$VERSION"
  }
  # Install only the dev dependencies needed to run the ESLint pre-commit hook
  npm install --no-package-lock --no-save --quiet \
    $(package "eslint") \
    $(package "eslint-config-airbnb") \
    $(package "eslint-config-prettier") \
    $(package "eslint-plugin-import") \
    $(package "eslint-plugin-jsx-a11y") \
    $(package "eslint-plugin-node") \
    $(package "eslint-plugin-prettier") \
    $(package "eslint-plugin-promise") \
    $(package "eslint-plugin-react") \
    $(package "eslint-plugin-react-hooks") \
    $(package "eslint-plugin-standard") \
    $(package "@typescript-eslint/eslint-plugin") \
    $(package "@typescript-eslint/parser")
  # Installation must happen outside the frontend directory to avoid installing
  # all packages, so afterwards, we move dependencies to frontend folder so the
  # ESLint config can resolve them correctly.
  mkdir frontend/node_modules
  mv node_modules/* frontend/node_modules
  # Add a rule for the CI only that ignores import resolution errors, so that we
  # do not have to install all the project dependencies, only the ESLint ones.
  cp frontend/.eslintrc frontend/.eslintrc.original
  # Turn off Prettier for the new file so that the pre-commit checkes do not
  # fail due to the reformatting done by jq.
  echo "frontend/.eslintrc" > .prettierignore
  jq '.rules += {"import/no-unresolved": "off"}' frontend/.eslintrc.original | jq > frontend/.eslintrc

elif [ "$1" == "lint-frontend" ]; then
  cd frontend
  npm run lint "${@:2}"

elif [ "$1" == "format-frontend" ]; then
  cd frontend
  npm run format "${@:2}"

elif [ "$1" == "storybook" ]; then
  if command -v gp &> /dev/null; then
    gp env VITE_STORYBOOK_URL=$(gp url "$STORYBOOK_PORT")
    eval $(gp env -e)
  else
    VITE_STORYBOOK_URL="http://localhost:$STORYBOOK_PORT"
  fi
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
    gp env ENVIRONMENT="development"
    gp env API_DATABASE_URL="$PREFECT__CONTEXT__SECRETS__database_url"
    gp env API_ADMIN_CREDENTIALS="$PREFECT__CONTEXT__SECRETS__admin_credentials"
    eval $(gp env -e)
  else
    SECRET_KEY=$RANDOM
    ENVIRONMENT="development"
    echo "Firebase keys are not automated for non-GitPod runs."
    exit 1
  fi
  echo "SECRET_KEY=$SECRET_KEY" > .env
  echo "ENVIRONMENT=$ENVIRONMENT" >> .env
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
    gp env ENVIRONMENT="production"
    gp env API_DATABASE_URL="$PREFECT__CONTEXT__SECRETS__database_url"
    gp env API_ADMIN_CREDENTIALS="$PREFECT__CONTEXT__SECRETS__admin_credentials"
    eval $(gp env -e)
  else
    SECRET_KEY=$RANDOM
    ENVIRONMENT="production"
    echo "Firebase keys are not automated for non-GitPod runs."
    exit 1
  fi
  echo "SECRET_KEY=$SECRET_KEY" > .env
  echo "ENVIRONMENT=$ENVIRONMENT" >> .env
  echo "API_DATABASE_URL=$API_DATABASE_URL" >> .env
  echo "API_ADMIN_CREDENTIALS=$API_ADMIN_CREDENTIALS" >> .env
  # Run the backend in development mode
  python3 backend/manage.py migrate
  gunicorn server.wsgi --bind 0.0.0.0:$BACKEND_PORT --chdir=backend

elif [ "$1" == "flow" ]; then
  # Set Prefect secrets then run a flow
  source .venv/bin/activate
  FLOW_NAME="$2"
  set_prefect_secrets
  python3 pipeline/scripts/run_flow.py "$FLOW_NAME"

elif [ "$1" == "prefect" ]; then
  # Run local Prefect UI to explore and run offline pipelines
  source .venv/bin/activate
  # Update GitPod machine Prefect config to connect Prefect dashboard to GraphQL
  if command -v gp &> /dev/null; then
    echo "Updating ~/.prefect/config.toml ..."
    touch prefect.toml
    echo "[server]" >> prefect.toml
    echo "  [server.ui]" >> prefect.toml
    echo "  apollo_url = \"$(gp url 4200)/graphql\"" >> prefect.toml
    mkdir -p ~/.prefect
    cp prefect.toml ~/.prefect/config.toml
    rm prefect.toml
  fi
  # Stop Prefect server in case it is already running
  prefect server stop
  # Set Prefect backend to local server
  prefect backend server
  # Start Prefect services in the background
  prefect server start --detach
  # Create project for flows
  prefect create project butterfly
  # Register latest version of flows
  python3 pipeline/scripts/register_all_flows.py
  # Set Prefect secrets, necessary for executing flows
  set_prefect_secrets
  # Stop both parallel processes with one exit command
  # https://unix.stackexchange.com/a/107405
  trap stop_parallel SIGINT
  stop_parallel () {
    echo "Stopping parallel processes..."
    kill 0
  }
  # Start local agent, necessary for executing flows
  # In parallel, listen for changes and register new flow versions
  prefect agent local start &
  python3 pipeline/scripts/register_listener.py &
  wait

elif [ "$1" == "prefect-register" ]; then
  # Register latest version of flows with Prefect Server
  source .venv/bin/activate
  prefect create project butterfly
  python3 pipeline/scripts/register_all_flows.py

elif [ "$1" == "prefect-listen" ]; then
  # Register latest version of flows with Prefect Server
  source .venv/bin/activate
  python3 pipeline/scripts/register_listener.py

else
  echo "No run shortcut found for: $1"
  echo "Did you pull the latest version?"

fi
