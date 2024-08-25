from django.urls import path
from .views import calculate

# det URL routing so that the view cam be accessed from the frontend
urlpatterns = [
    path('calculate/', calculate, name='calculate'),
    path('', index, name='index'), 
]

