# audit devDependencies vs dependencies

- perhaps .gitignore some source files for the distribution branch
- (?) after vite does the rollup, perhaps we don't need the src files
- although that' only taking up disk space on our host which shouldn't matter, right?

# Vite stuff

The website vite.config.js is causing landing.js to be bundled as main.js, i believe because it is the entrypoint.
i think a dev script will have to rename it landing.js - although this shouldn't probably be addressed until
another page is made and the rollup options are experimented with

Design:
Apple iOS homescreen/Chrome manifest Favicons (for when webpage is saved as an app)
