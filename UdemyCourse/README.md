# 1. Angular 5 Complete Guide

**Course**:
[Angular 5 (formerly Angular 2) - The Complete Guide](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655594?start=0) By Maximilian Schwarzmuller



<!-- TOC -->

- [1. Angular 5 Complete Guide](#1-angular-5-complete-guide)
    - [1.1. Development Environment](#11-development-environment)
    - [1.2. Create New Angular Project](#12-create-new-angular-project)
    - [1.3. Debugging and Inspection](#13-debugging-and-inspection)
        - [1.3.1. Debugging With WebStorm](#131-debugging-with-webstorm)
            - [1.3.1.1. References](#1311-references)
        - [1.3.2. Debugging With Chrome Developer Tools](#132-debugging-with-chrome-developer-tools)
        - [1.3.3. Component Inspection with Augury](#133-component-inspection-with-augury)
    - [1.4. Simple Data Binding](#14-simple-data-binding)
        - [1.4.1. Label](#141-label)
        - [1.4.2. TextBox](#142-textbox)
            - [1.4.2.1. Adding Forms Module](#1421-adding-forms-module)
    - [1.5. Adding Bootstrap](#15-adding-bootstrap)
    - [1.6. Module Loading](#16-module-loading)
        - [1.6.1. The App Module](#161-the-app-module)
        - [1.6.2. The App Component](#162-the-app-component)
        - [1.6.3. Data Model](#163-data-model)
    - [1.7. Adding Custom Component](#17-adding-custom-component)
        - [1.7.1. Creating Component](#171-creating-component)
        - [1.7.2. Adding to Module](#172-adding-to-module)
        - [1.7.3. Using the Component](#173-using-the-component)
        - [1.7.4. Using the CLI](#174-using-the-cli)
            - [1.7.4.1. Nested Components](#1741-nested-components)
    - [1.8. Inline Template](#18-inline-template)
    - [1.9. Styles](#19-styles)
    - [1.10. Data Binding](#110-data-binding)
        - [1.10.1. String Interpolation](#1101-string-interpolation)
        - [1.10.2. Property Binding](#1102-property-binding)
            - [1.10.2.1. Binding Component Properties](#11021-binding-component-properties)
        - [1.10.3. Event Binding](#1103-event-binding)
            - [1.10.3.1. Buttons](#11031-buttons)
            - [1.10.3.2. Text Boxes](#11032-text-boxes)
            - [1.10.3.3. Binding Component Events](#11033-binding-component-events)
        - [1.10.4. Two-Way Binding](#1104-two-way-binding)
        - [1.10.5. Accessing View Elements](#1105-accessing-view-elements)
        - [1.10.6. HTML Substitution](#1106-html-substitution)
            - [1.10.6.1. Accessing HTMLElements from ngContent](#11061-accessing-htmlelements-from-ngcontent)
    - [1.11. Built-in Directives](#111-built-in-directives)
        - [1.11.1. The ng-if Directive](#1111-the-ng-if-directive)
            - [1.11.1.1. Else Conditions](#11111-else-conditions)
        - [1.11.2. ngStyles Directive](#1112-ngstyles-directive)
        - [1.11.3. ngClass Directive](#1113-ngclass-directive)
        - [1.11.4. ngFor Directive](#1114-ngfor-directive)
            - [1.11.4.1. Index Data](#11141-index-data)
        - [1.11.5. Model Classes](#1115-model-classes)

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


## 1.3. Debugging and Inspection

### 1.3.1. Debugging With WebStorm

- In Chrome, Install **JetBrains IDE Support** Plugin (https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji?hl=en)

- Start `ng serve`

- In WebStorm, Add Debug  Configuration as below: 
    - Edit Configurations -> + -> JavaScript Debug
    - Choose any name
    - URL: http://localhost:4200

![Debugging]

[Debugging]: images/Debugging.png
    
- Put a breakpoint in code
- Click the "Debug" button 

#### 1.3.1.1. References
- https://blog.jetbrains.com/webstorm/2017/01/debugging-angular-apps/
-  https://www.youtube.com/watch?v=CdXoeVRN1JU

### 1.3.2. Debugging With Chrome Developer Tools

- Serve the app with `ng serve`
- In chrome, go to http://localhost:4200
- Right-Click, Inspect
- Go to Sources tab and find the typescript files under the `webpack://` folder as shown below:

![ChromeDevDebugging1]

[ChromeDevDebugging1]: images/ChromeDevDebugging1.png

- Set the breakpoints and reload the page.

### 1.3.3. Component Inspection with Augury

Angular Augury is a chrome extension which allows us to inspect our app's components, routes and modules at runtime.

- Search for `Angular Augury` (currently at https://augury.angular.io/)
- Install chrome extension
- Run `ng serve` and go to http://localhost:4200
- Right-click, Inspect, go to Augury tab in Chrome Dev Tools. It will show the app structure as below (example)

![Augury] 

[Augury]:images/Augury.png

## 1.4. Simple Data Binding

In `app.component.ts`, add a `name` property to the model.

```ts
export class AppComponent {
  title = 'MyFirstPage';
  name = 'Angular';
}
```

### 1.4.1. Label
In `app.component.html', use the name property in the label databinding as below:

```html
<b>{{name}}</b>
```

### 1.4.2. TextBox
The textbox functionality requires `FormsModule`.

#### 1.4.2.1. Adding Forms Module

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

## 1.5. Adding Bootstrap
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

## 1.6. Module Loading

-  The `ng serve` command adds additional `script`tags to the end of `index.html` before sending it to the browser.
- It uses the `src/main.ts` as the root script.

### 1.6.1. The App Module
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


### 1.6.2. The App Component

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

### 1.6.3. Data Model

The `AppComponent` also declares the data model as below.

```ts
export class AppComponent {
  title = 'MyFirstPage';
  name = 'Angular';
}
```

## 1.7. Adding Custom Component

### 1.7.1. Creating Component
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

### 1.7.2. Adding to Module
- In the `app.module.ts` add `ServerComponent` to `declarations`

```ts
import {ServerComponent} from './server/server.component';

@NgModule({
  declarations: [..., ServerComponent],
  ...
})
export class AppModule { }
```

### 1.7.3. Using the Component
- In the `app.component.html` we can use the `selector` defined earlier as an HTML tag.

```html
    <div class="col-sm-3">
        <app-server></app-server>
    </div>
```

### 1.7.4. Using the CLI

We can script the above steps using the `angular-cli` command on the project root folder below:

```bash
ng generate component server
```

Alternatively

```bash
ng g c server
```

where `server` is the component name we want to create. 

#### 1.7.4.1. Nested Components

If we wanted to create a subcomponent of server (example: serverdetail), we can use this syntax:

```bash
ng g c server/server-detail
```

## 1.8. Inline Template

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

## 1.9. Styles

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

## 1.10. Data Binding

Data can be bound to markup using **string interpolation**, **property binding**, **event binding** and **two-way binding**.

### 1.10.1. String Interpolation

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

### 1.10.2. Property Binding

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

#### 1.10.2.1. Binding Component Properties

In `cmp-databinding` project, `server-element.component.ts` we add a property which can be bound from   `app.component.ts` as below:

```ts
export class ServerElementComponent implements OnInit {

  @Input()
  element: ServerElement;
 ...
}
```

NOTE: the `@Input()` decorator allows this property to be bound from another component.

In the `app.component.html` we use this component along with the `element` property as shown below:

```html
<app-server-element  [element]="serverEl" ></app-server-element>
```



### 1.10.3. Event Binding

#### 1.10.3.1. Buttons
In `add-server.component.html` we add an `div` tag that triggers a typescript method upon the `click` event, as shown below:

```html
<div id="content" (click)="onCreating()">...</div>
```
This event is handled in the typescript code as shown below:

```ts
    onCreating() {
        this.creating = !this.creating;
    }
```

#### 1.10.3.2. Text Boxes
For capturing the user-entered data from an `input` control, we can use the `(input)` event, along with `$event` parameter in the html .

```html
    <input type="text" class="form-control"
            placeholder="Name" [class]="showInput()" (input)="onUpdateServerName($event)"/>
```

This event can then be processed on the typescript code as shown below:

```ts
  onUpdateServerName(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.newServerName = target.value;
  }
```

NOTE: we can deduce the types by debugging with `console.log` and looking at the browser inspect window.


#### 1.10.3.3. Binding Component Events

We can declare custom events on a component (see `cmp-databinding` project, `cockpit.component.ts`) as below:

```ts
export class CockpitComponent implements OnInit {

@Output()
  serverElementCreated = new EventEmitter<ServerElement>();
...

}

```

NOTE: the `@Output` decorator allows the event emitter to be accessible from outside. The property needs to be of type `EventEmitter` with generic argument of the type of event data we want to send. 

We can fire the events by calling the `emit` method as below:

```ts
export class CockpitComponent implements OnInit {
  ...
  onAddServer() {
    this.serverElementCreated.emit(
      new ServerElement(this.newServerName, ServerType.Server, this.newServerContent));
  }
}
```

We can add the handler for this event in the consumer html as below (see `app.component.html` in `cmp-databinding` project):

```html
<app-cockpit (serverElementCreated)="onServerElementAdded($event)"></app-cockpit>
```

We handle this event in the consumer as below:

```ts
export class AppComponent {
    ...
  onServerElementAdded(server: ServerElement) {
    this.serverElements.push(server);
  }
}


```

### 1.10.4. Two-Way Binding
An alternative, streamlined approach to capture user input is two-way binding. It requires `FormsModule` in the `app.module.ts` as shown below:

```ts
import {FormsModule} from '@angular/forms';

@NgModule({
  ...
  imports: [BrowserModule, FormsModule],
  ...
})
export class AppModule { }
```

Once we have this, we can use `[(ngModel)]` two-way binding attribute on the markup.

```html
<input type="text" class="form-control"
         placeholder="Name" [class]="showInput()" [(ngModel)] = "newServerName"/>
```

Where `newServerName` is a property on the component class.

```ts
export class AddServerComponent implements OnInit {
   newServerName = '';
    ...
}
```



### 1.10.5. Accessing View Elements

We can access HTML elements by adding a `#name` to the tag and use the reference in event binding.

For example, in `cmp-databinding` project, `cockpit-component.html`, we add a *local reference* to the server name input element as below:

```html
<input type="text" class="form-control" #serverNameInput>
```

We then use this reference in the event binding as shown below:

```html
<button
      class="btn btn-primary"
      (click)="onAddServer(serverNameInput.value)">Add Server</button>
```

In the same file, we define another local reference for `serverContent` as shown below:

```html
<input type="text" class="form-control" #serverContentInput>
```

We access this view element in the typescript code by using the `ViewChild` decorator, as shown below:

```ts

  @ViewChild('serverContentInput')
  serverContentInput: ElementRef;


  onAddServer(name: string ) {
    ...
      this.serverContentInput.nativeElement.value));
  }

```

### 1.10.6. HTML Substitution

We can allow custom HTML to be sent from the component consumers using the `ng-content` directive.

In the `cmp-databinding` project, `server-element.component.html` we added a placeholder for the consumer content as below:

```html
  <div class="panel-body">
    <p>
      ...
      <ng-content></ng-content>
    </p>
  </div>
```

We send custom HTML from the `app.component.html` to this component as below:

```html
<app-server-element *ngFor="let serverEl of serverElements" [element]="serverEl" >
        <p>My Content</p>
      </app-server-element>
```
Notice the "inner HTML" we sent.

This will be rendred for each app-server-element that is a child of current component, as shown below:

![NgContent]

[NgContent]:images/NgContent.png

#### 1.10.6.1. Accessing HTMLElements from ngContent

We can process custom content elements by having references (that can be provided as part of the contract).

We use the `@ContentChild` attribute to access "known" elements of the custom content:

```ts
export class ServerElementComponent ...{
   ...
  @ContentChild('customParagraph')
  customParagraph: ElementRef;

```


In the consumer HTML(`app.component.html`), we can instantiate the`#reference` as below:

```html
<app-server-element *ngFor="let serverEl of serverElements" [element]="serverEl" >
        <p #customParagraph>My Content</p>
      </app-server-element>
```

We can inspect this element by implementing the `AfterContentInit` interface as below. (Alternatively in a regular event handler):

```ts
export class ServerElementComponent implements  AfterContentInit {

@ContentChild('customParagraph')
  customParagraph: ElementRef;
...
  ngAfterContentInit(): void {
    console.log('Do something with customParagraph');
    console.log(this.customParagraph);
  }
}

```



## 1.11. Built-in Directives
### 1.11.1. The ng-if Directive

We can include or omit a html section in the DOM markup (as opposed to CSS show/collapse) using the ng-if directive. (useful for authorizations)

In the `add-servers.component.html` we show a success box when server is created, using this markup.

```html
<app-success-alert *ngIf="serverCreated" ></app-success-alert>
```
Where `serverCreated` is a property on the typescript class.

#### 1.11.1.1. Else Conditions
We can have an else condition by declaring an ng-template region on the markup and it will replace the markup on this tag with that.

```html
   <div id="content" (click)="onCreating()">{{getStatus()}}</div>
  <ng-template #addServer>
  <div id="add" [class]="showInput()">
    ...
  </div>
  </ng-template>
```

We can then use this region in the else clause as below:

```html
<app-success-alert *ngIf="serverCreated; else addServer" ></app-success-alert>
```

Here's how if condition is shown:

![NgIf]

[NgIf]: Images/NgIf.png

Here's how else condition is shown. 

![NgElse]

[NgElse]: Images/NgElse.png

**NOTE**: The `ng-template` markup is defined below the `div id="content"` section, but it is rendered above it. This is because it "replaces" the section for `app-success-alert`.

### 1.11.2. ngStyles Directive

This allows style of an element to be dynamically generated by the typescript code.

In `server.component.html` we add a dynamic background color to the main `div` element as below:

```html
<div class="col-sm-3" id="server" [ngStyle]="{backgroundColor: getColor()}">
    ...
</div>
```

- `ngStyle` attribute is *property-bound* to a javascript object which contains properties from a typical stylesheet. 

### 1.11.3. ngClass Directive

This allows css classes to be added or removed dynamically based on data.

- We can define a css class `online` in the stylesheet  `server.component.css` as below:

```css
.online{
  color: white;
}
```

- This can be added to the main div element based on `status` property as shown below:

```html
    <div class="col-sm-3" id="server" 
        [ngClass]="{online: status === 'online'}">...
    </div>
```

- The ngClass is property bound to a javascript object where property names are **css classes** and values are **Func< boolean >** -> the lambda expression that returns a boolean.

### 1.11.4. ngFor Directive

This allows html element to be replicated specified number of times.

-  In `servers.component.ts` we define a `servers` array property to have two elements.

```ts
export class ServersComponent implements OnInit {
  servers = ['server1',  'server2'];
...
}
```
- This array can be modified in the `addServer` method as below:

```ts
export class ServersComponent implements OnInit {
    ...
  addServer() {
    this.servers.push('newServer');
  }
}
```

- We add a button to `servers.component.html` that triggers the `addServer` method

```html
<input type="button" class="btn btn-primary" value="add" (click)="addServer()"/>
```

- Now we replicate the `app-server` elements in the markup by binding them to `servers` property as shown below:

```html
<app-server *ngFor="let x of servers"></app-server>
```

NOTE: We need to prefix the directive with a * so that it will modify the DOM.

#### 1.11.4.1. Index Data

We can get the current index of `ngFor` using this syntax:

```html
<div *ngFor="let x of servers; let y = index">

    
</div>
```
We can then use this variable in the inline template.

```html
  <div *ngFor="let log of secretAccessLogs; let i = index">
    <div [ngStyle]="{backgroundColor: getColor(i)}"
      [ngClass]="{light: i > 6}">
      {{i}}
    </div>
  </div>

```

### 1.11.5. Model Classes

A model class represents data in typescript. This is a plain class with public properties and a constructor, as shown below:

```ts
export class Recipe {
  public  name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
```

Alternatively we can declare it as below:

```ts
export class Recipe {
  
  constructor(public name: string, public description: string, public imagePath: string) { }
}
```

