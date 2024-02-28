# Generated by Django 4.2.10 on 2024-02-28 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("backend", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(model_name="post", name="photo1",),
        migrations.RemoveField(model_name="post", name="photo10",),
        migrations.RemoveField(model_name="post", name="photo2",),
        migrations.RemoveField(model_name="post", name="photo3",),
        migrations.RemoveField(model_name="post", name="photo4",),
        migrations.RemoveField(model_name="post", name="photo5",),
        migrations.RemoveField(model_name="post", name="photo6",),
        migrations.RemoveField(model_name="post", name="photo7",),
        migrations.RemoveField(model_name="post", name="photo8",),
        migrations.RemoveField(model_name="post", name="photo9",),
        migrations.AddField(
            model_name="post",
            name="photo",
            field=models.FileField(blank=True, null=True, upload_to="news/photos/"),
        ),
    ]
