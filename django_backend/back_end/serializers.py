
from rest_framework.serializers import ModelSerializer

from .models import Back_end


class Back_endSerializer(ModelSerializer):
    class Meta:
        model = Back_end
        fields = ['id', 'name', 'course', 'rating', ]
