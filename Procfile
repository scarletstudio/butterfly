release: python3 backend/manage.py migrate
web: gunicorn server.wsgi --bind 0.0.0.0:$BACKEND_PORT --chdir backend
