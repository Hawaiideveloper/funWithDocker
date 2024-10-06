# Dockerfile
# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install a simple HTTP server to serve static files
RUN npm install -g http-server

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the HTTP server on port 8080
CMD ["http-server", "-p", "8080"]
