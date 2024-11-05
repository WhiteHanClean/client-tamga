/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */

export interface Employee {
  readonly appointments_count: number;
  /** @nullable */
  avatar?: string | null;
  branches: number[];
  /**
   * @maxLength 254
   * @nullable
   */
  email?: string | null;
  readonly id: number;
  is_active?: boolean;
  readonly latest_appointment_date: string;
  /** @maxLength 50 */
  name: string;
  readonly next_appointment: string;
  /**
   * @maxLength 50
   * @nullable
   */
  patronymic?: string | null;
  /**
   * @maxLength 12
   * @nullable
   */
  phone?: string | null;
  position: number;
  /** @pattern ^-?\d{0,1}(?:\.\d{0,2})?$ */
  readonly rating: string;
  services: number[];
  /** @maxLength 50 */
  surname: string;
}
