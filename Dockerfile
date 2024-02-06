# Stage 1: Build the SvelteKit application
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the application with nginx
FROM nginx:alpine

# Copy the build directory from the build stage to the nginx serve directory
COPY --from=build /app/build /usr/share/nginx/html

# Start nginx and keep the process running
CMD ["nginx", "-g", "daemon off;"]
