// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  window.Calculator = {};

  Calculator.arithmetic = function() {
    var prettyResultText, printResult;
    prettyResultText = 'The answer is: ';
    printResult = function(answer) {
      return console.log(answer);
    };
    return {
      add: function(addendOne, addendTwo) {
        var sum;
        sum = addendOne + addendTwo;
        return printResult(prettyResultText + sum);
      }
    };
  };

}).call(this);