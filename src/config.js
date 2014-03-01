"use strict";

exports.defaults = function() {
  return {
    htmlTemplates: {
      extensions: [ "template" ]
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n" +
         "  htmlTemplates:              # config settings for the HTML template compiler module\n" +
         "    extensions: [\"template\"]  # default extensions for HTML templates\n";
};

exports.validate = function( config, validators ) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "htmlTemplates config", config.htmlTemplates ) ) {
    if ( validators.isArrayOfStringsMustExist( errors, "htmlTemplates.extensions", config.htmlTemplates.extensions ) ) {
      if (config.htmlTemplates.extensions.length === 0) {
        errors.push( "htmlTemplates.extensions cannot be an empty array");
      }
    }
  }

  return errors;
};
