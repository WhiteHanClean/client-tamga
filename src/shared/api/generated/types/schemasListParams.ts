/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Tamga spectacular API
 * Документация к апи Tamga
 * OpenAPI spec version: 1.0.0
 */
import type { SchemasListCalculationType } from './schemasListCalculationType';

export type SchemasListParams = {
/**
 * * `standard` - Стандартная схема расчета
* `planned` - Плановая схема расчета
 */
calculation_type?: SchemasListCalculationType;
/**
 * Number of results to return per page.
 */
limit?: number;
name?: string;
/**
 * The initial index from which to return the results.
 */
offset?: number;
};