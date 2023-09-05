FROM node:14-alpine
WORKDIR /app
ENV PATH /node_module_modules/.bin:$PATH
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "run","start"]