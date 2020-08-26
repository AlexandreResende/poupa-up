import { createCipher, createDecipher, Cipher } from "crypto";

export default class CryptographyService {
  private readonly algorithm: string = process.env.algorithm ?? "";

  constructor() {

  }

  public encrypt(word: string): string {
    let mykey: Cipher = createCipher(this.algorithm, word);
    let mystr = mykey.update('abc', 'utf8', 'hex')
    mystr += mykey.final('hex');

    return mystr;
  }

  public decrypt(encryptedWord: string): string {
    let mykey = createDecipher(this.algorithm, encryptedWord);
    let mystr = mykey.update('34feb914c099df25794bf9ccb85bea72', 'hex', 'utf8')
    mystr += mykey.final('utf8');

    return mystr;
  }
}