from django.urls import path
from ninja import Router

from backend.attributes.views.attribute import router as attribute_router

router = Router()
router.add_router("/", attribute_router)
