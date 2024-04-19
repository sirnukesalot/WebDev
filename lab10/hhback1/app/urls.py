from django.urls import path
from . import views
from .views import company_list, CompanyDetailView, VacancyCompanyListView, VacancyListView,VacancyDetailView

urlpatterns = [
    path('companies/',company_list, name ='company_list' ),
    path('companies/<int:pk>', CompanyDetailView.as_view(), name='company_detail'),
    path('companies/<int:pk>/vacancies/', VacancyCompanyListView.as_view()),
    path('vacancies/',VacancyListView.as_view()),
    path('vacancies/<int:pk>',VacancyDetailView.as_view(), name = 'vacancy_detail'),
]