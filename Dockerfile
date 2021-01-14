FROM node:latest
COPY . /var/www
WORKDIR /var/www
RUN yarn --silent
ENTRYPOINT npm run dev
EXPOSE 3000