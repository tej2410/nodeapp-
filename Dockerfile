FROM node:14

WORKDIR /usr/src/hello
COPY package*json  ./

RUN npm install

COPY . .
EXPOSE 1000
CMD ["node" , "hello.js"]