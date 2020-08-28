import { createCipher, createDecipher, Cipher } from "crypto";

export default class CryptographyService {
  private readonly algorithm: string = process.env.CRYPTO_ALGORITHM ?? "";
  private readonly password:string = process.env.CRYPTO_PASSWORD ?? "";

  public encrypt(word: string): string {
    let encryptionKey: Cipher = createCipher(this.algorithm, this.password);
    let encryptedString = encryptionKey.update(word, "utf8", "hex")
    encryptedString += encryptionKey.final("hex");

    return encryptedString;
  }

  public decrypt(encryptedWord: string): string {
    let decryptionKey = createDecipher(this.algorithm, this.password);
    let decryptedString = decryptionKey.update(encryptedWord, "hex", "utf8");
    decryptedString += decryptionKey.final("utf8");

    return decryptedString;
  }
}