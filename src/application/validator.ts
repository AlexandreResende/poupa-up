import { validate } from "validate-typescript";

interface ValidatorReturn {
  isValid: boolean;
  error?: string[]
}

export class Validator {
  public static validate(schema: object, input: object): ValidatorReturn {
    try {
      const result = validate(schema, input);

      return {
        isValid: true
      };
    } catch (err) {
      const errorResult: string[] = [];

      err.child_errors.forEach((error: { property: string, child_error: { details: string } }) => {
        const fieldName: string = error.property;
        const errorMessage: string = error.child_error.details;

        const validationErrorMessage = `${fieldName.substr(1)} ${errorMessage}`;

        errorResult.push(validationErrorMessage);
      });
      return {
        isValid: false,
        error: errorResult
      };
    }
  }
}