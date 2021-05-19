FROM node:10
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]