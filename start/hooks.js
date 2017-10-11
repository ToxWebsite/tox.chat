'use strict';
const { hooks } = require('@adonisjs/ignitor');

hooks.after.providersBooted(() => {
  const View = use('View');
  const Antl = use('Antl');

  View.global('antl', function () {
    
  });
});
