# fmasdev.github.io

## CMS
### Start Strapi app dev
`````shell
   npm run develop
`````

## Backend
Backend request Strapi for build one json by frontend page.

Commands in backend directory

### Build jsons from dev mode
````shell
   cd backend && npm run dev:export
````

### Build jsons
````shell
    cd backend && npm run export
````

## Copy jsons from backend to frontend
Copy manualy jsons or
````shell
   build_content.sh
````

## Deploy
### Build du frontend
````shell
    cd frontend
    npm run build
    npm run deploy
````
