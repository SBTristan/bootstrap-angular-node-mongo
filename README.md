# Bootstrap AngularJS, Node.js and MongoDB


## Description

This is a project skeleton to quickly start your project. It's composed of a nodejs backend server used to host a RESTful api using express and mongoose, and a frontend AngularJS application with ui-router. Gulp is used as the build management system.


## Installation

Get the sources:
```bash
git clone https://github.com/kdelemme/bootstrap-angular-node-mongo.git
```

### NodeJS

In order to start the nodejs server, we need express and mongoose dependencies.

In the api directory, install the nodejs dependencies:
```bash
kevin@home:api$ npm install
```

### AngularJS

Install Gulp dependencies:
```bash
kevin@home:$ npm install
```

Use Gulp to build your JavaScript sources:
```bash
kevin@home$ gulp
```

You should see:
```bash
kevin@home:$ gulp
[gulp] Using gulpfile /var/www/angular/template/gulpfile.js
[gulp] Starting 'scripts'...
[gulp] Starting 'styles'...
[gulp] Finished 'styles' after 37 ms
[gulp] Finished 'scripts' after 55 ms
[gulp] Starting 'default'...
[gulp] Finished 'default' after 13 μs
```

## Usage

### Server

Starts the nodejs application:
```bash
node api/app.js
```

You should see:
```bash
kevin@home:/var/www/angular/template$ node api/app.js 
[INFO] Your project API started on port 3000
[DB] Successfully connected to: mongodb://localhost/template
```

### Client

Open your browser on `http://localhost/template/app`

## Stack

* AngularJS v1.2.17
* ui-router v0.2.10
* Bootstrap v3.0.2
* MongoDB 
* Node.js
* mongoose

## Licence
The MIT License (MIT)

Copyright (c) 2014 Kevin Delemme (kdelemme@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
