from prefect import task

from pipeline.types import RawAnalytics


@task
def extract_analytics(db) -> RawAnalytics:
    ref = db.reference(f"analytics/")
    raw = ref.get()
    return raw if raw else {}
