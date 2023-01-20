FROM node:alpine
WORKDIR /Users/santi/Desktop/challengeTuGerente/src
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]