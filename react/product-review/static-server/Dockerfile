FROM node:carbon AS backend-proxy
WORKDIR /usr/projects/backend-proxy

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001
CMD [ "npm", "start" ]
USER node
