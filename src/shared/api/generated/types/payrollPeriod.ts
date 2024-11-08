/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */

export interface PayrollPeriod {
  branch: number;
  readonly created_at: string;
  /**
   * @minimum -2147483648
   * @maximum 2147483647
   */
  employee_count?: number;
  readonly id: number;
  is_paid?: boolean;
  period_end: string;
  period_start: string;
  /** @pattern ^-?\d{0,8}(?:\.\d{0,2})?$ */
  total_salary: string;
}
