FROM node:lts-alpine3.15

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

COPY . .

ENV HOST=
ENV PORT=

EXPOSE 5000

CMD [ "npm", "start" ]