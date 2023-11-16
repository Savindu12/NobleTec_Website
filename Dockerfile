# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application files to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port that Nginx will use
EXPOSE 80

# Command to run your application
CMD ["npm", "start"]