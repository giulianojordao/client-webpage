# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'apollo',
        'USER': 'USERNAME',
        'PASSWORD': 'PASSWORD',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}

LOGS_DIR = 'logs/apollo.log'
LOGGING = {
    'version': 1,
    'disable_existing_loggers': True,
    'formatters': {
        'verbose': {
            'format': "[%(asctime)s] %(levelname)s [%(name)s:%(lineno)s] %(message)s",
            'datefmt': "%d/%b/%Y %H:%M:%S"
        },
        'simple': {
            'format': '%(levelname)s %(message)s'
        },
    },
    'handlers': {
        'file': {
            'level': 'DEBUG',
            # 'class': 'logging.handlers.RotatingFileHandler',
            'class': 'logging.FileHandler',
            'filename': LOGS_DIR,
            # 'maxBytes': 50000,
            # 'backupCount': 2,
            'formatter': 'verbose'
        },
        'SysLog': {
            'level': 'DEBUG',
            'class': 'logging.handlers.SysLogHandler',
            'formatter': 'verbose',
            'address': ('localhost', 11111)
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['file'],
            'level': 'DEBUG',
            'propagate': True,
        },
        'mec': {
            'handlers': ['file'],
            'level': 'DEBUG',
            'propagate': True,
        },
    },
}
