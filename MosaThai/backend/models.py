from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=255)
    date_created = models.DateTimeField(auto_now_add=True)
    text = models.TextField()
    video = models.FileField(upload_to='news/videos/', null=True, blank=True)
    photo1 = models.ImageField(upload_to='news/photos/', blank=True)
    photo2 = models.ImageField(upload_to='news/photos/', blank=True)
    photo3 = models.ImageField(upload_to='news/photos/', blank=True)
    photo4 = models.ImageField(upload_to='news/photos/', blank=True)
    photo5 = models.ImageField(upload_to='news/photos/', blank=True)
    photo6 = models.ImageField(upload_to='news/photos/', blank=True)
    photo7 = models.ImageField(upload_to='news/photos/', blank=True)
    photo8 = models.ImageField(upload_to='news/photos/', blank=True)
    photo9 = models.ImageField(upload_to='news/photos/', blank=True)
    photo10 = models.ImageField(upload_to='news/photos/', blank=True)

    def __str__(self):
            return self.title


class Trainer(models.Model):
    name = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='trainers/')
    description = models.TextField()
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Price(models.Model):
    name = models.CharField(max_length=255)
    amount = models.IntegerField()

    def __str__(self):
        return self.name


class Merchandise(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    photos = models.ManyToManyField('MerchandisePhoto', blank=True, related_name='merchandise_photos')
    sizes = models.ManyToManyField('Size', blank=True)
    available_quantity = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class MerchandisePhoto(models.Model):
    merchandise = models.ForeignKey(Merchandise, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='merchandise/')


class Size(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class Feedback(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=300, blank=True, null=True, verbose_name='email')
    phone_number = models.CharField(max_length=15)
    date_created = models.DateTimeField(auto_now_add=True)
    text = models.TextField(max_length=1024)

    def __str__(self):
        return self.name



class TrainingRegistration(models.Model):
    LEVEL_CHOICES = [
        ('advanced', 'Advanced'),
        ('beginner', 'Beginner'),
        ('child', 'Child'),
        ('basic-course', 'Basic Course'),
    ]

    name = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    parent_name = models.CharField(max_length=255)
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES, default='beginner')

    def __str__(self):
        return self.name


class Contact(models.Model):
    company_name = models.CharField(max_length=100, null=True,verbose_name='Company name')
    address = models.CharField(max_length=255, blank=True, null=True, verbose_name='Company address')
    phone_number1 = models.CharField(max_length=15, blank=True, null=True, verbose_name='Phone number 1')
    phone_number2 = models.CharField(max_length=15, blank=True, null=True, verbose_name='Phone number 2')
    account_number = models.CharField(max_length=20, unique=True, blank=True, null=True, verbose_name='Account number')
    email = models.EmailField(max_length=300, unique=True, blank=True, null=True, verbose_name='email')
    registration_number = models.CharField(max_length=20, unique=True,blank=True, null=True,)

    def __str__(self):
        return self.address


class AboutUs(models.Model):
    text = models.TextField()

    def __str__(self):
        return self.text


class Schedule(models.Model):

    TRAINING_TYPE_CHOICES = [
        ('Advanced', 'Advanced'),
        ('Beginners', 'Beginners'),
        ('Children', 'Children'),
        ('Sparring', 'Sparring'),
        ('Basic Course', 'Basic Course'),
        ('-', '-'),
    ]

    time = models.CharField(max_length=20, verbose_name='Time')
    monday = models.CharField(max_length=12, choices=TRAINING_TYPE_CHOICES, default='-', verbose_name='Monday')
    tuesday = models.CharField(max_length=12, choices=TRAINING_TYPE_CHOICES, default='-', verbose_name='Tuesday')
    wednesday = models.CharField(max_length=12, choices=TRAINING_TYPE_CHOICES, default='-', verbose_name='Wednesday')
    thursday = models.CharField(max_length=12, choices=TRAINING_TYPE_CHOICES, default='-', verbose_name='Thursday')
    friday = models.CharField(max_length=12, choices=TRAINING_TYPE_CHOICES, default='-', verbose_name='Friday')
    saturday = models.CharField(max_length=12, choices=TRAINING_TYPE_CHOICES, default='-', verbose_name='Saturday')

    class Meta:
        verbose_name = 'Shedule'
        verbose_name_plural = 'Shedules'

    def __str__(self):
        return f'Shedule for {self.time}'