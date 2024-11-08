/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */

export interface ProcessPaymentRequestRequest {
  /** Сумма, которую нужно списать. */
  amount: number;
  /** ID кассы, с которой будет произведено списание. */
  cash_register_id: number;
  /** Список ID записей выплат (PayrollPayment), которые нужно обновить. */
  payment_ids: number[];
}
