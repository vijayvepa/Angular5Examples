# Angular 5 Complete Guide

Course Link:
https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655594?start=0

## Development Environment

- Install Node
- Install Angular CLI

    ```bash
    sudo npm install -g @angluar/cli
    ```


## Create New Angular Project

Create a new project using the CLI:

```bash
ng new my-first-app
```

Run the project
```bash
ng serve
```
It will run the server at http://localhost:4200


## Simple Data Binding

In `app.component.ts`, add a `name` property to the model.

```ts
export class AppComponent {
  title = 'MyFirstPage';
  name = 'Angular';
}
```

### Label
In `app.component.html', use the name property in the label databinding as below:

```html
<b>{{name}}</b>
```

### TextBox
The textbox functionality requires `FormsModule`.

#### Adding Forms Module

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

## Adding Bootstrap
Add Bootstrap 3 to the project:
```bash
npm install --save bootstrap@3
```