from django.urls import path
from .views import RecipeListCreate, RecipeDetail

urlpatterns = [
    path('recipes/', RecipeListCreate.as_view(), name='recipe-list-create'),
    path('recipes/<int:pk>/', RecipeDetail.as_view(), name='recipe-detail'),
]