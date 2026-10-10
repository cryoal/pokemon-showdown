FROM node:22-slim

RUN apt-get update \
 && apt-get install -y --no-install-recommends git ca-certificates \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app
RUN git clone --depth 1 https://github.com/smogon/pokemon-showdown.git .
RUN npm install
COPY custom-formats.ts /app/config/custom-formats.ts
# Compile once at build time (this is the fix for the esbuild crash)
RUN node build

# Keep a pristine copy of config to seed the volume on first boot
RUN cp -r config /opt/config-default

COPY start.sh /start.sh
CMD ["sh", "/start.sh"]
