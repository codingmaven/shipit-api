#!/usr/bin/env bash
# make directory if not there
export HOSTNAME="ws-api.cloudapp.net"
DEPLOY_PATH="/home/ubuntu/phoyolabs/"
rm -rf "$DEPLOY_PATH"
mkdir -p "$DEPLOY_PATH"
#prepare ssh key
ssh-add ~/.ssh/id_rsa
nvm use stable
# Go to the solution dir
cd "$DEPLOY_PATH"
# get the latest code from master
git clone git@github.com:doorspot/phoyolabs.git .
git fetch
git checkout master
git pull origin master
# Kill all the app processes, yess app will be down, while the deployment is going on
pm2 stop all
pm2 delete all
# Set up the api server, this should be 3000
npm install
bash scripts/precompile
pm2 start dist/server.js --name phoyolabs-backend

# Run mongo-express on port 8081
cd mongo-express
npm install
pm2 start app.js --name phoyolabs-mongo

#Run pm2-gui on port 8088

pm2-gui set password 1234
nohup pm2-gui start 8090 > /dev/null 2>&1 &
