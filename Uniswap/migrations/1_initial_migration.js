const Migrations = artifacts.require("Migrations");
const UniswapV2Router02 = artifacts.require("UniswapV2Router02")

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(UniswapV2Router02);
};
