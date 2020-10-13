FROM node:latest
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm run dev
EXPOSE 3000