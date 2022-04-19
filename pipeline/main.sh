source .venv/bin/activate
COMMUNITY="demo"
RELEASE="2022-04-10"
python3 pipeline/scripts/download_users.py
python3 pipeline/scripts/download_recent_matches.py --community=$COMMUNITY
python3 pipeline/main.py --community=$COMMUNITY --release=$RELEASE --matching_retries=5
python3 pipeline/scripts/delete_matches.py --community=$COMMUNITY --release=$RELEASE --force
python3 pipeline/scripts/upload_matches.py