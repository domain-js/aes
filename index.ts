import * as cryptojs from "crypto-js/core";
import * as AES from "crypto-js/aes";

export const main = () => {
  // aes-256-cbc encrypt
  const encrypt = (message: string, key: string) => AES.encrypt(message, key).toString();

  // aes-256-cbc decrypt
  const decrypt = (message: string, key: string) =>
    AES.decrypt(message, key).toString(cryptojs.enc.Utf8);

  return Object.freeze({
    encrypt,
    decrypt,
  });
};
