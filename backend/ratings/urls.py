from django.urls import path
from ratings.views import view_rate_match, view_upvote_user

urlpatterns = [
    path("rate_match", view_rate_match),
    path("upvote_user", view_upvote_user),
]
