FROM node as build-stage
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

FROM fitiavana07/nginx-react

# Copy built files
COPY --from=build-stage /app/build /usr/share/nginx/html

# 80 for HTTP
EXPOSE 80

# Run nginx
CMD nginx -g 'daemon off;'