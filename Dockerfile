FROM node:20.12.1-alpine as build
WORKDIR /usr/app
COPY . /usr/app/
RUN yarn install

ARG VITE_API_URL=https://apiservice.containers.cloud.ru
ARG VITE_APP_URL=https://sfootball.space
ENV NODE_ENV=production
ENV VITE_NODE_ENV=prod
ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_APP_URL=${VITE_APP_URL}

RUN yarn build

FROM nginxinc/nginx-unprivileged
EXPOSE 8080 443
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/dist /usr/share/nginx/html