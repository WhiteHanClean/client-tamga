/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */

export interface ServiceCreateRequest {
  category: number;
  /** @pattern ^-?\d{0,5}(?:\.\d{0,2})?$ */
  cost: string;
  duration?: string;
  is_active?: boolean;
  /**
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  photo: Blob;
}
