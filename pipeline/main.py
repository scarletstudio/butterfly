import pandas as pd


INFILE_RAW_USERS = "data/raw_users.csv"


def main():
  users = pd.read_csv(INFILE_RAW_USERS)
  print(f"Read {len(users)} users.")


if __name__ == "__main__":
  main()
