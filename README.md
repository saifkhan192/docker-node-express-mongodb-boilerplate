
# Docker, Node, Express, MongoDB, MYSQL and SwaggerUI Ready-to-use API Project Structure
[![Author](http://img.shields.io/badge/author-@saifkhan192-blue.svg)](https://www.linkedin.com/in/saifullah-khan-02318086/)

A ready-to-use boilerplate for API Development with Docker, Node, Express, MongoDB, MYSQL and SwaggerUI

## Features

-   Light-weight project
-   Example endpoints. for example survey collection
-   Validations included (https://www.npmjs.com/package/fastest-validator)

-   Included Swagger Documenation (http://localhost/api/docs)
-   Test cases included
-   Added support to be deployed to heroku
-   Added make commands to build/run and bash into the containers
-   Vscode launch.json is included to do breakpoint debugging, see the details below 

-   TODO: JWT token authorization
-   TODO: API collection for Postman.
-   TODO: Add social logins for example Google, Facebook etc


## Project  structure
```sh
├── doc
│   └── apidoc.yaml
├── docker
│   ├── bash_history.log
│   ├── docker-compose.yml
│   ├── DockerfileMysql
│   ├── DockerfileNode
│   ├── mongo
│   └── mysql
├── Makefile
├── node_modules
├── package.json
├── package-lock.json
├── Procfile
├── README.md
├── server.js
└── src
    ├── config
    │   └── index.js
    ├── controllers
    │   └── user.js
    ├── env
    │   ├── development.js
    │   ├── production.js
    │   └── test.js
    ├── helpers
    │   └── instagram.js
    ├── middleware
    │   └── auth
    │       └── index.js
    ├── models
    │   └── survey.js
    ├── public
    │   ├── css
    │   │   ├── bootstrap.min.css
    │   │   ├── hero-slider-style.css
    │   │   ├── magnific-popup.css
    │   │   └── templatemo-style.css
    │   ├── Font-Awesome-4.7
    │   │   ├── css
    │   │   │   └── font-awesome.min.css
    │   │   └── fonts
    │   │       ├── FontAwesome.otf
    │   │       ├── fontawesome-webfont.eot
    │   │       ├── fontawesome-webfont.svg
    │   │       ├── fontawesome-webfont.ttf
    │   │       ├── fontawesome-webfont.woff
    │   │       └── fontawesome-webfont.woff2
    │   ├── js
    │   │   ├── bootstrap.min.js
    │   │   ├── hero-slider-main.js
    │   │   ├── jquery-1.11.3.min.js
    │   │   ├── jquery.magnific-popup.min.js
    │   │   └── tether.min.js
    │   └── swaggerui
    │       ├── css
    │       │   └── swagger-ui.css
    │       ├── img
    │       │   ├── favicon-16x16.png
    │       │   └── favicon-32x32.png
    │       └── js
    │           ├── swagger-ui-bundle.js
    │           ├── swagger-ui.js
    │           └── swagger-ui-standalone-preset.js
    ├── routes.js
    ├── server.js
    ├── tests
    │   ├── helper.js
    │   └── test-survey-create.js
    └── views
        ├── doc.pug
        └── index.pug


```

## Getting started

```make
git clone https://github.com/saifkhan192/docker-node-express-mongodb-boilerplate.git
cd docker-node-express-mongodb-boilerplate
make build && make run_app
```


## Deploy on Heroku

1. Create Heroku account for free (https://signup.heroku.com/
2. On the dashboard (https://dashboard.heroku.com/apps), select New -> Create new app:
3. Goto "Settings" tab, then click "Reveal Config Vars" and add below env vars.
4. Goto "Deply" tab on app details page and "Connect to GitHub", then select your github repository
5. Now click "Deploy Branch" and after deploy is completed click "Open app" at top right

Demo here:
https://docker-node-express-mongodb.herokuapp.com/


## Debugging
-   In vscode add breakpoint at any line and press F5 to start listening by the debugger
-   Now refresh the page to stop the debugger at the breakpoint

## Tests
### Running  Test Cases

```bash
make run_tests
```

## Usefull Make Commands

```make

```


## Bugs or improvements

Feel free to report any bugs or improvements. Pull requests are always welcome.
