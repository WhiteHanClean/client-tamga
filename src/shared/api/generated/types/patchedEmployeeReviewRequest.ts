/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */

export interface PatchedEmployeeReviewRequest {
  appointment?: number;
  /** @nullable */
  client?: number | null;
  /**
   * @maxLength 1000
   * @nullable
   */
  comment?: string | null;
  employee?: number;
  /** @pattern ^-?\d{0,1}(?:\.\d{0,2})?$ */
  rate?: string;
}