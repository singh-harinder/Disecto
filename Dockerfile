FROM node:14-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
EXPOSE 4900
RUN npm run build
FROM node:14-alpine
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm install
COPY --from=build /app ./
CMD ["npm", "start"]