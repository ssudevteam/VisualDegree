# Installation Instructions

All dependencies are in root directory, just run npm install

# Testing on LocalHost:

As of now, I don't know how to do hot reloading. I think it can be done with vite. I have nodemon installed in the packages but no package.json scripts invoking it. Should take like 10 mins of research to figure this part out.

# Building:

'npm start' calls the whole build process or they can be called separately:

1. npm run build:website
2. npm run build:webapp
3. 'node app' starts the express server

# Routes:

- / - Index, shows landingPage
- /app - React-flow app
- /api - Api stub

# Directory Map:

/public/\* -Viteified source files  
/scripts - Various scripts we might need to run for development  
/webapp - Codebase for the 1 page webapp  
/website - Codebase for the multi page website: landingPage... we'll add a signUp page, etc.  
