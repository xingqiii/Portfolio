from rest_framework.viewsets import ModelViewSet

from .models import Back_end
from .serializers import Back_endSerializer

# Create your views here.


class Back_endViewSet(ModelViewSet):
    queryset = Back_end.objects.all()
    serializer_class = Back_endSerializer
