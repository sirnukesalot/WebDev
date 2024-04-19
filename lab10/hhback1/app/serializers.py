from rest_framework import serializers
from .models import Vacancy,Company

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class VacancySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    description = serializers.CharField(max_length=200)
    salary = serializers.FloatField()
    company = serializers.ReadOnlyField(source='company.name')
    class Meta:
        model = Vacancy
        fields = '__all__'
