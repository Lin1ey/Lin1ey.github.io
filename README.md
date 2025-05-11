# Overview
Personal portfolio for Brian Nguyen! Made with Vue 3 + TypeScript + Vite

# Commands
- `dev`: start the development server
- `build`: build the project to /dist
- `preview`: start local web server that serves the latest build from /dist
- `build-push`: commits and pushes the dist folder
- `git-pages-deploy`: update the gh-pages branch where the git pages lives
- `build-deploy`: builds, pushes, and deploys the dist folder. `build` & `build-push` & `git-pages-deploy`


 # Updating github pages
 Note: you can skip step 2-4 with `npm run build-deploy`
 
 1. Make changes/updates
 2. build with `npm run build`
 3. push dist along with changes
 4. run `git subtree push --prefix dist origin gh-pages` or `npm run git-pages-deploy`


