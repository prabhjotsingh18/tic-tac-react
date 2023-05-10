FROM node:18-alpine
MAINTAINER prosingh2520@gmail.com

WORKDIR /usr/app
COPY ./ /usr/app

RUN npm install

CMD ["npm","start"]
EXPOSE 80