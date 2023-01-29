# Use an existing image as the base
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the code
RUN npm run install:frontend
RUN npm run test:frontend:unit
RUN npm run build:frontend
RUN npm run install:functions
RUN npm run test:functions
RUN npm run build:functions

# Deploy to Firebase
RUN firebase deploy