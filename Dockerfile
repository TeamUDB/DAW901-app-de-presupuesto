FROM node:16-alpine as compiler

WORKDIR /app

COPY . .

# Script para compilar de el pipeline de Bitbucket.
RUN yarn install && yarn run build

FROM nginx:alpine-slim

COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
COPY --from=compiler /app/dist/ /usr/share/nginx/html