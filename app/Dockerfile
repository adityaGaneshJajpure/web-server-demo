FROM node:alpine3.19

RUN mkdir -p /app
WORKDIR /app

COPY package.json package-lock.json ./

# install packages
RUN npm install
COPY . /app 

EXPOSE 4000

CMD ["npm", "start"]
