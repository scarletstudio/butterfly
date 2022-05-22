#!/bin/bash

# Tells the script to exit if a command fails instead of continuing
set -e

if [ "$1" == "frontend" ]; then
  echo "Starting frontend app..."
  cd frontend
  # Get the GitPod URL for the backend, for API requests
  # Get the GitPod URL for the frontend, for hot module reloading
  if command -v gp &> /dev/null; then
    gp env VITE_BACKEND_URL=$(gp url 8000)
    gp env VITE_FRONTEND_URL=$(gp url 3000)
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
    VITE_BACKEND_URL="http://localhost:8000"
    VITE_FRONTEND_URL="http://localhost:3000"
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
  python3 -m http.server 3000

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
    gp preview $(gp url 3000)
  else
    open "http://localhost:3000"
  fi

elif [ "$1" == "prefect-local" ]; then
  # Set Prefect secrets then run a flow
  env $(cat .env.prefect | xargs) python3 "$2"

else
  echo "No run shortcut found for: $1"
  echo "Did you pull the latest version?"

fi
