# Generated by Django 3.1.5 on 2021-01-20 21:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='user',
        ),
        migrations.AddField(
            model_name='post',
            name='user_name',
            field=models.CharField(default='admin', max_length=150),
            preserve_default=False,
        ),
    ]
