# Base on offical NGINX Alpine image
FROM nginx:1.19.0-alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./default.conf /etc/nginx/conf.d/

# Expose the listening port
EXPOSE 7003
EXPOSE 7005
EXPOSE 7006

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]
