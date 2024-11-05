/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */
import type { CashRegisterOperationListOperationType } from './cashRegisterOperationListOperationType';

export type CashRegisterOperationListParams = {
/**
 * Дата конца фильтрации
 */
end?: string;
/**
 * Number of results to return per page.
 */
limit?: number;
/**
 * The initial index from which to return the results.
 */
offset?: number;
/**
 * * `0` - расход
* `1` - приход
 */
operation_type?: CashRegisterOperationListOperationType;
/**
 * Which field to use when ordering the results.
 */
ordering?: string;
purpose?: number;
/**
 * Дата начала фильтрации
 */
start?: string;
};
