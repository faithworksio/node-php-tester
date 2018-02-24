# node-php-tester

Super simple setup to execute and serve php snippets to your browser using node, express and php.

![php gif]()

### Install php

http://php.net/manual/en/install.php

### Clone & Install
- Clone this repo
- Npm install in repo

### Setup Env
Run the following command to display where your php is running from
```
  $  which php
```

Set that php executable location to the _this.phpPath_ within ./execphp.js, such as **'usr/bin/php'**


### Create Files
```
  php/
    file1.php
    file2.php
  ...
```

### Usage

Within repo, run the following command, open a browser to localhost:3000/, navigate to file of choice to see php output

```node
  $ npm start
```

### Support

Usage for quickly testing snippets to use on various php platforms.
Running on Mac OS 10.13.13 | Node v8.9.1 | Npm v 5.5.1

-- Credit --

https://medium.com/@MartinMouritzen/how-to-run-php-in-node-js-and-why-you-probably-shouldnt-do-that-fb12abe955b0
