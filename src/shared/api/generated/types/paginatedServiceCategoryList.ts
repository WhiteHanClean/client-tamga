/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */
import type { ServiceCategory } from './serviceCategory';

export interface PaginatedServiceCategoryList {
  count: number;
  /** @nullable */
  next?: string | null;
  /** @nullable */
  previous?: string | null;
  results: ServiceCategory[];
}
