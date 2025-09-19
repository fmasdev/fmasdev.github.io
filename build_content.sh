#!/bin/sh
set -e

# 1. Start Strapi in background
echo "🚀 Start Strapi..."
cd cms
npm run strapi start &
STRAPI_PID=$!

# 2. Wait a bit until Strapi is launched properly
echo "⏳ Attente du démarrage de Strapi..."
sleep 15
cd ..

# 3. Run command for get json
cd backend
echo "📦 Export des contenus..."
npm run prod:export

# 4. Stop Strapi
echo "🛑 Arrêt de Strapi..."
kill $STRAPI_PID
wait $STRAPI_PID 2>/dev/null || true

# 5. Copy exported files to the frontend
echo "📂 Copie des fichiers exportés..."
rm -rf frontend/public/content/fr frontend/public/content/en frontend/public/media

mkdir -p frontend/public/content/fr frontend/public/content/en frontend/public/media

cp -r backend/export/fr/* frontend/public/content/fr/
cp -r backend/export/en/* frontend/public/content/en/
cp -r backend/export/media/* frontend/public/media/original/

echo "✅ Export terminé et fichiers copiés."