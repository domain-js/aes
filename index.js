const cryptojs = require("crypto-js/core");
const AES = require("crypto-js/aes");

module.exports = () => {
  // aes-256-cbc encrypt
  const encrypt = (message, key) => AES.encrypt(message, key).toString();

  // aes-256-cbc decrypt
  const decrypt = (message, key) =>
    AES.decrypt(message, key).toString(cryptojs.enc.Utf8);

  return Object.freeze({
    encrypt,
    decrypt
  });
};
