"use strict";

var _ = require( "underscore" )
  , config = require( "./config" )
  , getExtensions = function ( mimosaConfig ) {
    return mimosaConfig.htmlTemplates.extensions;
  }
  , jacked = {
    evaluate    : /<%%%%%%%%([\s\S]+?)%%%%%%%>/g,
    interpolate : /<%%%%%%%%=([\s\S]+?)%%%%%%%>/g
  }
  , proper = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g
  };

var prefix = function ( mimosaConfig ) {
  if ( mimosaConfig.template.wrapType === "amd" ) {
    return "define(function () { var templates = {};\n";
  }

  return "var templates = {};\n";
};

var suffix = function ( mimosaConfig ) {
  if ( mimosaConfig.template.wrapType === "amd" ) {
    return "return templates; });";
  } else {
    if ( mimosaConfig.template.wrapType === "common" ) {
      return "\nmodule.exports = templates;";
    }
  }

  return "";
};

var compile = function ( mimosaConfig, file, cb ) {
  var error, output;

  // we don't want underscore to actually work, just to wrap stuff
  _.templateSettings = jacked;

  try {
    var compiledOutput = _.template( file.inputFileText );
    output = compiledOutput.source + "()";
  } catch ( err ) {
    error = err;
  }

  // set it back
  _.templateSettings = proper;

  cb( error, output );
};

module.exports = {
  name: "html",
  compilerType: "template",
  compile: compile,
  suffix: suffix,
  prefix: prefix,
  extensions: getExtensions,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};
