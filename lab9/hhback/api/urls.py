from django.urls import path
from . import views
from .views import CompanyListView, CompanyDetailView, VacancyListView, VacancyDetailView, VacancyTop

urlpatterns = [
    path('companies/', CompanyListView.as_view()),
    path('companies/<int:pk>/', CompanyDetailView.as_view()),
    path('companies/<int:pk>/vacancies/', VacancyListView.as_view()),
    path('vacancies/', VacancyListView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view()),
    path('vacancies/top/', VacancyTop.as_view()),

]