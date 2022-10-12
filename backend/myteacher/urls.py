from django.contrib import admin
from django.urls import path

from app.views import HomeAppView
from teacher.views import ProfessorAPIView, CadastrarAulaAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', HomeAppView.as_view()),
    path('professores/', ProfessorAPIView.as_view()),
    path('professores/<int:id>/aulas', CadastrarAulaAPIView.as_view())
]
