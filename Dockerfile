# Dockerfile
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy app files
COPY server.js ./
COPY package*.json ./

COPY . .

RUN npm install

# Expose a port range (e.g., 3000–3010)
EXPOSE 3003-3013

# Default command: use env var PORT or fallback to 3000
CMD ["sh", "-c", "node server.js"]