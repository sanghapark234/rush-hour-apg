# Stage 1: Build the production bundle
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy dependency manifests
COPY diorama/package.json diorama/bun.lock* ./

# Install dependencies inside the container
RUN bun install --frozen-lockfile

# Copy diorama source code
COPY diorama/ ./

# Build production bundle
RUN bun run build

# Stage 2: Serve production bundle
FROM oven/bun:1-slim AS runner

WORKDIR /app

# Copy built assets and server
COPY --from=builder /app/package.json ./
COPY --from=builder /app/serve.js ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Start production server
CMD ["bun", "serve.js", "0.0.0.0", "3000", "dist"]

