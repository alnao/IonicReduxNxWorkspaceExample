
# IonicReduxWorkspaceExample
Progetto con 
- Angular come framework base
- Ionic come toolkit per l'interfaccia web e lo sviluppo dell'app
- Cordova come container per la creazione dell'app per Andoid & IOs
- Nx Workspace per la gestione di due librerie interne e due progetti separati per web e app
- Redux come libreria per la gestione dello store e dei servizi

## Run apps

To run web 

`$ nx serve exampleweb`

To run app 

`$ nx serve exampleapp --port 4201`

## Create service 

To create service 

`$ ng generate service annotazioni`

## Create redux

To create redux components 

`nx g @nrwl/angular:ngrx annotazioni --module=libs/example-central-lib/src/lib/example-central-lib.module.ts --directory +state/annotazioni --no-interactive`

`nx generate @nrwl/angular:service services/annotazioni --project=example-central-lib --skip-import`

## Create web components

To create web components 

`nx generate @nrwl/angular:module annotazioni --export=true --routing --project=exampleweb`

`nx generate @nrwl/angular:component annotazioni --export=true --routing --project=exampleweb`

To create app components 

`nx generate @nrwl/angular:module annotazioni --export=true --routing --project=exampleapp`

`nx generate @nrwl/angular:component annotazioni --export=true --routing --project=exampleapp`

`nx generate @nrwl/angular:service Auth --export=true --routing --project=exampleapp`


To resolve compile error

`unset NODE_OPTIONS`

`export NODE_OPTIONS=--openssl-legacy-provider`







# README Nx 

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@frontend/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
