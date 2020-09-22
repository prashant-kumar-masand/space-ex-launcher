# space-ex-launcher

Space Ex Launcher to list and filter through all launches done under the space ex launcher program.

## Tools used for development

> VScode editor

> Prettier extension for code formating

> js docs for code documentation̦

> jasmine and karma for unit testing

> Heroku for code deployment

## Prerequisites

> npm version 6.13.4 \
>  node version 10.19.0 \
>  angular cli version 9.1.12

## Install

```
npm install

```

## Usage

> For using with SSR

```
npm run build

npm run start

```

> For using with-out SSR

```
ng serve

npm build --prod

```

## Run unit test

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng test --code-coverage`

## Run e2e test

Run `ng run e2e` to execute the end-to-end integration tests via Cypress.io

## Goals Achieved by using Best practices are

- Server side rendering ahead of time while build creation
- Test Driven Development by writing Unit test cases for Components
- Atomic design by breaking down the complete design into small components
  > Application Main Module is Home which consist HomeComponent and Child Components as Header, Footer, Filter-bar, Program-card
- uses HTML Semantic Tags
- Used SCSS for writing style scripts
  > uses mixins, functions, partials etc.,
- Custom Grid system

  > Created custom 12 column grid system using Flex-box, BEM methodology and Media Query with SCSS known as sp-grid which consist of following

  > container, container-fluid\
  > container\_\_row

  > grid break point as\
  > xs - 0 \
  > sm - 576 \
  > md - 700 \
  > lg - 1024 \
  > xl - 1440 \
  > eg :- container\_\_col-md-12

- Added Image Lazy loading which significantly improves the performance of application on both mobile and desktop devices

- Added robots.txt and sitemap.xml for better search engine visibility which helps in crawling the pages on Web

## Light house performance metrics

- find detailed view of the lighthouse as [performance-metrics-desktop.pdf](https://drive.google.com/file/d/1fObAfpZnzTy630JIde8fLNgJKyojkr_6/view?usp=sharing) \
  [performance-metrics-mobile.pdf](https://drive.google.com/file/d/1X_rzfrhmXNqcmUWJglVMr8aisugUNj81/view?usp=sharing)

## Author

**Prashant Kumar Singh**

- [linkedin](https://www.linkedin.com/in/prashant-kumar-masand/)
