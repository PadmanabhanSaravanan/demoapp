# Stage 1: Build the Angular app
FROM node:20 AS builder

WORKDIR /app
COPY . ./ 
RUN npm install
RUN npm run build --prod

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Copy the built Angular app to the NGINX server's public folder
COPY --from=builder /app/dist/task-app /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
