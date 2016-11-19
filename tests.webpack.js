var context = require.context('./tests/ui', true, /-test\.js?$/);
context.keys().forEach(context);
