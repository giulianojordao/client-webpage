from .settings import *
from .sensitive_settings import *

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "assets"),
]

# DEBUG = False

WEBPACK_LOADER = {
    'DEFAULT': {
            'BUNDLE_DIR_NAME': 'bundles/',
            'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.prod.json'),
        }
}