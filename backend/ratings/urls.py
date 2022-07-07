from django.urls import path
from ninja import Router

from backend.ratings.views.ratings import router as ratings_router

router = Router()
router.add_router("", ratings_router)
