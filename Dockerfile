FROM node:16-alpine3.14

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
RUN yarn install

CMD ["yarn", "start"]
