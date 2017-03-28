#!/bin/bash
# pre-condition: the current working branch is 'withJekyll'
# post-condition: the current working branch is still 'withJekyll'

git add .

git commit -m "$1"

git push origin development

# git checkout master

# git merge development

# git push origin master

# git checkout development

exit 0
