import { createCipher, createDecipher, Cipher } from "crypto";

export default class CryptographyService {
  private readonly algorithm: string = process.env.CRYPTO_ALGORITHM ?? "";
  private readonly password:string = process.env.CRYPTO_PASSWORD ?? "";

  public encrypt(word: string): string {
    let mykey: Cipher = createCipher(this.algorithm, this.password);
    let mystr = mykey.update(word, "utf8", "hex")
    mystr += mykey.final("hex");

    return mystr;
  }

  public decrypt(encryptedWord: string): string {
    let mykey = createDecipher(this.algorithm, this.password);
    let mystr = mykey.update(encryptedWord, "hex", "utf8");
    mystr += mykey.final("utf8");

    return mystr;
  }
}