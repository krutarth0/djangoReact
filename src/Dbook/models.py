from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Category(models.Model):
        category = models.CharField(max_length=30)

        def __str__(self):
            return self.category




class Book (models.Model):

    name = models.CharField(max_length =120,unique=True)
    Author = models.ForeignKey(Author, on_delete=models.PROTECT)

    released_date=models.DateField()
    num_suggetions = models.IntegerField(blank=True)
    category = models.ForeignKey(Category,on_delete=models.PROTECT)


    Author_quote = models.TextField(default="Author's word on this book",blank=True)
    price = models.IntegerField(blank=True)
    book_front = models.ImageField(upload_to='book_front' )
    page_count = models.IntegerField()
    awards = models.CharField(max_length=120,blank=True)

    slug = models.SlugField(blank=True)
    featured = models.BooleanField(default=False , blank=True)
    ISBN = models.CharField(max_length=1000 ,blank=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse ('book-detail' ,kwargs={'slug':self.slug})

    def __unicode__(self):
        return self.category
