FROM node:20-slim

# Create the app directory and set permissions
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

# Copy package files and install dependencies as root
COPY package*.json ./
RUN npm install

# Change ownership of the node_modules directory to the node user
RUN chown -R node:node /home/node/app/node_modules

# Switch to the node user
USER node

# Copy the remaining application files
COPY --chown=node:node . .

EXPOSE 8000

CMD [ "node", "proxy.mjs" ]
