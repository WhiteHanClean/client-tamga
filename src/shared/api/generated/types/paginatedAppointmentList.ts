/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */
import type { Appointment } from './appointment';

export interface PaginatedAppointmentList {
  count: number;
  /** @nullable */
  next?: string | null;
  /** @nullable */
  previous?: string | null;
  results: Appointment[];
}
