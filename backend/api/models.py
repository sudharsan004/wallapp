from django.db import models

# Create your models here.
class Post(models.Model):
  title = models.CharField(max_length=100)
  description = models.CharField(max_length=350)
  user_id = models.IntegerField()
  created_at = models.DateTimeField(auto_add_now=True)