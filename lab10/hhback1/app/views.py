from django.core import serializers
from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from rest_framework import generics

from .models import Company, Vacancy
from .serializers import VacancySerializer


# Create your views here.
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        data = serializers.serialize('json', companies)
        return HttpResponse(data, content_type='application/json')
    else:
        return HttpResponse(status=400)


class CompanyDetailView(View):
    def get(self, request, pk):
        try:
            company = Company.objects.get(pk=pk)
            data = serializers.serialize('json', [company])
            return HttpResponse(data, content_type='application/json')
        except Company.DoesNotExist:
            return HttpResponse(status=400)


class VacancyListView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class VacancyCompanyListView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['pk']

        return Vacancy.objects.filter(company=company_id)


class VacancyDetailView(View):
    def get(self, request, pk):
        try:
            vacancies = Vacancy.objects.get(pk=pk)
            data = serializers.serialize('json', [vacancies])
            return HttpResponse(data, content_type='application/json')
        except Vacancy.DoesNotExist:
            return HttpResponse(status=400)
