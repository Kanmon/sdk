export * from '../models/ActivityLog';
export * from '../models/Address';
export * from '../models/BadRequestException';
export * from '../models/BankAccountAlreadyExistException';
export * from '../models/BankAccountNotFoundException';
export * from '../models/BankStatementsInvalidException';
export * from '../models/Business';
export * from '../models/BusinessAddress';
export * from '../models/BusinessAlreadyExistsException';
export * from '../models/BusinessBankAccount';
export * from '../models/BusinessDocument';
export * from '../models/BusinessDocumentType';
export * from '../models/BusinessHasNoInvoiceFinancingProductException';
export * from '../models/BusinessHasNoPrimaryOwnerException';
export * from '../models/BusinessNotFoundException';
export * from '../models/BusinessPlaidBankAccountNotFoundException';
export * from '../models/BusinessPrequalification';
export * from '../models/CheckingAccountRequiredException';
export * from '../models/ConnectToken';
export * from '../models/CreateBusinessBankAccountRequestBody';
export * from '../models/CreateBusinessDocumentsResponse';
export * from '../models/CreateBusinessRequestBody';
export * from '../models/CreateConnectTokenRequestBody';
export * from '../models/CreateEmbeddedSession409Response';
export * from '../models/CreateSessionTokenRequestBody';
export * from '../models/CreateSessionTokenRequestBodyData';
export * from '../models/CreateUser409Response';
export * from '../models/CreateUserRequestBody';
export * from '../models/DrawRequest';
export * from '../models/DrawRequestNotFoundException';
export * from '../models/DrawRequestState';
export * from '../models/EmbeddedSession';
export * from '../models/FixedDateInvoiceRepaymentWindow';
export * from '../models/FixedDurationInvoiceRepaymentWindow';
export * from '../models/ForbiddenException';
export * from '../models/GetActivityLogsResponse';
export * from '../models/GetBusinessBankAccountsResponse';
export * from '../models/GetBusinessesResponse';
export * from '../models/GetDrawRequestsResponse';
export * from '../models/GetInvoice404Response';
export * from '../models/GetInvoicesResponse';
export * from '../models/GetIssuedProductsResponse';
export * from '../models/GetOffersResponse';
export * from '../models/GetPaymentScheduleResponse';
export * from '../models/GetPrequalificationsResponse';
export * from '../models/GetUsersResponse';
export * from '../models/InternalServerErrorException';
export * from '../models/InvalidInvoiceDueDateException';
export * from '../models/Invoice';
export * from '../models/InvoiceFinancingOfferTerms';
export * from '../models/InvoiceFinancingServicingData';
export * from '../models/InvoiceFlowSessionTokenData';
export * from '../models/InvoiceFlowWithInvoiceFileSessionTokenData';
export * from '../models/InvoiceNotFoundException';
export * from '../models/InvoicePaymentPlan';
export * from '../models/InvoicePayorAddress';
export * from '../models/InvoiceRepaymentSchedule';
export * from '../models/InvoiceRepaymentScheduleItem';
export * from '../models/InvoiceStatus';
export * from '../models/IssuedProduct';
export * from '../models/IssuedProductNotFoundException';
export * from '../models/IssuedProductServicingData';
export * from '../models/LineOfCreditOfferTerms';
export * from '../models/LineOfCreditServicingData';
export * from '../models/McaOfferTerms';
export * from '../models/McaServicingData';
export * from '../models/MergeUsersRequestBody';
export * from '../models/MergeUsersResponseBody';
export * from '../models/MultipleDurationInvoiceRepaymentWindow';
export * from '../models/Offer';
export * from '../models/OfferAlreadySelectedException';
export * from '../models/OfferNotFoundException';
export * from '../models/OfferNotLockedException';
export * from '../models/OfferTerms';
export * from '../models/PaginationResult';
export * from '../models/PaymentOrder';
export * from '../models/PaymentOrderNotFoundException';
export * from '../models/PaymentOrderStatus';
export * from '../models/PaymentPlanRepaymentSchedule';
export * from '../models/PaymentPlanRepaymentScheduleItem';
export * from '../models/PaymentScheduleItem';
export * from '../models/PaymentScheduleItemPaymentOrder';
export * from '../models/PlaidAssetReportsInvalidException';
export * from '../models/PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException';
export * from '../models/PrimaryBusinessOwnerAlreadyExistsForBusinessException';
export * from '../models/PrimaryBusinessOwnerAlreadyExistsWithEmailException';
export * from '../models/PrimaryBusinessOwnerNotFoundException';
export * from '../models/SessionInvoice';
export * from '../models/SessionInvoiceWithInvoiceFile';
export * from '../models/SomeOffersHaveExpiredException';
export * from '../models/TermLoanOfferTerms';
export * from '../models/TermLoanServicingData';
export * from '../models/UnmergeableBusinessException';
export * from '../models/UpdateBusinessAccountRequestBody';
export * from '../models/UpdateBusinessRequestBody';
export * from '../models/UpdateUser409Response';
export * from '../models/UpdateUserRequestBody';
export * from '../models/User';
export * from '../models/UserAddress';
export * from '../models/UserAlreadyExistsWithEmailException';
export * from '../models/UserAlreadyExistsWithPlatformUserIdException';
export * from '../models/UserNotFoundException';

import { ActivityLog } from '../models/ActivityLog';
import { Address   , AddressStateEnum     } from '../models/Address';
import { BadRequestException, BadRequestExceptionErrorCodeEnum     } from '../models/BadRequestException';
import { BankAccountAlreadyExistException, BankAccountAlreadyExistExceptionErrorCodeEnum     } from '../models/BankAccountAlreadyExistException';
import { BankAccountNotFoundException, BankAccountNotFoundExceptionErrorCodeEnum     } from '../models/BankAccountNotFoundException';
import { BankStatementsInvalidException, BankStatementsInvalidExceptionErrorCodeEnum     } from '../models/BankStatementsInvalidException';
import { Business } from '../models/Business';
import { BusinessAddress   , BusinessAddressStateEnum     } from '../models/BusinessAddress';
import { BusinessAlreadyExistsException, BusinessAlreadyExistsExceptionErrorCodeEnum     } from '../models/BusinessAlreadyExistsException';
import { BusinessBankAccount     , BusinessBankAccountAccountTypeEnum  , BusinessBankAccountRolesEnum     } from '../models/BusinessBankAccount';
import { BusinessDocument        } from '../models/BusinessDocument';
import { BusinessDocumentType } from '../models/BusinessDocumentType';
import { BusinessHasNoInvoiceFinancingProductException, BusinessHasNoInvoiceFinancingProductExceptionErrorCodeEnum     } from '../models/BusinessHasNoInvoiceFinancingProductException';
import { BusinessHasNoPrimaryOwnerException, BusinessHasNoPrimaryOwnerExceptionErrorCodeEnum     } from '../models/BusinessHasNoPrimaryOwnerException';
import { BusinessNotFoundException, BusinessNotFoundExceptionErrorCodeEnum     } from '../models/BusinessNotFoundException';
import { BusinessPlaidBankAccountNotFoundException, BusinessPlaidBankAccountNotFoundExceptionErrorCodeEnum     } from '../models/BusinessPlaidBankAccountNotFoundException';
import { BusinessPrequalification, BusinessPrequalificationProductEnum          } from '../models/BusinessPrequalification';
import { CheckingAccountRequiredException, CheckingAccountRequiredExceptionErrorCodeEnum     } from '../models/CheckingAccountRequiredException';
import { ConnectToken } from '../models/ConnectToken';
import { CreateBusinessBankAccountRequestBody      , CreateBusinessBankAccountRequestBodyAccountTypeEnum  , CreateBusinessBankAccountRequestBodyRolesEnum   } from '../models/CreateBusinessBankAccountRequestBody';
import { CreateBusinessDocumentsResponse } from '../models/CreateBusinessDocumentsResponse';
import { CreateBusinessRequestBody } from '../models/CreateBusinessRequestBody';
import { CreateConnectTokenRequestBody } from '../models/CreateConnectTokenRequestBody';
import { CreateEmbeddedSession409Response, CreateEmbeddedSession409ResponseErrorCodeEnum     } from '../models/CreateEmbeddedSession409Response';
import { CreateSessionTokenRequestBody } from '../models/CreateSessionTokenRequestBody';
import { CreateSessionTokenRequestBodyData, CreateSessionTokenRequestBodyDataComponentEnum    } from '../models/CreateSessionTokenRequestBodyData';
import { CreateUser409Response, CreateUser409ResponseErrorCodeEnum     } from '../models/CreateUser409Response';
import { CreateUserRequestBody       , CreateUserRequestBodyRolesEnum    } from '../models/CreateUserRequestBody';
import { DrawRequest            } from '../models/DrawRequest';
import { DrawRequestNotFoundException, DrawRequestNotFoundExceptionErrorCodeEnum     } from '../models/DrawRequestNotFoundException';
import { DrawRequestState } from '../models/DrawRequestState';
import { EmbeddedSession } from '../models/EmbeddedSession';
import { FixedDateInvoiceRepaymentWindow, FixedDateInvoiceRepaymentWindowRepaymentTypeEnum    } from '../models/FixedDateInvoiceRepaymentWindow';
import { FixedDurationInvoiceRepaymentWindow, FixedDurationInvoiceRepaymentWindowRepaymentTypeEnum    } from '../models/FixedDurationInvoiceRepaymentWindow';
import { ForbiddenException, ForbiddenExceptionErrorCodeEnum     } from '../models/ForbiddenException';
import { GetActivityLogsResponse } from '../models/GetActivityLogsResponse';
import { GetBusinessBankAccountsResponse } from '../models/GetBusinessBankAccountsResponse';
import { GetBusinessesResponse } from '../models/GetBusinessesResponse';
import { GetDrawRequestsResponse } from '../models/GetDrawRequestsResponse';
import { GetInvoice404Response, GetInvoice404ResponseErrorCodeEnum     } from '../models/GetInvoice404Response';
import { GetInvoicesResponse } from '../models/GetInvoicesResponse';
import { GetIssuedProductsResponse } from '../models/GetIssuedProductsResponse';
import { GetOffersResponse } from '../models/GetOffersResponse';
import { GetPaymentScheduleResponse } from '../models/GetPaymentScheduleResponse';
import { GetPrequalificationsResponse } from '../models/GetPrequalificationsResponse';
import { GetUsersResponse } from '../models/GetUsersResponse';
import { InternalServerErrorException, InternalServerErrorExceptionErrorCodeEnum     } from '../models/InternalServerErrorException';
import { InvalidInvoiceDueDateException, InvalidInvoiceDueDateExceptionErrorCodeEnum     } from '../models/InvalidInvoiceDueDateException';
import { Invoice        , InvoicePayorTypeEnum                   } from '../models/Invoice';
import { InvoiceFinancingOfferTerms, InvoiceFinancingOfferTermsProductTypeEnum     } from '../models/InvoiceFinancingOfferTerms';
import { InvoiceFinancingServicingData, InvoiceFinancingServicingDataProductTypeEnum      } from '../models/InvoiceFinancingServicingData';
import { InvoiceFlowSessionTokenData, InvoiceFlowSessionTokenDataComponentEnum    } from '../models/InvoiceFlowSessionTokenData';
import { InvoiceFlowWithInvoiceFileSessionTokenData, InvoiceFlowWithInvoiceFileSessionTokenDataComponentEnum    } from '../models/InvoiceFlowWithInvoiceFileSessionTokenData';
import { InvoiceNotFoundException, InvoiceNotFoundExceptionErrorCodeEnum     } from '../models/InvoiceNotFoundException';
import { InvoicePaymentPlan } from '../models/InvoicePaymentPlan';
import { InvoicePayorAddress   , InvoicePayorAddressStateEnum     } from '../models/InvoicePayorAddress';
import { InvoiceRepaymentSchedule } from '../models/InvoiceRepaymentSchedule';
import { InvoiceRepaymentScheduleItem } from '../models/InvoiceRepaymentScheduleItem';
import { InvoiceStatus } from '../models/InvoiceStatus';
import { IssuedProduct    , IssuedProductLoanStatusEnum      } from '../models/IssuedProduct';
import { IssuedProductNotFoundException, IssuedProductNotFoundExceptionErrorCodeEnum     } from '../models/IssuedProductNotFoundException';
import { IssuedProductServicingData, IssuedProductServicingDataProductTypeEnum               , IssuedProductServicingDataRepaymentFrequencyEnum       } from '../models/IssuedProductServicingData';
import { LineOfCreditOfferTerms, LineOfCreditOfferTermsProductTypeEnum       } from '../models/LineOfCreditOfferTerms';
import { LineOfCreditServicingData, LineOfCreditServicingDataProductTypeEnum        } from '../models/LineOfCreditServicingData';
import { McaOfferTerms, McaOfferTermsProductTypeEnum     , McaOfferTermsRepaymentFrequencyEnum    } from '../models/McaOfferTerms';
import { McaServicingData, McaServicingDataProductTypeEnum      , McaServicingDataRepaymentFrequencyEnum     } from '../models/McaServicingData';
import { MergeUsersRequestBody } from '../models/MergeUsersRequestBody';
import { MergeUsersResponseBody } from '../models/MergeUsersResponseBody';
import { MultipleDurationInvoiceRepaymentWindow, MultipleDurationInvoiceRepaymentWindowRepaymentTypeEnum    } from '../models/MultipleDurationInvoiceRepaymentWindow';
import { Offer } from '../models/Offer';
import { OfferAlreadySelectedException, OfferAlreadySelectedExceptionErrorCodeEnum     } from '../models/OfferAlreadySelectedException';
import { OfferNotFoundException, OfferNotFoundExceptionErrorCodeEnum     } from '../models/OfferNotFoundException';
import { OfferNotLockedException, OfferNotLockedExceptionErrorCodeEnum     } from '../models/OfferNotLockedException';
import { OfferTerms, OfferTermsProductTypeEnum            , OfferTermsRepaymentFrequencyEnum     } from '../models/OfferTerms';
import { PaginationResult } from '../models/PaginationResult';
import { PaymentOrder           , PaymentOrderFeeTypeEnum  , PaymentOrderDirectionEnum      } from '../models/PaymentOrder';
import { PaymentOrderNotFoundException, PaymentOrderNotFoundExceptionErrorCodeEnum     } from '../models/PaymentOrderNotFoundException';
import { PaymentOrderStatus } from '../models/PaymentOrderStatus';
import { PaymentPlanRepaymentSchedule } from '../models/PaymentPlanRepaymentSchedule';
import { PaymentPlanRepaymentScheduleItem } from '../models/PaymentPlanRepaymentScheduleItem';
import { PaymentScheduleItem } from '../models/PaymentScheduleItem';
import { PaymentScheduleItemPaymentOrder           , PaymentScheduleItemPaymentOrderFeeTypeEnum  , PaymentScheduleItemPaymentOrderDirectionEnum      } from '../models/PaymentScheduleItemPaymentOrder';
import { PlaidAssetReportsInvalidException, PlaidAssetReportsInvalidExceptionErrorCodeEnum     } from '../models/PlaidAssetReportsInvalidException';
import { PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException, PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductExceptionErrorCodeEnum     } from '../models/PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException';
import { PrimaryBusinessOwnerAlreadyExistsForBusinessException, PrimaryBusinessOwnerAlreadyExistsForBusinessExceptionErrorCodeEnum     } from '../models/PrimaryBusinessOwnerAlreadyExistsForBusinessException';
import { PrimaryBusinessOwnerAlreadyExistsWithEmailException, PrimaryBusinessOwnerAlreadyExistsWithEmailExceptionErrorCodeEnum     } from '../models/PrimaryBusinessOwnerAlreadyExistsWithEmailException';
import { PrimaryBusinessOwnerNotFoundException, PrimaryBusinessOwnerNotFoundExceptionErrorCodeEnum     } from '../models/PrimaryBusinessOwnerNotFoundException';
import { SessionInvoice       , SessionInvoicePayorTypeEnum        } from '../models/SessionInvoice';
import { SessionInvoiceWithInvoiceFile        , SessionInvoiceWithInvoiceFilePayorTypeEnum        } from '../models/SessionInvoiceWithInvoiceFile';
import { SomeOffersHaveExpiredException, SomeOffersHaveExpiredExceptionErrorCodeEnum     } from '../models/SomeOffersHaveExpiredException';
import { TermLoanOfferTerms, TermLoanOfferTermsProductTypeEnum        } from '../models/TermLoanOfferTerms';
import { TermLoanServicingData, TermLoanServicingDataProductTypeEnum         } from '../models/TermLoanServicingData';
import { UnmergeableBusinessException, UnmergeableBusinessExceptionErrorCodeEnum     } from '../models/UnmergeableBusinessException';
import { UpdateBusinessAccountRequestBody } from '../models/UpdateBusinessAccountRequestBody';
import { UpdateBusinessRequestBody } from '../models/UpdateBusinessRequestBody';
import { UpdateUser409Response, UpdateUser409ResponseErrorCodeEnum     } from '../models/UpdateUser409Response';
import { UpdateUserRequestBody    , UpdateUserRequestBodyRolesEnum    } from '../models/UpdateUserRequestBody';
import { User        , UserRolesEnum      } from '../models/User';
import { UserAddress   , UserAddressStateEnum     } from '../models/UserAddress';
import { UserAlreadyExistsWithEmailException, UserAlreadyExistsWithEmailExceptionErrorCodeEnum     } from '../models/UserAlreadyExistsWithEmailException';
import { UserAlreadyExistsWithPlatformUserIdException, UserAlreadyExistsWithPlatformUserIdExceptionErrorCodeEnum     } from '../models/UserAlreadyExistsWithPlatformUserIdException';
import { UserNotFoundException, UserNotFoundExceptionErrorCodeEnum     } from '../models/UserNotFoundException';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "AddressStateEnum",
    "BadRequestExceptionErrorCodeEnum",
    "BankAccountAlreadyExistExceptionErrorCodeEnum",
    "BankAccountNotFoundExceptionErrorCodeEnum",
    "BankStatementsInvalidExceptionErrorCodeEnum",
    "BusinessAddressStateEnum",
    "BusinessAlreadyExistsExceptionErrorCodeEnum",
    "BusinessBankAccountAccountTypeEnum",
    "BusinessBankAccountRolesEnum",
    "BusinessDocumentType",
    "BusinessHasNoInvoiceFinancingProductExceptionErrorCodeEnum",
    "BusinessHasNoPrimaryOwnerExceptionErrorCodeEnum",
    "BusinessNotFoundExceptionErrorCodeEnum",
    "BusinessPlaidBankAccountNotFoundExceptionErrorCodeEnum",
    "BusinessPrequalificationProductEnum",
    "CheckingAccountRequiredExceptionErrorCodeEnum",
    "CreateBusinessBankAccountRequestBodyAccountTypeEnum",
    "CreateBusinessBankAccountRequestBodyRolesEnum",
    "CreateEmbeddedSession409ResponseErrorCodeEnum",
    "CreateSessionTokenRequestBodyDataComponentEnum",
    "CreateUser409ResponseErrorCodeEnum",
    "CreateUserRequestBodyRolesEnum",
    "DrawRequestNotFoundExceptionErrorCodeEnum",
    "DrawRequestState",
    "FixedDateInvoiceRepaymentWindowRepaymentTypeEnum",
    "FixedDurationInvoiceRepaymentWindowRepaymentTypeEnum",
    "ForbiddenExceptionErrorCodeEnum",
    "GetInvoice404ResponseErrorCodeEnum",
    "InternalServerErrorExceptionErrorCodeEnum",
    "InvalidInvoiceDueDateExceptionErrorCodeEnum",
    "InvoicePayorTypeEnum",
    "InvoiceFinancingOfferTermsProductTypeEnum",
    "InvoiceFinancingServicingDataProductTypeEnum",
    "InvoiceFlowSessionTokenDataComponentEnum",
    "InvoiceFlowWithInvoiceFileSessionTokenDataComponentEnum",
    "InvoiceNotFoundExceptionErrorCodeEnum",
    "InvoicePayorAddressStateEnum",
    "InvoiceStatus",
    "IssuedProductLoanStatusEnum",
    "IssuedProductNotFoundExceptionErrorCodeEnum",
    "IssuedProductServicingDataProductTypeEnum",
    "IssuedProductServicingDataRepaymentFrequencyEnum",
    "LineOfCreditOfferTermsProductTypeEnum",
    "LineOfCreditServicingDataProductTypeEnum",
    "McaOfferTermsProductTypeEnum",
    "McaOfferTermsRepaymentFrequencyEnum",
    "McaServicingDataProductTypeEnum",
    "McaServicingDataRepaymentFrequencyEnum",
    "MultipleDurationInvoiceRepaymentWindowRepaymentTypeEnum",
    "OfferAlreadySelectedExceptionErrorCodeEnum",
    "OfferNotFoundExceptionErrorCodeEnum",
    "OfferNotLockedExceptionErrorCodeEnum",
    "OfferTermsProductTypeEnum",
    "OfferTermsRepaymentFrequencyEnum",
    "PaymentOrderFeeTypeEnum",
    "PaymentOrderDirectionEnum",
    "PaymentOrderNotFoundExceptionErrorCodeEnum",
    "PaymentOrderStatus",
    "PaymentScheduleItemPaymentOrderFeeTypeEnum",
    "PaymentScheduleItemPaymentOrderDirectionEnum",
    "PlaidAssetReportsInvalidExceptionErrorCodeEnum",
    "PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductExceptionErrorCodeEnum",
    "PrimaryBusinessOwnerAlreadyExistsForBusinessExceptionErrorCodeEnum",
    "PrimaryBusinessOwnerAlreadyExistsWithEmailExceptionErrorCodeEnum",
    "PrimaryBusinessOwnerNotFoundExceptionErrorCodeEnum",
    "SessionInvoicePayorTypeEnum",
    "SessionInvoiceWithInvoiceFilePayorTypeEnum",
    "SomeOffersHaveExpiredExceptionErrorCodeEnum",
    "TermLoanOfferTermsProductTypeEnum",
    "TermLoanServicingDataProductTypeEnum",
    "UnmergeableBusinessExceptionErrorCodeEnum",
    "UpdateUser409ResponseErrorCodeEnum",
    "UpdateUserRequestBodyRolesEnum",
    "UserRolesEnum",
    "UserAddressStateEnum",
    "UserAlreadyExistsWithEmailExceptionErrorCodeEnum",
    "UserAlreadyExistsWithPlatformUserIdExceptionErrorCodeEnum",
    "UserNotFoundExceptionErrorCodeEnum",
]);

let typeMap: {[index: string]: any} = {
    "ActivityLog": ActivityLog,
    "Address": Address,
    "BadRequestException": BadRequestException,
    "BankAccountAlreadyExistException": BankAccountAlreadyExistException,
    "BankAccountNotFoundException": BankAccountNotFoundException,
    "BankStatementsInvalidException": BankStatementsInvalidException,
    "Business": Business,
    "BusinessAddress": BusinessAddress,
    "BusinessAlreadyExistsException": BusinessAlreadyExistsException,
    "BusinessBankAccount": BusinessBankAccount,
    "BusinessDocument": BusinessDocument,
    "BusinessHasNoInvoiceFinancingProductException": BusinessHasNoInvoiceFinancingProductException,
    "BusinessHasNoPrimaryOwnerException": BusinessHasNoPrimaryOwnerException,
    "BusinessNotFoundException": BusinessNotFoundException,
    "BusinessPlaidBankAccountNotFoundException": BusinessPlaidBankAccountNotFoundException,
    "BusinessPrequalification": BusinessPrequalification,
    "CheckingAccountRequiredException": CheckingAccountRequiredException,
    "ConnectToken": ConnectToken,
    "CreateBusinessBankAccountRequestBody": CreateBusinessBankAccountRequestBody,
    "CreateBusinessDocumentsResponse": CreateBusinessDocumentsResponse,
    "CreateBusinessRequestBody": CreateBusinessRequestBody,
    "CreateConnectTokenRequestBody": CreateConnectTokenRequestBody,
    "CreateEmbeddedSession409Response": CreateEmbeddedSession409Response,
    "CreateSessionTokenRequestBody": CreateSessionTokenRequestBody,
    "CreateSessionTokenRequestBodyData": CreateSessionTokenRequestBodyData,
    "CreateUser409Response": CreateUser409Response,
    "CreateUserRequestBody": CreateUserRequestBody,
    "DrawRequest": DrawRequest,
    "DrawRequestNotFoundException": DrawRequestNotFoundException,
    "EmbeddedSession": EmbeddedSession,
    "FixedDateInvoiceRepaymentWindow": FixedDateInvoiceRepaymentWindow,
    "FixedDurationInvoiceRepaymentWindow": FixedDurationInvoiceRepaymentWindow,
    "ForbiddenException": ForbiddenException,
    "GetActivityLogsResponse": GetActivityLogsResponse,
    "GetBusinessBankAccountsResponse": GetBusinessBankAccountsResponse,
    "GetBusinessesResponse": GetBusinessesResponse,
    "GetDrawRequestsResponse": GetDrawRequestsResponse,
    "GetInvoice404Response": GetInvoice404Response,
    "GetInvoicesResponse": GetInvoicesResponse,
    "GetIssuedProductsResponse": GetIssuedProductsResponse,
    "GetOffersResponse": GetOffersResponse,
    "GetPaymentScheduleResponse": GetPaymentScheduleResponse,
    "GetPrequalificationsResponse": GetPrequalificationsResponse,
    "GetUsersResponse": GetUsersResponse,
    "InternalServerErrorException": InternalServerErrorException,
    "InvalidInvoiceDueDateException": InvalidInvoiceDueDateException,
    "Invoice": Invoice,
    "InvoiceFinancingOfferTerms": InvoiceFinancingOfferTerms,
    "InvoiceFinancingServicingData": InvoiceFinancingServicingData,
    "InvoiceFlowSessionTokenData": InvoiceFlowSessionTokenData,
    "InvoiceFlowWithInvoiceFileSessionTokenData": InvoiceFlowWithInvoiceFileSessionTokenData,
    "InvoiceNotFoundException": InvoiceNotFoundException,
    "InvoicePaymentPlan": InvoicePaymentPlan,
    "InvoicePayorAddress": InvoicePayorAddress,
    "InvoiceRepaymentSchedule": InvoiceRepaymentSchedule,
    "InvoiceRepaymentScheduleItem": InvoiceRepaymentScheduleItem,
    "IssuedProduct": IssuedProduct,
    "IssuedProductNotFoundException": IssuedProductNotFoundException,
    "IssuedProductServicingData": IssuedProductServicingData,
    "LineOfCreditOfferTerms": LineOfCreditOfferTerms,
    "LineOfCreditServicingData": LineOfCreditServicingData,
    "McaOfferTerms": McaOfferTerms,
    "McaServicingData": McaServicingData,
    "MergeUsersRequestBody": MergeUsersRequestBody,
    "MergeUsersResponseBody": MergeUsersResponseBody,
    "MultipleDurationInvoiceRepaymentWindow": MultipleDurationInvoiceRepaymentWindow,
    "Offer": Offer,
    "OfferAlreadySelectedException": OfferAlreadySelectedException,
    "OfferNotFoundException": OfferNotFoundException,
    "OfferNotLockedException": OfferNotLockedException,
    "OfferTerms": OfferTerms,
    "PaginationResult": PaginationResult,
    "PaymentOrder": PaymentOrder,
    "PaymentOrderNotFoundException": PaymentOrderNotFoundException,
    "PaymentPlanRepaymentSchedule": PaymentPlanRepaymentSchedule,
    "PaymentPlanRepaymentScheduleItem": PaymentPlanRepaymentScheduleItem,
    "PaymentScheduleItem": PaymentScheduleItem,
    "PaymentScheduleItemPaymentOrder": PaymentScheduleItemPaymentOrder,
    "PlaidAssetReportsInvalidException": PlaidAssetReportsInvalidException,
    "PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException": PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException,
    "PrimaryBusinessOwnerAlreadyExistsForBusinessException": PrimaryBusinessOwnerAlreadyExistsForBusinessException,
    "PrimaryBusinessOwnerAlreadyExistsWithEmailException": PrimaryBusinessOwnerAlreadyExistsWithEmailException,
    "PrimaryBusinessOwnerNotFoundException": PrimaryBusinessOwnerNotFoundException,
    "SessionInvoice": SessionInvoice,
    "SessionInvoiceWithInvoiceFile": SessionInvoiceWithInvoiceFile,
    "SomeOffersHaveExpiredException": SomeOffersHaveExpiredException,
    "TermLoanOfferTerms": TermLoanOfferTerms,
    "TermLoanServicingData": TermLoanServicingData,
    "UnmergeableBusinessException": UnmergeableBusinessException,
    "UpdateBusinessAccountRequestBody": UpdateBusinessAccountRequestBody,
    "UpdateBusinessRequestBody": UpdateBusinessRequestBody,
    "UpdateUser409Response": UpdateUser409Response,
    "UpdateUserRequestBody": UpdateUserRequestBody,
    "User": User,
    "UserAddress": UserAddress,
    "UserAlreadyExistsWithEmailException": UserAlreadyExistsWithEmailException,
    "UserAlreadyExistsWithPlatformUserIdException": UserAlreadyExistsWithPlatformUserIdException,
    "UserNotFoundException": UserNotFoundException,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
