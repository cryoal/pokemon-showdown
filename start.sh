#!/bin/sh
set -e
mkdir -p /data/config /data/logs

if [ ! -f /data/config/config.js ]; then
  cp -a /opt/config-default/. /data/config/
fi

rm -rf /app/config /app/logs
ln -s /data/config /app/config
ln -s /data/logs /app/logs

cd /app
exec node pokemon-showdown "${PORT:-8000}" --skip-build
