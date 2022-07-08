from django.urls import path
from ninja import Router

from backend.core.views.community import router as community_router
from backend.core.views.user import router as user_router

router = Router()
router.add_router("/community", community_router)
router.add_router("/user", user_router)
