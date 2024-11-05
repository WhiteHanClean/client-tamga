/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */

export interface ClientInfoRequest {
  /** @nullable */
  comment?: string | null;
  /**
   * @maxLength 254
   * @nullable
   */
  email?: string | null;
  /**
   * @minLength 1
   * @maxLength 50
   */
  name: string;
  /**
   * @maxLength 12
   * @nullable
   */
  phone?: string | null;
}
