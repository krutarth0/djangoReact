from Dbook.api.views import BookListView
from rest_framework import routers

router = routers.DefaultRouter()

router.register('book',BookListView)
