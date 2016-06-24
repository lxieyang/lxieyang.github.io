#!/bin/bash
# pre-condition: the current working branch is 'withJekyll'
# post-condition: the current working branch is still 'withJekyll'

git add .

git commit -m "$1"

git push origin withJekyll

git checkout master

git merge withJekyll

git push origin master

git checkout withJekyll

exit 0
