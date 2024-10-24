# Node
FROM node:22-alpine as build
WORKDIR /app

COPY public/ /app/public 
COPY src/ /app/src 
COPY package*.json /app/
COPY tsconfig.json /app/

RUN npm install
RUN npm run build
COPY . .

# Apache
FROM httpd:2.4.62 as apache 
COPY --from=build /app/build /usr/local/apache2/htdocs/

EXPOSE 80

