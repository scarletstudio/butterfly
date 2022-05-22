#!/bin/bash

# Tells the script to exit if a command fails instead of continuing
set -e

FRONTEND_PORT=4000
BACKEND_PORT=8000

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

elif [ "$1" == "prefect-local-flow" ]; then
  # Set Prefect secrets then run a flow
  source .venv/bin/activate
  if command -v gp &> /dev/null; then
    env $(gp env) python3 "$2"
  else
    env $(cat .env.prefect | xargs) python3 "$2"
  fi

elif [ "$1" == "prefect-dashboard" ]; then
  # Run local Prefect UI to explore and run offline pipelines
  # Set Prefect backend to local server
  prefect backend server
  # Start Prefect services in the background
  prefect server start --detach
  # Create project for flows
  prefect create project butterfly
  # Register latest version of flows
  python3 pipeline/register_all_flows.py
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
  python3 pipeline/register_all_flows.py

else
  echo "No run shortcut found for: $1"
  echo "Did you pull the latest version?"

fi
