from django.http import HttpResponse


def view_user_intents(request):
    return HttpResponse(status=200)
