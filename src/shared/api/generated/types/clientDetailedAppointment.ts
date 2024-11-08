/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */
import type { ClientInfo } from './clientInfo';
import type { RoomTypeEnum } from './roomTypeEnum';
import type { StatusEnum } from './statusEnum';

export interface ClientDetailedAppointment {
  /** @nullable */
  branch?: number | null;
  client: ClientInfo;
  /**
   * @maxLength 500
   * @nullable
   */
  comment?: string | null;
  date: string;
  /** @nullable */
  employee?: number | null;
  room_type: RoomTypeEnum;
  services: number[];
  /**
   * @minimum -32768
   * @maximum 32767
   */
  status?: StatusEnum;
}
