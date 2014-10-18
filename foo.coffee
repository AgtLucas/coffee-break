'use strict'

app = do ->

  app = {}

  app.init = ->
    this.scream()

  app.scream = ->
    console.log 'Yo!'