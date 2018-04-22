import logging
import http
import json
import re

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.http import HttpResponse, HttpResponseRedirect

from apollo.models import (Gallery, Image, Reel, Article, ResumeSection, ResumeRow)

log = logging.getLogger(__name__)


def get_articles(request):
    """
    GET all articles.
    """
    try:
        log.debug("Path: {0}".format(request.path))
        content = {'articles': []}
        articles = Article.objects.order_by('-order')

        for article in articles:
            data = {
                'header': article.header,
                'content': article.content,
            }
            if article.image:
                image = Image.objects.get(id=article.image.id)
                if image:
                    src = re.sub(r'open', 'uc', image.src)
                    data['image'] = {
                        'src': src,
                        'caption': image.caption
                    }
            content['articles'].append(data)

        status = http.client.OK
        return HttpResponse(content=json.dumps(content), status=status, content_type='application/json')

    except Exception as e:
        log.info('Error: {0}'.format(e))
        content = e
        status = http.client.BAD_REQUEST
        return HttpResponse(content=content, status=status, content_type='application/json')


def get_resume(request):
    """
    GET all resume content.
    """
    try:
        log.debug("Path: {0}".format(request.path))
        content = {'resume': []}
        sections = ResumeSection.objects.order_by('order')

        for section in sections:
            data = {
                'header': section.header,
                'content': [],
            }
            rows = ResumeRow.objects.filter(section=section.id).order_by('-order')
            for row in rows:
                r = {
                    'column1': row.column1,
                    'column2': row.column2,
                    'column3': row.column3,
                }
                data['content'].append(r)
            content['resume'].append(data)

        status = http.client.OK
        return HttpResponse(content=json.dumps(content), status=status, content_type='application/json')

    except Exception as e:
        log.info('Error: {0}'.format(e))
        content = e
        status = http.client.BAD_REQUEST
        return HttpResponse(content=content, status=status, content_type='application/json')


def get_images(request):
    """
    GET all images
    """
    try:
        log.debug("Path: {0}".format(request.path))
        content = {'images': {}}
        galleries = Gallery.objects.order_by('order')

        for gallery in galleries:
            images = Image.objects.filter(gallery=gallery.id).order_by('order')
            data = []
            for image in images:
                src = re.sub(r'open', 'uc', image.src)
                i = {
                    'caption': image.caption,
                    'src': src
                }
                data.append(i)
            content['images'][gallery.name] = data

        status = http.client.OK
        return HttpResponse(content=json.dumps(content), status=status, content_type='application/json')

    except Exception as e:
        log.info('Error: {0}'.format(e))
        content = e
        status = http.client.BAD_REQUEST
        return HttpResponse(content=content, status=status, content_type='application/json')


def get_reels(request):
    """
    GET all reels
    """
    try:
        log.debug("Path: {0}".format(request.path))
        content = {'reels': []}
        reels = Reel.objects.order_by('order')

        for reel in reels:
            i = {
                'title': reel.title,
                'src': reel.src
            }
            content['reels'].append(i)

        status = http.client.OK
        return HttpResponse(content=json.dumps(content), status=status, content_type='application/json')

    except Exception as e:
        log.info('Error: {0}'.format(e))
        content = e
        status = http.client.BAD_REQUEST
        return HttpResponse(content=content, status=status, content_type='application/json')