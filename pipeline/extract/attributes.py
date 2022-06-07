from prefect import task

from pipeline.types import Community, RawUserIntents, RawUserInterests


@task
def extract_interests(db, community: Community) -> RawUserInterests:
    ref = db.reference(f"attributes/interests/{community}")
    raw = ref.get()
    return raw


@task
def extract_intents(db, community: Community) -> RawUserIntents:
    ref = db.reference(f"attributes/intents/{community}")
    raw = ref.get()
    return raw
