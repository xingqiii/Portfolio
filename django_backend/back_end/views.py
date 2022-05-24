from rest_framework.response import Response
from rest_framework import generics
from .models import Back_end
from .serializers import Back_endSerializer
from rest_framework.permissions import IsAuthenticated


# Create your views here.

class Back_endView(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = Back_end.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = Back_endSerializer(queryset, many=True)
        return Response(serializer.data)
