// Define String.prototype.toAlternatingCase (or a similar function/method such as 
// to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
// see the initial solution for details) 
// such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
    return this.split('').map(function(name) {
    if (name === name.toUpperCase()) {
      return name.toLowerCase();
    } else if (name === name.toLowerCase()) {
      return name.toUpperCase();
    } else {
      return name;
    }
  }).join('');
}   