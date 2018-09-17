# FundaeWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Capacitor For Project
1. Adding Capacitor to an existing web app.
2. Capacitor was designed to drop-in to any existing modern JS web app.
3. To add Capacitor to your web app, run the following commands:

`$ cd my-app`

`$ npm install — save @capacitor/core @capacitor/cli`

Then, init Capacitor with your app information. This will also install the default native platforms.

`$ npx cap init`

This command will prompt you to enter the name of your app, the app id (used primarily as the package for android), and the directory of your app.
Capacitor is now installed in your project

`$ npm run build`  --  *for npm projects*
 
`$ ng build` -- *for Angular 6.0+ projects*

`$ ionic build` -- *for Ionic projects*

##Capacitor : PWA — Progressive Web App
If you are using Angular or React npm build (like ng build), make sure to build Angular app (ng build) and publish to **dist/<project_name>** directory with a valid **index.html** file inside it. Otherwise npx cap add electron will give an error.

`$ ng build — prod` -- *first build your angular app*

- make sure in angular.json file, outputPath = “dist/\<project_name\>”
- make sure in capacitor.config.json file, webDir = “dist/\<project_name\>”
- make sure in capacitor.config.json file, bundledWebRuntime = “false”

###Capacitor : PWA
1. `$ npx cap add web`
2. `$ npx cap copy web`
3. `$ npx cap serve`

###Capacitor : iOS
1. `$ npx cap add ios`
2. `$ npx cap copy ios` -- *Once your web code is built, it needs to be copied to each native project*
3. `$ npx cap open ios`

###Capacitor : Android
1. `$ npx cap add android`
2. `$ npx cap copy android` -- *Once your web code is built, it needs to be copied to each native project*
3. `$ npx cap open android`

###Capacitor : Electron
1. `$ npx cap add electron`
2. `$ npx cap copy electron` -- *Once your web code is built, it needs to be copied to each native project*
3. `$ cd electron`
4. `$ npm run electron:start`
