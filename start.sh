#!/bin/sh
set -e
mkdir -p /data/config /data/logs

# Seed config on first boot only
if [ ! -f /data/config/config.js ]; then
  cp -r /opt/config-default/. /data/config/
fi

# Point the server's config and logs at the persistent volume
rm -rf /app/config /app/logs
ln -s /data/config /app/config
ln -s /data/logs /app/logs

cd /app
exec node pokemon-showdown "${PORT:-8000}" --skip-build
