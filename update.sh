#!/bin/bash

if [[ $1 == "-p" ]]; then
    git add .
    git commit -m 'auto commit to push to the server'
    git push origin master
fi

ssh -t rob@vps437326.ovh.net "cd /var/www/html/faceMatchJS; sudo git pull; exit"

echo "done!"
