/*
  data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// Some details about the site
exports.siteName = `The Retail Apocalypse`;

exports.menu = [
  { slug: '/stores', title: 'Stores' },
  { slug: '/add', title: 'Add' },
  { slug: '/tags', title: 'Tags' },
  { slug: '/top', title: 'Top' },
  { slug: '/map', title: 'Map' },
];
