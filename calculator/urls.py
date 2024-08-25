from django.urls import path
from .views import calculate, index

# det URL routing so that the view cam be accessed from the frontend
urlpatterns = [
    
    path('', index, name='index'), # index endpoint
    path('calculate/', calculate, name='calculate'), # calculate endpoint
   
]

