from django.urls import path
from ninja import Router

from backend.analytics.views.collect import router as collection_router

router = Router()
router.add_router("/collect", collection_router)
