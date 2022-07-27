FROM node:7
WORKDIR /app1
COPY package.jason /app1
RUN npm install
COPY . /app1 
CMD node server.js
EXPOSE 9000