/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */

export interface CertificateCreateRequest {
  cash_register: number;
  client: number;
  /** @nullable */
  service?: number | null;
  /**
   * @minimum 0
   * @maximum 32767
   */
  visits: number;
}
