![lumiDrop logo](./src/assets/images/lumidrop_logo.png)
# lumiDrop &middot; [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
> Another admin dashboard :)

Nothing fancy at the moment but this will be an awesome admin interface used for... something.

## Installing / Getting started

You need the back-end part of lumidrop to be able to run this as intended. You can find lumidrop_backend [here](https://github.com/Samuelsson/lumidrop_backend).
Config and run lumidrop_backend before this, the front-end.

To run lumidrop just navigate to project root and type these commands:

```shell
npm install
ng serve
```

If you don't have Angular-CLI installed globally you can runt this instead of `ng serve`

```shell
npm run start
```

This will start the application in dev mode and you can browse to localhost:4200 in your browser.

## Developing

### Built With
Angular 6 with Angular-CLI

### Prerequisites
Everything you need for developing is included in package.json but you need lumidrop_backend to be able to run this application.

### Setting up Dev

Just clone the project, start the webpack server and you are good to go :) If you already have Angular-CLI installed locally you can skip the first step.
This project still uses lumidrop_backend

```shell
npm install -g @angular/cli
git clone https://github.com/Samuelsson/lumidrop.git
cd lumidrop/
npm install
ng serve
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

## Configuration

All environment configurations are going in the /environment folder. One for dev and one for prod.

## Tests

The tests are not 100% atm.
One command for running unit tests and one for E2E.

```shell
npm run test
npm run e2e
```

## Style guide

A local stylelintrc is not included but should be used. Stylelint is not currently a dev dependency but could/should be installed globally.

## Api Reference

To be written :)

## Database

To be written :)

## Licensing

To be written :)
