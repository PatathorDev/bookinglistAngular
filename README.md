# Liste de réservations en Angular

Front avec un header comprenant un logo et un bouton d'actualisation de la liste ci-dessous.
La liste regroupe les réservations, au clic d'une réservation les détails s'affichent dans la modal en bas de la fenêtre.

![testtechnique](https://github.com/user-attachments/assets/53106dcd-b7a3-4d62-811c-186ffa3c8eb5)

## Commandes entrées pour la création de la structure de l'application 
```bash
ng generate c header
ng generate c booking-card
ng generate c booking-list
ng generate c booking-modal
ng generate s booking
```

# BookinglistAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.
