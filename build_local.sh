#!/bin/bash
set -e  # stop si une commande échoue

echo "=== Génération de cv.json ==="
cd backend
npm install
node generate_json.js
cd ..

echo "=== Copie du JSON dans frontend/public ==="
cp backend/cv.json frontend/public/cv.json

echo "=== Build du frontend Vue.js ==="
cd frontend
npm install
npm run build
cd ..

echo "=== Build terminé ==="