'use strict';

const version = require(`./version`);
const generate = require(`./generate`);

const Cli = {
  [generate.name]: generate,
  [version.name]: version,
};

module.exports = {
  Cli,
};
