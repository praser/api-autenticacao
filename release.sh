#!/bin/bash

toZip() {
  yarn build
  mv dist $RELEASE
  cp package.json ./$RELEASE
  cp yarn.lock ./$RELEASE
  cp .env ./$RELEASE
  cp .env.example ./$RELEASE
  cd $RELEASE
  yarn --production
  rm -rf package.json yarn.lock
  cd ..
  zip -r $RELEASE.zip ./$RELEASE
  rm -rf $RELEASE
}

toContainer() {
  docker build . -t praser/api-autenticacao:$tag
  docker build . -t praser/api-autenticacao:latest
  docker push praser/api-autenticacao:$tag
  docker push praser/api-autenticacao:latest
}

read -p "Qual a tag da release? " tag
RELEASE="api-auth-$tag"

while getopts ":zc" option; do
  case $option in
    z)
      toZip
      exit;;
    c) toContainer
      exit;;
  esac
done