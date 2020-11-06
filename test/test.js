const { expect } = require('chai');
const ethers = require('ethers');
const bre = require('@nomiclabs/buidler');

describe('Test', function() {
  let test;

  before('deploy Test contract', async () => {
    const Test = await bre.ethers.getContractFactory('SynthetixBridgeToOptimism');
    test = await Test.deploy();
  });

  
});
