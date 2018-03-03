# 1. Angular 5 Complete Guide

Course Link:
https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655594?start=0

<!-- TOC -->

- [1. Angular 5 Complete Guide](#1-angular-5-complete-guide)
    - [1.1. Development Environment](#11-development-environment)
    - [1.2. Create New Angular Project](#12-create-new-angular-project)
    - [1.3. Simple Data Binding](#13-simple-data-binding)
        - [1.3.1. Label](#131-label)
        - [1.3.2. TextBox](#132-textbox)
            - [1.3.2.1. Adding Forms Module](#1321-adding-forms-module)
    - [1.4. Adding Bootstrap](#14-adding-bootstrap)
    - [1.5. Module Loading](#15-module-loading)
        - [1.5.1. The App Module](#151-the-app-module)
        - [1.5.2. The App Component](#152-the-app-component)
        - [1.5.3. Data Model](#153-data-model)

<!-- /TOC -->

## 1.1. Development Environment

- Install Node
- Install Angular CLI

    ```bash
    sudo npm install -g @angluar/cli
    ```


## 1.2. Create New Angular Project

Create a new project using the CLI:

```bash
ng new my-first-app
```

Run the project
```bash
ng serve
```
It will run the server at http://localhost:4200


## 1.3. Simple Data Binding

In `app.component.ts`, add a `name` property to the model.

```ts
export class AppComponent {
  title = 'MyFirstPage';
  name = 'Angular';
}
```

### 1.3.1. Label
In `app.component.html', use the name property in the label databinding as below:

```html
<b>{{name}}</b>
```

### 1.3.2. TextBox
The textbox functionality requires `FormsModule`.

#### 1.3.2.1. Adding Forms Module

In `app.module.ts` add the TypeScript import of `FormsModule` as shown below:

```ts
import {FormsModule} from '@angular/forms';
```

Include this module in the `@NgModule` declaration so that it will be used at runtime.

```ts
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
We can add the databinding for textbox below in `app.component.html`:

```html
<input type="text" [(ngModel)]="name">
```

## 1.4. Adding Bootstrap
- Add Bootstrap 3 to the project:
```bash
npm install --save bootstrap@3
```
- In the `node_modules` folder, find `bootstrap` and within that look for `bootstrap.min.cs` under dist folder, right-click and get relative path (in WebStorm).

- In `.angular-cli.json`, under `styles` section, add this path, but adjust it so that it is relative to `index.html` as opposed to `.angular-cli.json`

```json
      "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
      ],
```

- If `ng serve` is already running, stop it with `Control+C` (mac) and run it again.

Go to http://localhost:4200, inspect page, it will have bootstrap `style` tag  in `head` section.

## 1.5. Module Loading

-  The `ng serve` command adds additional `script`tags to the end of `index.html` before sending it to the browser.
- It uses the `src/main.ts` as the root script.

### 1.5.1. The App Module
The current default of `src/main.ts` loads `/app/app.module.ts` with the following code:

- It imports `AppModule` from the `ts` file:
```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

```
- Then it starts the `AppModule` using this code:
```ts
    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
```

- The `AppModule` declares an `@NgModule` that is loaded above.


### 1.5.2. The App Component

The `AppModule` declaration loads the `AppComponent` from `app.component.ts`

```ts
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
...
@NgModule
{
    declarations: [AppComponent],
    ...
}
export class AppModule { }
```

The `AppComponent` is annotated as a `@Component` with `selector`, `templateUrl` and `styleUrls`. 

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{...}
```


The `selector` **app-root** is the **HTML Tag Name** used to embed the component in `src/index.html`

```html
<body>
  <app-root>Loading...</app-root>
</body>
```

### 1.5.3. Data Model

The `AppComponent` also declares the data model as below.

```ts
export class AppComponent {
  title = 'MyFirstPage';
  name = 'Angular';
}
```




