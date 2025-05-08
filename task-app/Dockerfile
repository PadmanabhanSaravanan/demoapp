# Dockerfile.frontend
FROM node:20 AS builder

WORKDIR /app
COPY task-app/ ./
RUN npm install
RUN npm run build --prod

# Stage 2: Serve with NGINX
FROM nginx:alpine

COPY --from=builder /app/dist/task-app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
