# CTIA | Resiliency & Robocalls

## Heroku Deploy Instructions

1. Heroku buildpacks required to deploy (in order):
   - `heroku/nodejs`
   - `https://github.com/heroku/heroku-buildpack-static.git`
2. Heroku config variable
   - The same codebase/repo can be deployed for either Resiliency or Robocalls
   - This is governed by setting two config variables in Heroku (`KEY=VALUE`)
     - **Resiliency:**
       <br/>`GATSBY_PAGE=RESILIENCY`
       <br/>`GATSBY_BASE_URL=https://prepared.ctia.org`
     - **Robocalls:**
       <br />`GATSBY_PAGE=ROBOCALLS`
       <br />`GATSBY_BASE_URL=https://fightingrobocalls.ctia.org`

## Development Instructions

Use nvm to install the correct version of Node.js and install the front-end dependencies:

```
nvm use
npm install
```

Run local dev environment:

```
gatsby develop
```
