const StarNotary = artifacts.require("StarNotary"); // Name of the StarNotary contract file

module.exports = function(deployer) {
  deployer.deploy(StarNotary);
};
// const ConvertLib = artifacts.require("ConvertLib");
// const MetaCoin = artifacts.require("MetaCoin");

// module.exports = function(deployer) {
//   deployer.deploy(ConvertLib);
//   deployer.link(ConvertLib, MetaCoin);
//   deployer.deploy(MetaCoin);
// };
