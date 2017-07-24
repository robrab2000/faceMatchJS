#!/bin/bash

git add .
git commit -m 'auto commit to push to the server'
git push origin master

ssh -t rob@vps437326.ovh.net "cd /var/www/html/faceMatchJS; sudo git pull; exit"

echo "done!"
