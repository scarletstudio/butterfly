from django.urls import path
from ninja import Router

from backend.ratings.views.rate_match import router as rate_match_router
from backend.ratings.views.upvote_user import router as upvote_user_router

router = Router()
router.add_router("", rate_match_router)
router.add_router("", upvote_user_router)
