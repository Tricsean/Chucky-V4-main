//based by marx
var JavaScriptObfuscator = require('javascript-obfuscator');

var sourceCode = "var a = 1;";
var obfuscationResult = JavaScriptObfuscator.obfuscate(sourceCode);

console.log(obfuscationResult.getObfuscatedCode());
spinner.js