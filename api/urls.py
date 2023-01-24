from django.urls import path
from . import views

urlpatterns = [
  path('all', views.get_all),
  path('get/<int:pk>', views.get_note),
  path('create', views.create_note),
  path('update/<int:pk>', views.update_note),
  path('delete/<int:pk>', views.delete_note),
]