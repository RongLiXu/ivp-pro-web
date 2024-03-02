# nginx 部署
FROM nginx:1.25.2-alpine as prod-stage
# RUN rm -rf ./html/appConfig.js
# COPY ./config/appConfig.js ./html/appConfig.js
COPY ./dist /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/config/*
VOLUME /usr/share/nginx/html/config/
VOLUME /var/log/nginx
VOLUME /var/www/

EXPOSE 80
EXPOSE 443
RUN echo "🎉 架 🎉 设 🎉 成 🎉 功 🎉"