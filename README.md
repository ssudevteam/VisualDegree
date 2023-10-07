# VisualDegree

---

## Installation and Building Instructions:

From the root directory, the following options are available:

1. WebApp Dev: `npm start` concurrently runs database and webapp with vite hotreloading on localhost:4000/app
2. Production Test: `npm run render` bundles/builds webapp + website and runs on localhost:3000
3. Database Dev: `npm run setup:db` installs and start the database server in nodemon dev mode
4. Code Formatting: `npm run format` formats the code for all `.js` and `.jsx` files

## Routes:

express server

- localhost:3000/ - Index, shows landingPage
- localhost:3000/blog - Blog
- localhost:3000/login - Firebase auth page

vite server (routes also supported by express server once built)

- localhost:4000 /app - React-flow app
- localhost:4000 /schedules - User Schedules stub
- localhost:4000 /welcome - onboarding
- localhost:4000 /api - apiView

database server

- localhost:8000/graphql - api endpoint and sandbox
- localhost:8000/voyager - quick GQL typedef viewer

## Directory Map:

/public/\* - Vite-built source files  
/server - elements of the root main.js express server
/webapp - Codebase for the one-page webapp  
/website - Codebase for the multi-page website: landingPage/login

---

## Contributing:

Fork the repository, make your changes, and open a pull request.

### Important Notes:

- Be sure to use descriptive language in your commits
- Before opening a pull request run `npm run format` to enforce code style standards.
