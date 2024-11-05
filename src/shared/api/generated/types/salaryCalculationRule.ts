/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */

export interface SalaryCalculationRule {
  bonus_payment?: boolean;
  certificate_payment?: boolean;
  discount_promotion?: boolean;
  readonly id: number;
  loyalty?: boolean;
  /** @maxLength 500 */
  name: string;
  /**
   * @minimum 0
   * @maximum 32767
   */
  services_percent: number;
  /**
   * @nullable
   * @pattern ^-?\d{0,7}(?:\.\d{0,2})?$
   */
  value?: string | null;
}