import { createCipher, createDecipher, Cipher } from "crypto";

export class CryptographyService {
  private readonly algorithm: string = process.env.CRYPTO_ALGORITHM ?? "";
  private readonly password:string = process.env.CRYPTO_PASSWORD ?? "";

  public encrypt(word: string): string {
    let encryptionKey: Cipher = createCipher(this.algorithm, this.password);
    let encryptedstring = encryptionKey.update(word, "utf8", "hex")
    encryptedstring += encryptionKey.final("hex");

    return encryptedstring;
  }

  public decrypt(encryptedWord: string): string {
    let decryptionKey = createDecipher(this.algorithm, this.password);
    let decryptedstring = decryptionKey.update(encryptedWord, "hex", "utf8");
    decryptedstring += decryptionKey.final("utf8");

    return decryptedstring;
  }
}