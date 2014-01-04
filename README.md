mimosa-html-templates
===========

## Overview

This is a HTML template compiler for the Mimosa build tool. This module is for use with Mimosa `2.0+`.  This replicates the functionality of the HTML template compiler that was built into Mimosa before `2.0`.

For more information regarding Mimosa, see http://mimosa.io

## Usage

Add `'html-templates'` to your list of modules.  That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.

## Functionality

This module will compile plain HTML micro-templates into reusable javascript functions during `mimosa watch` and `mimosa build`.

This module utilizes all of the built-in template behavior that comes with Mimosa's basic template compiler.  See the [mimosa website](http://mimosa.io/compilers.html#mt) for more information about how templates are treated or check out the various [`template` configuration options](http://mimosa.io/configuration.html#templates).

## Default Config

```coffeescript
htmlTemplates:
  extensions: ["template"]
```

* `extensions`: an array of strings, the extensions of your HTML templates.