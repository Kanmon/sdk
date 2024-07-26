/* tslint:disable */
/* eslint-disable */
/**
 * Kanmon Public V2 API
 * Kanmon\'s public api. Contains all of the endpoints for both capital providers and platforms
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const ProductType = {
    LineOfCredit: 'LINE_OF_CREDIT'
} as const;
export type ProductType = typeof ProductType[keyof typeof ProductType];


export function instanceOfProductType(value: any): boolean {
    return Object.values(ProductType).includes(value);
}

export function ProductTypeFromJSON(json: any): ProductType {
    return ProductTypeFromJSONTyped(json, false);
}

export function ProductTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductType {
    return json as ProductType;
}

export function ProductTypeToJSON(value?: ProductType | null): any {
    return value as any;
}
