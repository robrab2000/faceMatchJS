#!/bin/bash

git add .
git commit -m 'auto commit to push to the server'
git push origin master

ssh -p18765 digit026@digitalheroics.com
cd public_html/faceMatchJS
git pull
exit
