#!/bin/bash

git add .
git commit -m 'auto commit to push to the server'
git push origin master

ssh rob@vps437326.ovh.net "cd /var/www/html/faceMatchJS; git pull; exit"

echo "done!"
