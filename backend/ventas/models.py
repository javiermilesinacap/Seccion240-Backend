from django.db import models

# Create your models here.
class Producto(models.Model):
    codigo = models.CharField(max_length=10)
    nombre = models.CharField(max_length=100)
    cantidad = models.IntegerField(default=0)

