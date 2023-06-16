potentially write a script to automate the writing of
vite.config.ts
based on new files and directories added to /website... makes sense if I/we are to reuse this project architecture.

### Workarounds

vite.config should be a Typescript file but there's a type error caused by some case logic. Even though vite.config still compiles as a .ts, it's better just to change the file to .js for now so that the IDE doesn't give visual feedback
