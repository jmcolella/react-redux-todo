var context = require.context('./app/tests', true, /-test\.js?$/);
context.keys().forEach(context);
