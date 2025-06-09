FROM nginx
WORKDIR /app
RUN apt update
RUN apt install -y nodejs
RUN apt install -y npm
RUN npm install -y init
RUN npm install -y express
RUN npm install -y mysql
RUN npm install -y body-parser
COPY index.js /app
CMD ["node", "index.js"]
EXPOSE 9596
