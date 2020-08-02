import { validate } from "validate-typescript";

interface ValidatorReturn {
  isValid: boolean;
  error?: Error
}

export default class Validator {
  public static validate(schema: object, input: object): ValidatorReturn {
    try {
      validate(schema, input);

      return {
        isValid: true
      };
    } catch (error) {
      return {
        isValid: false,
        error
      };
    }
  }
}