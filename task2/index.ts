interface IQuantityValidator {
  validate(quantity: number): { isValid: boolean; error: string | null };
}

export class QuantityValidator implements IQuantityValidator {
  constructor(threshold: number, packageSize: number) {
    // here some validation logic should be
  }

  public validate(quantity: number): { isValid: boolean; error: string | null } {
    throw new Error('Not implemented');
  }
}