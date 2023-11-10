FROM node:latest

COPY ./ /app

RUN cd /app \
    && npm i

WORKDIR /app

CMD ["npm", "start"]
