#!/bin/bash
set -e  # stop si une commande échoue

echo "=== Start strapi"
cd cms
npm run start
cd ..

echo "=== Génération de cv.json ==="
cd backend
npm install
npm run deploy:prod
cd ..

echo "=== Stop strapi"
cd cms
# todo stop strapi

echo "=== Copie des langes cv dans frontend/public ==="
cp -r backend/exports/* frontend/public/data/

echo "=== Build du frontend Vue.js ==="
cd frontend
npm install
npm run build
cd ..

echo "=== Build terminé ==="