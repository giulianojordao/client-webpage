from django.contrib import admin

from apollo.models import (Gallery, Image, Reel, Article, ResumeSection, ResumeRow)

from django.db import models


class GalleryAdmin(admin.ModelAdmin):
    list_display = ('order', 'name',)
    ordering = ('order',)


class ImageAdmin(admin.ModelAdmin):
    list_display = ('order', 'caption', 'gallery', 'src', 'id',)
    ordering = ('gallery__order', 'order')
    list_filter = ['gallery']
    search_fields = ('caption', 'gallery__name', 'src', 'id',)


class ReelAdmin(admin.ModelAdmin):
    list_display = ('order', 'title', 'src',)
    ordering = ('order', 'title')
    search_fields = ('order', 'title', 'src',)


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('order', 'header', 'content', 'image')
    ordering = ('order',)
    search_fields = ('header', 'content', 'image__caption',)


class ResumeSectionAdmin(admin.ModelAdmin):
    list_display = ('order', 'header',)
    ordering = ('order',)
    search_fields = ('header',)


class ResumeRowAdmin(admin.ModelAdmin):
    list_display = ('order', 'section', 'column1', 'column2', 'column3',)
    ordering = ('section', 'order',)
    list_filter = ['section']
    search_fields = ('column1', 'column2', 'column3', 'section__header',)


admin.site.register(Gallery, GalleryAdmin)
admin.site.register(Image, ImageAdmin)
admin.site.register(Reel, ReelAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(ResumeSection, ResumeSectionAdmin)
admin.site.register(ResumeRow, ResumeRowAdmin)
