from django.shortcuts import render

def registration(request):
    return render(request, 'main_app/registration.html')
def home(request):
    return render(request, 'main_app/home.html')

def about(request):
    return render(request, 'main_app/about.html')

def contact(request):
    return render(request, 'main_app/contact.html')

