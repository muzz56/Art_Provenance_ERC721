// SPDX-License-Identifier: MIT

var DigitizedArt = artifacts.require("./DigitizedArt.sol");

module.exports = (deployer, network, accounts) => {
  deployer.then(async () => {
    try {
      await deployer.deploy(DigitizedArt, "DigitalArtToken", "DAT");
    } catch (err) {
      console.log(('Failed to Deploy Contracts', err))
    }
  })

}
