FROM node:20.12.1-alpine as build
WORKDIR /usr/app
COPY . /usr/app/
RUN yarn install
RUN yarn build

FROM nginxinc/nginx-unprivileged
EXPOSE 8080
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/dist /usr/share/nginx/html