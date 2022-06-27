from django.urls import path
from ninja import Router

from backend.chat.views.block_user import router as block_user_router

router = Router()
router.add_router("/block", block_user_router)
