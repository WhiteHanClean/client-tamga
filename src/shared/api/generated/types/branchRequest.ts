/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */

export interface BranchRequest {
  /**
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * @maxLength 500
   * @nullable
   */
  description?: string | null;
  image: Blob;
  /**
   * @nullable
   * @pattern ^-?\d{0,3}(?:\.\d{0,6})?$
   */
  lat?: string | null;
  /**
   * @nullable
   * @pattern ^-?\d{0,3}(?:\.\d{0,6})?$
   */
  long?: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  name: string;
}
