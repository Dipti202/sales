FROM node:7
WORKDIR /app
COPY pakage.jason/app
RUN npm install
COPY ./app 
CMD node server.js
EXPOSE 9000