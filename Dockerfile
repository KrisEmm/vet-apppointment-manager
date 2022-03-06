FROM node:14.16.1-alpine3.11
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD yarn run start
