/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */
import type { BranchesStatisticRetrievePeriod } from './branchesStatisticRetrievePeriod';

export type BranchesStatisticRetrieveParams = {
end?: string;
/**
 * * `week` - неделя
* `month` - месяц
* `year` - год
 */
period?: BranchesStatisticRetrievePeriod;
start?: string;
};
