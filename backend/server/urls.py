from django.urls import include, path
from ninja import NinjaAPI

from backend.core.urls import router as core_router
from backend.utils import get_ninja_api_settings

from . import views

ninja_settings = get_ninja_api_settings()
api = NinjaAPI(**ninja_settings)
api.add_router("/core", core_router)

urlpatterns = [
    path("", views.hello),
    path("", api.urls),
    path("attributes/", include("backend.attributes.urls")),
    path("chat/", include("backend.chat.urls")),
    path("ratings/", include("backend.ratings.urls")),
]
