FROM node:hydrogen-alpine3.19
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 3001
CMD ["node","index.js"]
