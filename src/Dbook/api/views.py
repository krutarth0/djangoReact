
from rest_framework import permissions,viewsets
from rest_framework.generics import (
    ListAPIView
)
from Dbook.models import Book
from .serializers import BookSerializer


class BookListView(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = (permissions.AllowAny, )
