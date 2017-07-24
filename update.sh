#!/bin/bash

if [[ $1 == "-p" ]]; then
   if [ -n "$2" ]; then
        git commit -m "$2"
    else
        git commit -m 'auto commit to push to the server'
    fi
    git push origin master
fi

ssh -t rob@vps437326.ovh.net "cd /var/www/html/faceMatchJS; sudo git pull; exit"

echo "done!"
