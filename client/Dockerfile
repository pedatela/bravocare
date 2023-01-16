FROM node:erbium-stretch

WORKDIR /usr/src/client
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENV REACT_APP_API_HOST=
CMD [ "npm", "start" ]