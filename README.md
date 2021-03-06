**Gareth Leake's custom boilerplate for React Projects**

Feel free to use this in your own projects. MIT License (see `LICENSE` file for details).

**If you see any issues, please use the Issues tab and submit a New Issue**

This repo contains the following:

- Server file set up to run on `localhost:3000`
- Babel and Webpack configured (including config for ES6 arrow functions)
- Webpack-dev-server + hot-module-reloading
- Jest, enzyme, sinon for testing

*Scripts:*

- `npm run start`: "nodemon server/server.js"
- `npm run build`: "webpack"
- `npm run dev`: "nodemon server/server.js & webpack-dev-server --open --mode development"
- `npm run test`: "jest"
