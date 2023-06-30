# VisualDegree
___
## Installation and Building Instructions:

From the root directory, the following options are available:

1. `npm start` installs, builds, and runs the application. They can also be called separately:
    - `npm run build:website` builds the website
    - `npm run build:webapp` builds the webapp
    - `node app` starts the express server
2. `npm run setup:db` installs, builds, and start the database server
3. `npm test` starts the local vite server, which handles auto-reloading
4. `npm run format` formats the code for all `.js` and `.jsx` files

## Routes:

- / - Index, shows landingPage
- /app - React-flow app
- /api - Api stub

## Directory Map:

/public/\* -Viteified source files  
/scripts - Various scripts we might need to run for development  
/webapp - Codebase for the one-page webapp  
/website - Codebase for the multi-page website: landingPage... we'll add a signUp page, etc.

___
## Contributing:

Fork the repository, make your changes, and open a pull request.

### Important Notes:

- Be sure to use descriptive language in your commits
- Before opening a pull request run `npm run format` to enforce code style standards.
