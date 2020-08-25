import { createCipher, createDecipher, Cipher } from "crypto";

export default class CryptographyService {
  constructor() {}

  public encrypt(word: string): string {
    let mykey: Cipher = createCipher('aes-128-cbc', word);
    let mystr = mykey.update('abc', 'utf8', 'hex')
    mystr += mykey.final('hex');

    return mystr;
  }

  public decrypt(encryptedWord: string): string {
    let mykey = createDecipher('aes-128-cbc', encryptedWord);
    let mystr = mykey.update('34feb914c099df25794bf9ccb85bea72', 'hex', 'utf8')
    mystr += mykey.final('utf8');

    return mystr;
  }
}