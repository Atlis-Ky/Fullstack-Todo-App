# Use an official node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json .

# Install the dependencies
RUN npm install

# Copy prisma schema first (before copying everything else)
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5003

# Define the command to run the app
CMD ["node", "./src/server.js"]