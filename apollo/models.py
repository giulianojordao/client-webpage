from django.db import models


class Gallery(models.Model):
    name = models.CharField(max_length=256)
    order = models.PositiveSmallIntegerField()

    def __str__(self):
        return '{0}'.format(self.name)


class Image(models.Model):
    src = models.TextField()
    caption = models.CharField(max_length=600, blank=True)
    gallery = models.ForeignKey(Gallery, null=True, blank=True, on_delete=models.SET_NULL)
    order = models.PositiveSmallIntegerField()

    def __str__(self):
        return '{0}'.format(self.caption)


class Reel(models.Model):
    title = models.CharField(max_length=600, blank=True)
    src = models.TextField()
    order = models.PositiveSmallIntegerField()

    def __str__(self):
        return '{0}'.format(self.title)


class Article(models.Model):
    header = models.CharField(max_length=128)
    content = models.TextField()
    image = models.ForeignKey(Image, null=True, blank=True, on_delete=models.SET_NULL)
    order = models.PositiveSmallIntegerField()

    def __str__(self):
        return '{0}'.format(self.header)


class ResumeSection(models.Model):
    header = models.CharField(max_length=128)
    order = models.PositiveSmallIntegerField()

    def __str__(self):
        return '{0}'.format(self.header)


class ResumeRow(models.Model):
    column1 = models.CharField(max_length=256, blank=True)
    column2 = models.CharField(max_length=256, blank=True)
    column3 = models.CharField(max_length=256, blank=True)
    section = models.ForeignKey(ResumeSection, on_delete=models.CASCADE)
    order = models.PositiveSmallIntegerField()

    def __str__(self):
        return 'Rows in section: {0}'.format(self.section.header)
