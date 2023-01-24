from django.db import models

class Note(models.Model):
  title = models.CharField(max_length=20, default='Untitled')
  color = models.CharField(max_length=7, default='#F9EFC7')
  body = models.CharField(max_length=200, default='')