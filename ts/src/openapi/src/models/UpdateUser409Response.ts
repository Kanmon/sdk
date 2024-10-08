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

import type { PrimaryBusinessOwnerAlreadyExistsForBusinessException } from './PrimaryBusinessOwnerAlreadyExistsForBusinessException';
import {
    instanceOfPrimaryBusinessOwnerAlreadyExistsForBusinessException,
    PrimaryBusinessOwnerAlreadyExistsForBusinessExceptionFromJSON,
    PrimaryBusinessOwnerAlreadyExistsForBusinessExceptionFromJSONTyped,
    PrimaryBusinessOwnerAlreadyExistsForBusinessExceptionToJSON,
} from './PrimaryBusinessOwnerAlreadyExistsForBusinessException';
import type { UserAlreadyExistsWithEmailException } from './UserAlreadyExistsWithEmailException';
import {
    instanceOfUserAlreadyExistsWithEmailException,
    UserAlreadyExistsWithEmailExceptionFromJSON,
    UserAlreadyExistsWithEmailExceptionFromJSONTyped,
    UserAlreadyExistsWithEmailExceptionToJSON,
} from './UserAlreadyExistsWithEmailException';

/**
 * @type UpdateUser409Response
 * 
 * @export
 */
export type UpdateUser409Response = PrimaryBusinessOwnerAlreadyExistsForBusinessException | UserAlreadyExistsWithEmailException;

export function UpdateUser409ResponseFromJSON(json: any): UpdateUser409Response {
    return UpdateUser409ResponseFromJSONTyped(json, false);
}

export function UpdateUser409ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUser409Response {
    if (json == null) {
        return json;
    }
    if (instanceOfPrimaryBusinessOwnerAlreadyExistsForBusinessException(json)) {
        return PrimaryBusinessOwnerAlreadyExistsForBusinessExceptionFromJSONTyped(json, true);
    }
    if (instanceOfUserAlreadyExistsWithEmailException(json)) {
        return UserAlreadyExistsWithEmailExceptionFromJSONTyped(json, true);
    }

    return {} as any;
}

export function UpdateUser409ResponseToJSON(value?: UpdateUser409Response | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfPrimaryBusinessOwnerAlreadyExistsForBusinessException(value)) {
        return PrimaryBusinessOwnerAlreadyExistsForBusinessExceptionToJSON(value as PrimaryBusinessOwnerAlreadyExistsForBusinessException);
    }
    if (instanceOfUserAlreadyExistsWithEmailException(value)) {
        return UserAlreadyExistsWithEmailExceptionToJSON(value as UserAlreadyExistsWithEmailException);
    }

    return {};
}

