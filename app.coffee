'use strict'

window.Calculator = {}

Calculator.arithmetic = ->
  prettyResultText = 'The answer is: '

  printResult = (answer) ->
    console.log(answer)

  add: (addendOne, addendTwo) ->
    sum = addendOne + addendTwo
    printResult(prettyResultText + sum)