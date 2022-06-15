from django.urls import include, path

from . import views

urlpatterns = [
    path("", views.hello),
    path("attributes/", include("backend.attributes.urls")),
    path("chat/", include("backend.chat.urls")),
    path("core/", include("backend.core.urls")),
    path("ratings/", include("backend.ratings.urls")),
]
