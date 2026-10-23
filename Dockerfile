FROM node:26.12.1-alpine3.23

# node:26 images no longer bundle Yarn. Install Yarn classic (matches yarn.lock).
RUN npm install yarn -g --force

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
RUN yarn install

CMD ["yarn", "start"]
