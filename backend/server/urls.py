from django.urls import include, path
from ninja import NinjaAPI

from backend.attributes.urls import router as attributes_router
from backend.chat.urls import router as chat_router
from backend.core.urls import router as core_router
from backend.ratings.urls import router as ratings_router
from backend.server.views import router as server_router
from backend.utils import get_ninja_api_settings

from . import views

ninja_settings = get_ninja_api_settings()
api = NinjaAPI(**ninja_settings)
api.add_router("", server_router)
api.add_router("/attributes", attributes_router)
api.add_router("/chat", chat_router)
api.add_router("/core", core_router)
api.add_router("/ratings", ratings_router)

urlpatterns = [
    path("", api.urls),
]
