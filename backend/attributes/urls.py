from django.urls import path

from backend.attributes.views import view_user_intents, view_user_interests

urlpatterns = [
    path("user_intents", view_user_intents),
    path("user_interests", view_user_interests),
]
