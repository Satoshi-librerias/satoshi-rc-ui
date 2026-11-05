# Storybook estatico: build multistage y servidor nginx.
# Build:  docker build -t satoshi-storybook .
# Run:    docker run -p 8080:80 satoshi-storybook

FROM node:24-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --no-audit --no-fund

COPY . .
RUN npm run build:storybook

FROM nginx:alpine
COPY --from=build /app/docs/storybook /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
