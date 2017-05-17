#!/usr/bin/env python
import os
from jinja2 import Environment, FileSystemLoader

PATH = os.path.dirname(os.path.abspath(__file__))
TEMPLATE_ENVIRONMENT = Environment(
    autoescape=False,
    loader=FileSystemLoader(os.path.join(PATH, 'templates')),
    trim_blocks=False,
    extensions=["jinja2.ext.do",])


def render_template(template_filename, context):
    return TEMPLATE_ENVIRONMENT.get_template(template_filename).render(context)


def create_index_html():
    fname = "index.html"
    site_title = "Dimension-line Tool"
    is_superclass_involved = True

    context = {
        'site_title' : site_title
    }

    with open(fname, 'w') as f:
        html = render_template('child.html', context)
        f.write(html)


def main():
    create_index_html()

########################################

if __name__ == "__main__":
    main()