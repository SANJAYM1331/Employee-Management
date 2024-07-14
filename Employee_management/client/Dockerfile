FROM node:18-alpine

WORKDIR /react-vite-app

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./

EXPOSE 5180

CMD ["npm", "run", "dev"]