FROM node:lts-alpine3.19 as development

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --force

COPY . .

#############################################

FROM node:lts-alpine3.19 as production

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --force

COPY . .

RUN npm run build