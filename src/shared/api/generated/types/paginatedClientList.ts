/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */
import type { Client } from './client';

export interface PaginatedClientList {
  count: number;
  /** @nullable */
  next?: string | null;
  /** @nullable */
  previous?: string | null;
  results: Client[];
}
