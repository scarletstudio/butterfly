source .venv/bin/activate
COMMUNITY="demo"
RELEASE="2022-04-03"
python3 pipeline/scripts/download_users.py
python3 pipeline/main.py --community=$COMMUNITY --release=$RELEASE
python3 pipeline/scripts/delete_matches.py --community=$COMMUNITY --release=$RELEASE
python3 pipeline/scripts/upload_matches.py