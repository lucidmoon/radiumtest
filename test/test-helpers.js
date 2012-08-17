var chai = require('chai');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

module.exports = {
  expect: chai.expect,
  assert: chai.assert,
  sinon: require('sinon')
}
