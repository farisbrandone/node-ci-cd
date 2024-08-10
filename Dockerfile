# Dockerfile

FROM node:21.6.2-alpine As base
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY ./package*.json .
RUN npm install -g npm@10.8.2
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start"]