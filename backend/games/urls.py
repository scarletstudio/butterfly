from django.urls import path
from ninja import Router

from backend.games.views.word_guesser import router as word_guesser_router

router = Router()
router.add_router("/wordguesser", word_guesser_router)
