#!/bin/bash

if [[ $1 == "-p" ]]; then
    # Update versioning
    file="changelog.txt"
    version=$(cat "$file")
    new_version=`expr $version + 1`
    echo -e $new_version'\n' > $file

    # Doing all the Git stuff
    git add .
    if [ -n "$2" ]; then
        git commit -m "$2"
    else
        git commit -m 'auto commit to push to the server'
    fi
    git push origin master
fi

# Ask server to pull latest version
ssh -t rob@vps437326.ovh.net "cd /var/www/html/faceMatchJS; sudo git pull; exit"

echo "done!"
