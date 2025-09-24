from django.db import models

# Create your models here.
class Tour(models.Model):
    # we neec origin ,country , destination , price , duration , date 
    origin_country = models.CharField(max_length = 60 )
    destination_country = models.CharField(max_length = 60 )
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.IntegerField()
    date = models.DateField()

    # this is a string represtation of the model
    def __str__(self):
        return f" {self.origin_country} to {self.destination_country} on {self.date}"
