#!/usr/bin/env bash
read -p "Please input your VERSION_NAME: " VERSION_NAME
echo Your VERSION_NAME is $VERSION_NAME
./gradlew clean
./gradlew assembleRelease -PVERSION_NAME_PARA=$VERSION_NAME
