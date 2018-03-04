# 1. Angular 5 Complete Guide

**Course**:
[Angular 5 (formerly Angular 2) - The Complete Guide](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655594?start=0) By Maximilian Schwarzmuller



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
    - [1.6. Adding Custom Component](#16-adding-custom-component)
        - [1.6.1. Creating Component](#161-creating-component)
        - [1.6.2. Adding to Module](#162-adding-to-module)
        - [1.6.3. Using the Component](#163-using-the-component)
        - [1.6.4. Using the CLI](#164-using-the-cli)
    - [1.7. Inline Template](#17-inline-template)
    - [1.8. Styles](#18-styles)
    - [Data Binding](#data-binding)
        - [String Interpolation](#string-interpolation)
        - [Property Binding](#property-binding)

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

The `AppModule` declaration loads the `AppComponent` from `app.component.ts` and marks it as `bootstrap` (starter).

```ts
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
...
@NgModule
{
    declarations: [AppComponent],
    ...
    bootstrap: [AppComponent]
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

## 1.6. Adding Custom Component

### 1.6.1. Creating Component
- Add a new folder under `app` with the name of the component we want to add (example: `server`)
- Add a new file `server.component.ts` and declare a `typescript` class as below:

```ts
export class ServerComponent {

}
```

- Annotate (decorate) it with a `@Component` decoration as below.
```ts
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
```
- By convention, selector names start with `"app"`.

### 1.6.2. Adding to Module
- In the `app.module.ts` add `ServerComponent` to `declarations`

```ts
import {ServerComponent} from './server/server.component';

@NgModule({
  declarations: [..., ServerComponent],
  ...
})
export class AppModule { }
```

### 1.6.3. Using the Component
- In the `app.component.html` we can use the `selector` defined earlier as an HTML tag.

```html
    <div class="col-sm-3">
        <app-server></app-server>
    </div>
```

### 1.6.4. Using the CLI

We can script the above steps using the `angular-cli` command on the project root folder below:

```bash
ng generate component server
```

Alternatively

```bash
ng g c server
```

where `server` is the component name we want to create. 

## 1.7. Inline Template

We can setup components with inline template as below. It is useful when HTML is less than 3 lines.
In `servers.component.ts`(NOTE the backtick)

```ts
@Component({
  selector: 'app-servers',
  template: `
    <app-server>
    <app-server>
  `
  styleUrls: ['./servers.component.css']
})
export class ServersComponent
```

## 1.8. Styles

We can setup component-specific styles in the `styleUrls`. We can define **global** styles in the css files and yet they are applied *only* to the component and not to the nested components

- For example, in `servers.component.css`, I defined *div* style as:

```css
div{
  border:1px solid black;
}
``` 

- I embedded `app-server` components in the servers component html:

```html
<h4>Servers</h4>
<div class="row">
<app-server></app-server>
<app-server></app-server>
</div>

```

- `app-server` component also has `div` elements

```html
    <div class="col-sm-3">
    <p>The Server Component</p>
    </div>
```
![NestedStyles]

[NestedStyles]: Images/NestedStyles.png


I would expect the server blocks to have borders in a typical html application, but in angular, they won't. (awesome! we have local styles!)

## Data Binding

Data can be bound to markup using string interpolation, property binding.

### String Interpolation

In `server.component.ts` add two properties and a getter:

```ts
    export class ServerComponent {
    id = 10;
    status = 'online';

        getServerStatus() {
            return 'status:' + this.status;
        }
    }

```

These properties can be interpolated in `server.component.html` as below:

```html
<div class="col-sm-3" id="server">
  <div id="id">{{id}}</div>
  <div>{{getServerStatus()}}</div>
</div>
```

When styled in `server.component.css`, 

```css
#server{
  background-color: cornflowerblue;

  padding: 10px;
  margin:10px;
  width:100px;
}

#id{
  font-weight: bold;
}

```

This will be output as below:  
![StringInterpolation]

[StringInterpolation]: Images/StringInterpolation.png

### Property Binding

- Add a new component called `add-server`and add the following properties in `add-server.component.ts`:

```ts
export class AddServerComponent implements OnInit {

  allow = false;

...
  getAllowed() {
    return this.allow ? 'allowed' : 'notallowed';
  }
...

```

- In the constructor, change allowed to true after 2 seconds:

```ts
export class AddServerComponent implements OnInit {

  ...
  constructor() {
    setTimeout( () => {this.allow = true; } , 2000);
  }


```
- Define Styles for allowed and not allowed as needed
- Bind the `class` attribute of addServer as below in `add-server.component.html`

```html
<div id="addServer" [class]=" 'col-sm-3 ' + getAllowed()">
  ...
</div>
```

- This will rewrite the `class` attribute after 2 seconds to `col-sm-3 allowed`.

