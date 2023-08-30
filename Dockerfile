FROM node:16

#Working dir INSIDE THE CONTAINER
WORKDIR /app

# Copy only package.json to /app and install dependencies first
COPY package.json ./
RUN npm install

# Now copy the rest of the source code
COPY . .

# And because the app runs on port 3000
EXPOSE 3000

CMD ["npm", "run", "prod"]