/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */

export interface ServiceCost {
  /** @pattern ^-?\d{0,7}(?:\.\d{0,2})?$ */
  cost: string;
  /** @pattern ^-?\d{0,7}(?:\.\d{0,2})?$ */
  cost_with_promotion?: string;
  service: number;
}
