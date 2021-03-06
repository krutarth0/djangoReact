# Generated by Django 2.1.5 on 2019-02-14 11:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120, unique=True)),
                ('released_date', models.DateField()),
                ('num_suggetions', models.IntegerField(blank=True)),
                ('Author_quote', models.TextField(blank=True, default="Author's word on this book")),
                ('price', models.IntegerField(blank=True)),
                ('book_front', models.ImageField(upload_to='book_front')),
                ('page_count', models.IntegerField()),
                ('awards', models.CharField(blank=True, max_length=120)),
                ('slug', models.SlugField(blank=True)),
                ('featured', models.BooleanField(blank=True, default=False)),
                ('ISBN', models.CharField(blank=True, max_length=1000)),
                ('Author', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='Dbook.Author')),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=30)),
            ],
        ),
        migrations.AddField(
            model_name='book',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='Dbook.Category'),
        ),
    ]
