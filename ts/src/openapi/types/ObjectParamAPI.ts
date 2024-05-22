import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ActivityLog } from '../models/ActivityLog';
import { Address } from '../models/Address';
import { BadRequestException } from '../models/BadRequestException';
import { BankAccountAlreadyExistException } from '../models/BankAccountAlreadyExistException';
import { BankAccountNotFoundException } from '../models/BankAccountNotFoundException';
import { BankStatementsInvalidException } from '../models/BankStatementsInvalidException';
import { Business } from '../models/Business';
import { BusinessAddress } from '../models/BusinessAddress';
import { BusinessAlreadyExistsException } from '../models/BusinessAlreadyExistsException';
import { BusinessBankAccount } from '../models/BusinessBankAccount';
import { BusinessDocument } from '../models/BusinessDocument';
import { BusinessDocumentType } from '../models/BusinessDocumentType';
import { BusinessHasNoInvoiceFinancingProductException } from '../models/BusinessHasNoInvoiceFinancingProductException';
import { BusinessHasNoPrimaryOwnerException } from '../models/BusinessHasNoPrimaryOwnerException';
import { BusinessNotFoundException } from '../models/BusinessNotFoundException';
import { BusinessPlaidBankAccountNotFoundException } from '../models/BusinessPlaidBankAccountNotFoundException';
import { BusinessPrequalification } from '../models/BusinessPrequalification';
import { CheckingAccountRequiredException } from '../models/CheckingAccountRequiredException';
import { ConnectToken } from '../models/ConnectToken';
import { CreateBusinessBankAccountRequestBody } from '../models/CreateBusinessBankAccountRequestBody';
import { CreateBusinessDocumentsResponse } from '../models/CreateBusinessDocumentsResponse';
import { CreateBusinessRequestBody } from '../models/CreateBusinessRequestBody';
import { CreateConnectTokenRequestBody } from '../models/CreateConnectTokenRequestBody';
import { CreateEmbeddedSession409Response } from '../models/CreateEmbeddedSession409Response';
import { CreateSessionTokenRequestBody } from '../models/CreateSessionTokenRequestBody';
import { CreateSessionTokenRequestBodyData } from '../models/CreateSessionTokenRequestBodyData';
import { CreateUser409Response } from '../models/CreateUser409Response';
import { CreateUserRequestBody } from '../models/CreateUserRequestBody';
import { DrawRequest } from '../models/DrawRequest';
import { DrawRequestNotFoundException } from '../models/DrawRequestNotFoundException';
import { DrawRequestState } from '../models/DrawRequestState';
import { EmbeddedSession } from '../models/EmbeddedSession';
import { FixedDateInvoiceRepaymentWindow } from '../models/FixedDateInvoiceRepaymentWindow';
import { FixedDurationInvoiceRepaymentWindow } from '../models/FixedDurationInvoiceRepaymentWindow';
import { ForbiddenException } from '../models/ForbiddenException';
import { GetActivityLogsResponse } from '../models/GetActivityLogsResponse';
import { GetBusinessBankAccountsResponse } from '../models/GetBusinessBankAccountsResponse';
import { GetBusinessesResponse } from '../models/GetBusinessesResponse';
import { GetDrawRequestsResponse } from '../models/GetDrawRequestsResponse';
import { GetInvoice404Response } from '../models/GetInvoice404Response';
import { GetInvoicesResponse } from '../models/GetInvoicesResponse';
import { GetIssuedProductsResponse } from '../models/GetIssuedProductsResponse';
import { GetOffersResponse } from '../models/GetOffersResponse';
import { GetPaymentScheduleResponse } from '../models/GetPaymentScheduleResponse';
import { GetPrequalificationsResponse } from '../models/GetPrequalificationsResponse';
import { GetUsersResponse } from '../models/GetUsersResponse';
import { InternalServerErrorException } from '../models/InternalServerErrorException';
import { InvalidInvoiceDueDateException } from '../models/InvalidInvoiceDueDateException';
import { Invoice } from '../models/Invoice';
import { InvoiceFinancingOfferTerms } from '../models/InvoiceFinancingOfferTerms';
import { InvoiceFinancingServicingData } from '../models/InvoiceFinancingServicingData';
import { InvoiceFlowSessionTokenData } from '../models/InvoiceFlowSessionTokenData';
import { InvoiceFlowWithInvoiceFileSessionTokenData } from '../models/InvoiceFlowWithInvoiceFileSessionTokenData';
import { InvoiceNotFoundException } from '../models/InvoiceNotFoundException';
import { InvoicePaymentPlan } from '../models/InvoicePaymentPlan';
import { InvoicePayorAddress } from '../models/InvoicePayorAddress';
import { InvoiceRepaymentSchedule } from '../models/InvoiceRepaymentSchedule';
import { InvoiceRepaymentScheduleItem } from '../models/InvoiceRepaymentScheduleItem';
import { InvoiceStatus } from '../models/InvoiceStatus';
import { IssuedProduct } from '../models/IssuedProduct';
import { IssuedProductNotFoundException } from '../models/IssuedProductNotFoundException';
import { IssuedProductServicingData } from '../models/IssuedProductServicingData';
import { LineOfCreditOfferTerms } from '../models/LineOfCreditOfferTerms';
import { LineOfCreditServicingData } from '../models/LineOfCreditServicingData';
import { McaOfferTerms } from '../models/McaOfferTerms';
import { McaServicingData } from '../models/McaServicingData';
import { MergeUsersRequestBody } from '../models/MergeUsersRequestBody';
import { MergeUsersResponseBody } from '../models/MergeUsersResponseBody';
import { MultipleDurationInvoiceRepaymentWindow } from '../models/MultipleDurationInvoiceRepaymentWindow';
import { Offer } from '../models/Offer';
import { OfferAlreadySelectedException } from '../models/OfferAlreadySelectedException';
import { OfferNotFoundException } from '../models/OfferNotFoundException';
import { OfferNotLockedException } from '../models/OfferNotLockedException';
import { OfferTerms } from '../models/OfferTerms';
import { PaginationResult } from '../models/PaginationResult';
import { PaymentOrder } from '../models/PaymentOrder';
import { PaymentOrderNotFoundException } from '../models/PaymentOrderNotFoundException';
import { PaymentOrderStatus } from '../models/PaymentOrderStatus';
import { PaymentPlanRepaymentSchedule } from '../models/PaymentPlanRepaymentSchedule';
import { PaymentPlanRepaymentScheduleItem } from '../models/PaymentPlanRepaymentScheduleItem';
import { PaymentScheduleItem } from '../models/PaymentScheduleItem';
import { PaymentScheduleItemPaymentOrder } from '../models/PaymentScheduleItemPaymentOrder';
import { PlaidAssetReportsInvalidException } from '../models/PlaidAssetReportsInvalidException';
import { PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException } from '../models/PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException';
import { PrimaryBusinessOwnerAlreadyExistsForBusinessException } from '../models/PrimaryBusinessOwnerAlreadyExistsForBusinessException';
import { PrimaryBusinessOwnerAlreadyExistsWithEmailException } from '../models/PrimaryBusinessOwnerAlreadyExistsWithEmailException';
import { PrimaryBusinessOwnerNotFoundException } from '../models/PrimaryBusinessOwnerNotFoundException';
import { SessionInvoice } from '../models/SessionInvoice';
import { SessionInvoiceWithInvoiceFile } from '../models/SessionInvoiceWithInvoiceFile';
import { SomeOffersHaveExpiredException } from '../models/SomeOffersHaveExpiredException';
import { TermLoanOfferTerms } from '../models/TermLoanOfferTerms';
import { TermLoanServicingData } from '../models/TermLoanServicingData';
import { UnmergeableBusinessException } from '../models/UnmergeableBusinessException';
import { UpdateBusinessAccountRequestBody } from '../models/UpdateBusinessAccountRequestBody';
import { UpdateBusinessRequestBody } from '../models/UpdateBusinessRequestBody';
import { UpdateUser409Response } from '../models/UpdateUser409Response';
import { UpdateUserRequestBody } from '../models/UpdateUserRequestBody';
import { User } from '../models/User';
import { UserAddress } from '../models/UserAddress';
import { UserAlreadyExistsWithEmailException } from '../models/UserAlreadyExistsWithEmailException';
import { UserAlreadyExistsWithPlatformUserIdException } from '../models/UserAlreadyExistsWithPlatformUserIdException';
import { UserNotFoundException } from '../models/UserNotFoundException';

import { ObservableBankAccountsApi } from "./ObservableAPI";
import { BankAccountsApiRequestFactory, BankAccountsApiResponseProcessor} from "../apis/BankAccountsApi";

export interface BankAccountsApiCreateBusinessBankAccountRequest {
    /**
     * 
     * @type CreateBusinessBankAccountRequestBody
     * @memberof BankAccountsApicreateBusinessBankAccount
     */
    createBusinessBankAccountRequestBody: CreateBusinessBankAccountRequestBody
}

export interface BankAccountsApiGetBusinessBankAccountRequest {
    /**
     * Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;.
     * @type string
     * @memberof BankAccountsApigetBusinessBankAccount
     */
    id: string
    /**
     * Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     * @type &#39;KANMON&#39; | &#39;PLATFORM&#39;
     * @memberof BankAccountsApigetBusinessBankAccount
     */
    idType?: 'KANMON' | 'PLATFORM'
}

export interface BankAccountsApiGetBusinessBankAccountsRequest {
    /**
     * A comma delimited list of Kanmon’s unique IDs for bank accounts.
     * @type string
     * @memberof BankAccountsApigetBusinessBankAccounts
     */
    ids?: string
    /**
     * A comma delimited list of your platform’s unique IDs for bank accounts.
     * @type string
     * @memberof BankAccountsApigetBusinessBankAccounts
     */
    platformBankAccountIds?: string
    /**
     * A comma delimited list of your platform’s unique business IDs for bannk accounts.
     * @type string
     * @memberof BankAccountsApigetBusinessBankAccounts
     */
    platformBusinessIds?: string
    /**
     * A comma delimited list of your Kanmon’s unique business IDs for bannk accounts.
     * @type string
     * @memberof BankAccountsApigetBusinessBankAccounts
     */
    businessIds?: string
    /**
     * The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @type number
     * @memberof BankAccountsApigetBusinessBankAccounts
     */
    offset?: number
    /**
     * The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @type number
     * @memberof BankAccountsApigetBusinessBankAccounts
     */
    limit?: number
    /**
     * Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof BankAccountsApigetBusinessBankAccounts
     */
    createdAtStart?: string
    /**
     * Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof BankAccountsApigetBusinessBankAccounts
     */
    createdAtEnd?: string
}

export interface BankAccountsApiUpdateBusinessBankAccountRequest {
    /**
     * Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;.
     * @type string
     * @memberof BankAccountsApiupdateBusinessBankAccount
     */
    id: string
    /**
     * 
     * @type UpdateBusinessAccountRequestBody
     * @memberof BankAccountsApiupdateBusinessBankAccount
     */
    updateBusinessAccountRequestBody: UpdateBusinessAccountRequestBody
    /**
     * Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     * @type &#39;KANMON&#39; | &#39;PLATFORM&#39;
     * @memberof BankAccountsApiupdateBusinessBankAccount
     */
    idType?: 'KANMON' | 'PLATFORM'
}

export class ObjectBankAccountsApi {
    private api: ObservableBankAccountsApi

    public constructor(configuration: Configuration, requestFactory?: BankAccountsApiRequestFactory, responseProcessor?: BankAccountsApiResponseProcessor) {
        this.api = new ObservableBankAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.       Please contact Kanmon to enable access to bank account APIs.
     * Create a business bank account
     * @param param the request object
     */
    public createBusinessBankAccountWithHttpInfo(param: BankAccountsApiCreateBusinessBankAccountRequest, options?: Configuration): Promise<HttpInfo<BusinessBankAccount>> {
        return this.api.createBusinessBankAccountWithHttpInfo(param.createBusinessBankAccountRequestBody,  options).toPromise();
    }

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.       Please contact Kanmon to enable access to bank account APIs.
     * Create a business bank account
     * @param param the request object
     */
    public createBusinessBankAccount(param: BankAccountsApiCreateBusinessBankAccountRequest, options?: Configuration): Promise<BusinessBankAccount> {
        return this.api.createBusinessBankAccount(param.createBusinessBankAccountRequestBody,  options).toPromise();
    }

    /**
     * Please contact Kanmon to enable access to bank account APIs.
     * Fetch a business bank account
     * @param param the request object
     */
    public getBusinessBankAccountWithHttpInfo(param: BankAccountsApiGetBusinessBankAccountRequest, options?: Configuration): Promise<HttpInfo<BusinessBankAccount>> {
        return this.api.getBusinessBankAccountWithHttpInfo(param.id, param.idType,  options).toPromise();
    }

    /**
     * Please contact Kanmon to enable access to bank account APIs.
     * Fetch a business bank account
     * @param param the request object
     */
    public getBusinessBankAccount(param: BankAccountsApiGetBusinessBankAccountRequest, options?: Configuration): Promise<BusinessBankAccount> {
        return this.api.getBusinessBankAccount(param.id, param.idType,  options).toPromise();
    }

    /**
     * Please contact Kanmon to enable access to bank account APIs.
     * Fetch business bank accounts
     * @param param the request object
     */
    public getBusinessBankAccountsWithHttpInfo(param: BankAccountsApiGetBusinessBankAccountsRequest = {}, options?: Configuration): Promise<HttpInfo<GetBusinessBankAccountsResponse>> {
        return this.api.getBusinessBankAccountsWithHttpInfo(param.ids, param.platformBankAccountIds, param.platformBusinessIds, param.businessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Please contact Kanmon to enable access to bank account APIs.
     * Fetch business bank accounts
     * @param param the request object
     */
    public getBusinessBankAccounts(param: BankAccountsApiGetBusinessBankAccountsRequest = {}, options?: Configuration): Promise<GetBusinessBankAccountsResponse> {
        return this.api.getBusinessBankAccounts(param.ids, param.platformBankAccountIds, param.platformBusinessIds, param.businessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.         Please contact Kanmon to enable access to bank account APIs.
     * Update a business bank account
     * @param param the request object
     */
    public updateBusinessBankAccountWithHttpInfo(param: BankAccountsApiUpdateBusinessBankAccountRequest, options?: Configuration): Promise<HttpInfo<BusinessBankAccount>> {
        return this.api.updateBusinessBankAccountWithHttpInfo(param.id, param.updateBusinessAccountRequestBody, param.idType,  options).toPromise();
    }

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.         Please contact Kanmon to enable access to bank account APIs.
     * Update a business bank account
     * @param param the request object
     */
    public updateBusinessBankAccount(param: BankAccountsApiUpdateBusinessBankAccountRequest, options?: Configuration): Promise<BusinessBankAccount> {
        return this.api.updateBusinessBankAccount(param.id, param.updateBusinessAccountRequestBody, param.idType,  options).toPromise();
    }

}

import { ObservableBusinessesApi } from "./ObservableAPI";
import { BusinessesApiRequestFactory, BusinessesApiResponseProcessor} from "../apis/BusinessesApi";

export interface BusinessesApiCreateBusinessRequest {
    /**
     * 
     * @type CreateBusinessRequestBody
     * @memberof BusinessesApicreateBusiness
     */
    createBusinessRequestBody: CreateBusinessRequestBody
}

export interface BusinessesApiGetBusinessRequest {
    /**
     * Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @type any
     * @memberof BusinessesApigetBusiness
     */
    id: any
    /**
     * Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     * @type &#39;KANMON&#39; | &#39;PLATFORM&#39;
     * @memberof BusinessesApigetBusiness
     */
    idType?: 'KANMON' | 'PLATFORM'
}

export interface BusinessesApiGetBusinessActivityLogRequest {
    /**
     * Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @type any
     * @memberof BusinessesApigetBusinessActivityLog
     */
    id: any
    /**
     * Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     * @type &#39;KANMON&#39; | &#39;PLATFORM&#39;
     * @memberof BusinessesApigetBusinessActivityLog
     */
    idType?: 'KANMON' | 'PLATFORM'
    /**
     * The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @type number
     * @memberof BusinessesApigetBusinessActivityLog
     */
    offset?: number
    /**
     * The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @type number
     * @memberof BusinessesApigetBusinessActivityLog
     */
    limit?: number
    /**
     * Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof BusinessesApigetBusinessActivityLog
     */
    createdAtStart?: string
    /**
     * Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof BusinessesApigetBusinessActivityLog
     */
    createdAtEnd?: string
}

export interface BusinessesApiGetBusinessesRequest {
    /**
     * A comma delimited list of Kanmon’s unique IDs for businesses.
     * @type string
     * @memberof BusinessesApigetBusinesses
     */
    ids?: string
    /**
     * A comma delimited list of your platform’s unique IDs for businesses.
     * @type string
     * @memberof BusinessesApigetBusinesses
     */
    platformBusinessIds?: string
    /**
     * The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @type number
     * @memberof BusinessesApigetBusinesses
     */
    offset?: number
    /**
     * The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @type number
     * @memberof BusinessesApigetBusinesses
     */
    limit?: number
    /**
     * Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof BusinessesApigetBusinesses
     */
    createdAtStart?: string
    /**
     * Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof BusinessesApigetBusinesses
     */
    createdAtEnd?: string
}

export interface BusinessesApiUpdateBusinessRequest {
    /**
     * Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @type any
     * @memberof BusinessesApiupdateBusiness
     */
    id: any
    /**
     * 
     * @type UpdateBusinessRequestBody
     * @memberof BusinessesApiupdateBusiness
     */
    updateBusinessRequestBody: UpdateBusinessRequestBody
    /**
     * Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     * @type &#39;KANMON&#39; | &#39;PLATFORM&#39;
     * @memberof BusinessesApiupdateBusiness
     */
    idType?: 'KANMON' | 'PLATFORM'
}

export class ObjectBusinessesApi {
    private api: ObservableBusinessesApi

    public constructor(configuration: Configuration, requestFactory?: BusinessesApiRequestFactory, responseProcessor?: BusinessesApiResponseProcessor) {
        this.api = new ObservableBusinessesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a business
     * @param param the request object
     */
    public createBusinessWithHttpInfo(param: BusinessesApiCreateBusinessRequest, options?: Configuration): Promise<HttpInfo<Business>> {
        return this.api.createBusinessWithHttpInfo(param.createBusinessRequestBody,  options).toPromise();
    }

    /**
     * Create a business
     * @param param the request object
     */
    public createBusiness(param: BusinessesApiCreateBusinessRequest, options?: Configuration): Promise<Business> {
        return this.api.createBusiness(param.createBusinessRequestBody,  options).toPromise();
    }

    /**
     * Fetch a business
     * @param param the request object
     */
    public getBusinessWithHttpInfo(param: BusinessesApiGetBusinessRequest, options?: Configuration): Promise<HttpInfo<Business>> {
        return this.api.getBusinessWithHttpInfo(param.id, param.idType,  options).toPromise();
    }

    /**
     * Fetch a business
     * @param param the request object
     */
    public getBusiness(param: BusinessesApiGetBusinessRequest, options?: Configuration): Promise<Business> {
        return this.api.getBusiness(param.id, param.idType,  options).toPromise();
    }

    /**
     * Fetch activity logs for a business
     * @param param the request object
     */
    public getBusinessActivityLogWithHttpInfo(param: BusinessesApiGetBusinessActivityLogRequest, options?: Configuration): Promise<HttpInfo<GetActivityLogsResponse>> {
        return this.api.getBusinessActivityLogWithHttpInfo(param.id, param.idType, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Fetch activity logs for a business
     * @param param the request object
     */
    public getBusinessActivityLog(param: BusinessesApiGetBusinessActivityLogRequest, options?: Configuration): Promise<GetActivityLogsResponse> {
        return this.api.getBusinessActivityLog(param.id, param.idType, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Fetch businesses
     * @param param the request object
     */
    public getBusinessesWithHttpInfo(param: BusinessesApiGetBusinessesRequest = {}, options?: Configuration): Promise<HttpInfo<GetBusinessesResponse>> {
        return this.api.getBusinessesWithHttpInfo(param.ids, param.platformBusinessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Fetch businesses
     * @param param the request object
     */
    public getBusinesses(param: BusinessesApiGetBusinessesRequest = {}, options?: Configuration): Promise<GetBusinessesResponse> {
        return this.api.getBusinesses(param.ids, param.platformBusinessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Update a business
     * @param param the request object
     */
    public updateBusinessWithHttpInfo(param: BusinessesApiUpdateBusinessRequest, options?: Configuration): Promise<HttpInfo<Business>> {
        return this.api.updateBusinessWithHttpInfo(param.id, param.updateBusinessRequestBody, param.idType,  options).toPromise();
    }

    /**
     * Update a business
     * @param param the request object
     */
    public updateBusiness(param: BusinessesApiUpdateBusinessRequest, options?: Configuration): Promise<Business> {
        return this.api.updateBusiness(param.id, param.updateBusinessRequestBody, param.idType,  options).toPromise();
    }

}

import { ObservableConnectTokensApi } from "./ObservableAPI";
import { ConnectTokensApiRequestFactory, ConnectTokensApiResponseProcessor} from "../apis/ConnectTokensApi";

export interface ConnectTokensApiConnectTokenRequest {
    /**
     * 
     * @type CreateConnectTokenRequestBody
     * @memberof ConnectTokensApiconnectToken
     */
    createConnectTokenRequestBody: CreateConnectTokenRequestBody
}

export class ObjectConnectTokensApi {
    private api: ObservableConnectTokensApi

    public constructor(configuration: Configuration, requestFactory?: ConnectTokensApiRequestFactory, responseProcessor?: ConnectTokensApiResponseProcessor) {
        this.api = new ObservableConnectTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a connect token
     * @param param the request object
     */
    public connectTokenWithHttpInfo(param: ConnectTokensApiConnectTokenRequest, options?: Configuration): Promise<HttpInfo<ConnectToken>> {
        return this.api.connectTokenWithHttpInfo(param.createConnectTokenRequestBody,  options).toPromise();
    }

    /**
     * Create a connect token
     * @param param the request object
     */
    public connectToken(param: ConnectTokensApiConnectTokenRequest, options?: Configuration): Promise<ConnectToken> {
        return this.api.connectToken(param.createConnectTokenRequestBody,  options).toPromise();
    }

}

import { ObservableDocumentsApi } from "./ObservableAPI";
import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";

export interface DocumentsApiCreateBusinessDocumentRequest {
    /**
     * Invoices to be uploaded. The file format must be PDF. The limit is 10 files, 10 MB per file.
     * @type Array&lt;HttpFile&gt;
     * @memberof DocumentsApicreateBusinessDocument
     */
    invoices: Array<HttpFile>
    /**
     * The unique identifier for business in our system. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
     * @type string
     * @memberof DocumentsApicreateBusinessDocument
     */
    businessId?: string
    /**
     * The unique identifier for business in your platform. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
     * @type string
     * @memberof DocumentsApicreateBusinessDocument
     */
    platformBusinessId?: string
}

export class ObjectDocumentsApi {
    private api: ObservableDocumentsApi

    public constructor(configuration: Configuration, requestFactory?: DocumentsApiRequestFactory, responseProcessor?: DocumentsApiResponseProcessor) {
        this.api = new ObservableDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload documents for a business
     * @param param the request object
     */
    public createBusinessDocumentWithHttpInfo(param: DocumentsApiCreateBusinessDocumentRequest, options?: Configuration): Promise<HttpInfo<CreateBusinessDocumentsResponse>> {
        return this.api.createBusinessDocumentWithHttpInfo(param.invoices, param.businessId, param.platformBusinessId,  options).toPromise();
    }

    /**
     * Upload documents for a business
     * @param param the request object
     */
    public createBusinessDocument(param: DocumentsApiCreateBusinessDocumentRequest, options?: Configuration): Promise<CreateBusinessDocumentsResponse> {
        return this.api.createBusinessDocument(param.invoices, param.businessId, param.platformBusinessId,  options).toPromise();
    }

}

import { ObservableDrawRequestsApi } from "./ObservableAPI";
import { DrawRequestsApiRequestFactory, DrawRequestsApiResponseProcessor} from "../apis/DrawRequestsApi";

export interface DrawRequestsApiGetDrawRequestRequest {
    /**
     * The Kanmon draw request UUID.
     * @type string
     * @memberof DrawRequestsApigetDrawRequest
     */
    id: string
}

export interface DrawRequestsApiGetDrawRequestsRequest {
    /**
     * A comma delimited list of draw request statuses.
     * @type string
     * @memberof DrawRequestsApigetDrawRequests
     */
    statuses?: string
    /**
     * A comma delimited list of Kanmon’s unique IDs for invoices.
     * @type string
     * @memberof DrawRequestsApigetDrawRequests
     */
    ids?: string
    /**
     * A comma delimited list of your platform’s unique IDs for businesses.
     * @type string
     * @memberof DrawRequestsApigetDrawRequests
     */
    platformBusinessIds?: string
    /**
     * A comma delimited list of Kanmon’s unique IDs for businesses.
     * @type string
     * @memberof DrawRequestsApigetDrawRequests
     */
    businessIds?: string
    /**
     * The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @type number
     * @memberof DrawRequestsApigetDrawRequests
     */
    offset?: number
    /**
     * The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @type number
     * @memberof DrawRequestsApigetDrawRequests
     */
    limit?: number
    /**
     * Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof DrawRequestsApigetDrawRequests
     */
    createdAtStart?: string
    /**
     * Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof DrawRequestsApigetDrawRequests
     */
    createdAtEnd?: string
}

export class ObjectDrawRequestsApi {
    private api: ObservableDrawRequestsApi

    public constructor(configuration: Configuration, requestFactory?: DrawRequestsApiRequestFactory, responseProcessor?: DrawRequestsApiResponseProcessor) {
        this.api = new ObservableDrawRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch a draw request
     * @param param the request object
     */
    public getDrawRequestWithHttpInfo(param: DrawRequestsApiGetDrawRequestRequest, options?: Configuration): Promise<HttpInfo<DrawRequest>> {
        return this.api.getDrawRequestWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Fetch a draw request
     * @param param the request object
     */
    public getDrawRequest(param: DrawRequestsApiGetDrawRequestRequest, options?: Configuration): Promise<DrawRequest> {
        return this.api.getDrawRequest(param.id,  options).toPromise();
    }

    /**
     * Fetch draw requests
     * @param param the request object
     */
    public getDrawRequestsWithHttpInfo(param: DrawRequestsApiGetDrawRequestsRequest = {}, options?: Configuration): Promise<HttpInfo<GetDrawRequestsResponse>> {
        return this.api.getDrawRequestsWithHttpInfo(param.statuses, param.ids, param.platformBusinessIds, param.businessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Fetch draw requests
     * @param param the request object
     */
    public getDrawRequests(param: DrawRequestsApiGetDrawRequestsRequest = {}, options?: Configuration): Promise<GetDrawRequestsResponse> {
        return this.api.getDrawRequests(param.statuses, param.ids, param.platformBusinessIds, param.businessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

}

import { ObservableEmbeddedSessionsApi } from "./ObservableAPI";
import { EmbeddedSessionsApiRequestFactory, EmbeddedSessionsApiResponseProcessor} from "../apis/EmbeddedSessionsApi";

export interface EmbeddedSessionsApiCreateEmbeddedSessionRequest {
    /**
     * 
     * @type CreateSessionTokenRequestBody
     * @memberof EmbeddedSessionsApicreateEmbeddedSession
     */
    createSessionTokenRequestBody: CreateSessionTokenRequestBody
}

export class ObjectEmbeddedSessionsApi {
    private api: ObservableEmbeddedSessionsApi

    public constructor(configuration: Configuration, requestFactory?: EmbeddedSessionsApiRequestFactory, responseProcessor?: EmbeddedSessionsApiResponseProcessor) {
        this.api = new ObservableEmbeddedSessionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an embedded session
     * @param param the request object
     */
    public createEmbeddedSessionWithHttpInfo(param: EmbeddedSessionsApiCreateEmbeddedSessionRequest, options?: Configuration): Promise<HttpInfo<EmbeddedSession>> {
        return this.api.createEmbeddedSessionWithHttpInfo(param.createSessionTokenRequestBody,  options).toPromise();
    }

    /**
     * Create an embedded session
     * @param param the request object
     */
    public createEmbeddedSession(param: EmbeddedSessionsApiCreateEmbeddedSessionRequest, options?: Configuration): Promise<EmbeddedSession> {
        return this.api.createEmbeddedSession(param.createSessionTokenRequestBody,  options).toPromise();
    }

}

import { ObservableInvoicesApi } from "./ObservableAPI";
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";

export interface InvoicesApiGetInvoiceRequest {
    /**
     * Either the Kanmon invoice UUID or your platform’s invoice ID, depending on &#x60;idType&#x60;.
     * @type string
     * @memberof InvoicesApigetInvoice
     */
    id: string
    /**
     * Which ID type to query the invoice by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     * @type &#39;KANMON&#39; | &#39;PLATFORM&#39;
     * @memberof InvoicesApigetInvoice
     */
    idType?: 'KANMON' | 'PLATFORM'
}

export interface InvoicesApiGetInvoicesRequest {
    /**
     * A comma delimited list of invoice statuses.
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    statuses?: string
    /**
     * A comma delimited list of Kanmon’s unique IDs for invoices.
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    ids?: string
    /**
     * A comma delimited list of your platform’s unique IDs for businesses.
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    platformBusinessIds?: string
    /**
     * A comma delimited list of Kanmon’s unique IDs for businesses.
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    businessIds?: string
    /**
     * A comma delimited list of your platforms’s unique IDs for invoices.
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    platformInvoiceIds?: string
    /**
     * The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @type number
     * @memberof InvoicesApigetInvoices
     */
    offset?: number
    /**
     * The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @type number
     * @memberof InvoicesApigetInvoices
     */
    limit?: number
    /**
     * Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    createdAtStart?: string
    /**
     * Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    createdAtEnd?: string
}

export class ObjectInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch an invoice
     * @param param the request object
     */
    public getInvoiceWithHttpInfo(param: InvoicesApiGetInvoiceRequest, options?: Configuration): Promise<HttpInfo<Invoice>> {
        return this.api.getInvoiceWithHttpInfo(param.id, param.idType,  options).toPromise();
    }

    /**
     * Fetch an invoice
     * @param param the request object
     */
    public getInvoice(param: InvoicesApiGetInvoiceRequest, options?: Configuration): Promise<Invoice> {
        return this.api.getInvoice(param.id, param.idType,  options).toPromise();
    }

    /**
     * Fetch invoices
     * @param param the request object
     */
    public getInvoicesWithHttpInfo(param: InvoicesApiGetInvoicesRequest = {}, options?: Configuration): Promise<HttpInfo<GetInvoicesResponse>> {
        return this.api.getInvoicesWithHttpInfo(param.statuses, param.ids, param.platformBusinessIds, param.businessIds, param.platformInvoiceIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Fetch invoices
     * @param param the request object
     */
    public getInvoices(param: InvoicesApiGetInvoicesRequest = {}, options?: Configuration): Promise<GetInvoicesResponse> {
        return this.api.getInvoices(param.statuses, param.ids, param.platformBusinessIds, param.businessIds, param.platformInvoiceIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

}

import { ObservableIssuedProductsApi } from "./ObservableAPI";
import { IssuedProductsApiRequestFactory, IssuedProductsApiResponseProcessor} from "../apis/IssuedProductsApi";

export interface IssuedProductsApiGetAllIssuedProductsRequest {
    /**
     * A comma delimited list of Kanmon’s unique IDs for offers.
     * @type string
     * @memberof IssuedProductsApigetAllIssuedProducts
     */
    ids?: string
    /**
     * A comma delimited list of your platform’s unique IDs for businesses.
     * @type string
     * @memberof IssuedProductsApigetAllIssuedProducts
     */
    platformBusinessIds?: string
    /**
     * A comma delimited list of Kanmon’s unique IDs for businesses.
     * @type string
     * @memberof IssuedProductsApigetAllIssuedProducts
     */
    businessIds?: string
    /**
     * The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @type number
     * @memberof IssuedProductsApigetAllIssuedProducts
     */
    offset?: number
    /**
     * The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @type number
     * @memberof IssuedProductsApigetAllIssuedProducts
     */
    limit?: number
    /**
     * Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof IssuedProductsApigetAllIssuedProducts
     */
    createdAtStart?: string
    /**
     * Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof IssuedProductsApigetAllIssuedProducts
     */
    createdAtEnd?: string
}

export interface IssuedProductsApiGetIssuedProductByIdRequest {
    /**
     * The Kanmon issued product UUID.
     * @type string
     * @memberof IssuedProductsApigetIssuedProductById
     */
    id: string
}

export class ObjectIssuedProductsApi {
    private api: ObservableIssuedProductsApi

    public constructor(configuration: Configuration, requestFactory?: IssuedProductsApiRequestFactory, responseProcessor?: IssuedProductsApiResponseProcessor) {
        this.api = new ObservableIssuedProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch issued products
     * @param param the request object
     */
    public getAllIssuedProductsWithHttpInfo(param: IssuedProductsApiGetAllIssuedProductsRequest = {}, options?: Configuration): Promise<HttpInfo<GetIssuedProductsResponse>> {
        return this.api.getAllIssuedProductsWithHttpInfo(param.ids, param.platformBusinessIds, param.businessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Fetch issued products
     * @param param the request object
     */
    public getAllIssuedProducts(param: IssuedProductsApiGetAllIssuedProductsRequest = {}, options?: Configuration): Promise<GetIssuedProductsResponse> {
        return this.api.getAllIssuedProducts(param.ids, param.platformBusinessIds, param.businessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Fetch an issued product
     * @param param the request object
     */
    public getIssuedProductByIdWithHttpInfo(param: IssuedProductsApiGetIssuedProductByIdRequest, options?: Configuration): Promise<HttpInfo<IssuedProduct>> {
        return this.api.getIssuedProductByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Fetch an issued product
     * @param param the request object
     */
    public getIssuedProductById(param: IssuedProductsApiGetIssuedProductByIdRequest, options?: Configuration): Promise<IssuedProduct> {
        return this.api.getIssuedProductById(param.id,  options).toPromise();
    }

}

import { ObservableOffersApi } from "./ObservableAPI";
import { OffersApiRequestFactory, OffersApiResponseProcessor} from "../apis/OffersApi";

export interface OffersApiGetAllOffersRequest {
    /**
     * A comma delimited list of Kanmon’s unique IDs for offers.
     * @type string
     * @memberof OffersApigetAllOffers
     */
    ids?: string
    /**
     * A comma delimited list of your platform’s unique IDs for businesses.
     * @type string
     * @memberof OffersApigetAllOffers
     */
    platformBusinessIds?: string
    /**
     * A comma delimited list of Kanmon’s unique IDs for businesses.
     * @type string
     * @memberof OffersApigetAllOffers
     */
    businessIds?: string
    /**
     * The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @type number
     * @memberof OffersApigetAllOffers
     */
    offset?: number
    /**
     * The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @type number
     * @memberof OffersApigetAllOffers
     */
    limit?: number
    /**
     * Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof OffersApigetAllOffers
     */
    createdAtStart?: string
    /**
     * Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof OffersApigetAllOffers
     */
    createdAtEnd?: string
}

export interface OffersApiGetOfferByIdRequest {
    /**
     * The Kanmon offer UUID.
     * @type string
     * @memberof OffersApigetOfferById
     */
    id: string
}

export class ObjectOffersApi {
    private api: ObservableOffersApi

    public constructor(configuration: Configuration, requestFactory?: OffersApiRequestFactory, responseProcessor?: OffersApiResponseProcessor) {
        this.api = new ObservableOffersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch offers
     * @param param the request object
     */
    public getAllOffersWithHttpInfo(param: OffersApiGetAllOffersRequest = {}, options?: Configuration): Promise<HttpInfo<GetOffersResponse>> {
        return this.api.getAllOffersWithHttpInfo(param.ids, param.platformBusinessIds, param.businessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Fetch offers
     * @param param the request object
     */
    public getAllOffers(param: OffersApiGetAllOffersRequest = {}, options?: Configuration): Promise<GetOffersResponse> {
        return this.api.getAllOffers(param.ids, param.platformBusinessIds, param.businessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Fetch an offer
     * @param param the request object
     */
    public getOfferByIdWithHttpInfo(param: OffersApiGetOfferByIdRequest, options?: Configuration): Promise<HttpInfo<Offer>> {
        return this.api.getOfferByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Fetch an offer
     * @param param the request object
     */
    public getOfferById(param: OffersApiGetOfferByIdRequest, options?: Configuration): Promise<Offer> {
        return this.api.getOfferById(param.id,  options).toPromise();
    }

}

import { ObservablePaymentsApi } from "./ObservableAPI";
import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor} from "../apis/PaymentsApi";

export interface PaymentsApiGetPaymentByIdRequest {
    /**
     * The Kanmon payment order UUID.
     * @type string
     * @memberof PaymentsApigetPaymentById
     */
    id: string
}

export interface PaymentsApiGetPaymentScheduleForAIssuedProductRequest {
    /**
     * The Kanmon issued product UUID.
     * @type string
     * @memberof PaymentsApigetPaymentScheduleForAIssuedProduct
     */
    id: string
    /**
     * A comma delimited list of Kanmon’s unique draw request IDs.
     * @type string
     * @memberof PaymentsApigetPaymentScheduleForAIssuedProduct
     */
    drawRequestIds?: string
    /**
     * A comma delimited list of Kanmon’s unique IDs for invoices.
     * @type string
     * @memberof PaymentsApigetPaymentScheduleForAIssuedProduct
     */
    invoiceIds?: string
    /**
     * A comma delimited list of your platform’s unique IDs for invoices.
     * @type string
     * @memberof PaymentsApigetPaymentScheduleForAIssuedProduct
     */
    platformInvoiceIds?: string
    /**
     * The direction of the payment.
     * @type &#39;DISBURSEMENT&#39; | &#39;REPAYMENT&#39;
     * @memberof PaymentsApigetPaymentScheduleForAIssuedProduct
     */
    direction?: 'DISBURSEMENT' | 'REPAYMENT'
    /**
     * The status of the payment.
     * @type PaymentOrderStatus
     * @memberof PaymentsApigetPaymentScheduleForAIssuedProduct
     */
    status?: PaymentOrderStatus
    /**
     * The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @type number
     * @memberof PaymentsApigetPaymentScheduleForAIssuedProduct
     */
    offset?: number
    /**
     * The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @type number
     * @memberof PaymentsApigetPaymentScheduleForAIssuedProduct
     */
    limit?: number
}

export class ObjectPaymentsApi {
    private api: ObservablePaymentsApi

    public constructor(configuration: Configuration, requestFactory?: PaymentsApiRequestFactory, responseProcessor?: PaymentsApiResponseProcessor) {
        this.api = new ObservablePaymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch a payment
     * @param param the request object
     */
    public getPaymentByIdWithHttpInfo(param: PaymentsApiGetPaymentByIdRequest, options?: Configuration): Promise<HttpInfo<PaymentOrder>> {
        return this.api.getPaymentByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Fetch a payment
     * @param param the request object
     */
    public getPaymentById(param: PaymentsApiGetPaymentByIdRequest, options?: Configuration): Promise<PaymentOrder> {
        return this.api.getPaymentById(param.id,  options).toPromise();
    }

    /**
     * Fetch payment schedule for an issued product
     * @param param the request object
     */
    public getPaymentScheduleForAIssuedProductWithHttpInfo(param: PaymentsApiGetPaymentScheduleForAIssuedProductRequest, options?: Configuration): Promise<HttpInfo<GetPaymentScheduleResponse>> {
        return this.api.getPaymentScheduleForAIssuedProductWithHttpInfo(param.id, param.drawRequestIds, param.invoiceIds, param.platformInvoiceIds, param.direction, param.status, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Fetch payment schedule for an issued product
     * @param param the request object
     */
    public getPaymentScheduleForAIssuedProduct(param: PaymentsApiGetPaymentScheduleForAIssuedProductRequest, options?: Configuration): Promise<GetPaymentScheduleResponse> {
        return this.api.getPaymentScheduleForAIssuedProduct(param.id, param.drawRequestIds, param.invoiceIds, param.platformInvoiceIds, param.direction, param.status, param.offset, param.limit,  options).toPromise();
    }

}

import { ObservablePrequalificationsApi } from "./ObservableAPI";
import { PrequalificationsApiRequestFactory, PrequalificationsApiResponseProcessor} from "../apis/PrequalificationsApi";

export interface PrequalificationsApiGetPrequalifiedBusinessesRequest {
    /**
     * A comma delimited list of your platform’s unique IDs for businesses.
     * @type string
     * @memberof PrequalificationsApigetPrequalifiedBusinesses
     */
    platformBusinessIds?: string
    /**
     * The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @type number
     * @memberof PrequalificationsApigetPrequalifiedBusinesses
     */
    offset?: number
    /**
     * The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @type number
     * @memberof PrequalificationsApigetPrequalifiedBusinesses
     */
    limit?: number
    /**
     * Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof PrequalificationsApigetPrequalifiedBusinesses
     */
    createdAtStart?: string
    /**
     * Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof PrequalificationsApigetPrequalifiedBusinesses
     */
    createdAtEnd?: string
}

export class ObjectPrequalificationsApi {
    private api: ObservablePrequalificationsApi

    public constructor(configuration: Configuration, requestFactory?: PrequalificationsApiRequestFactory, responseProcessor?: PrequalificationsApiResponseProcessor) {
        this.api = new ObservablePrequalificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch business prequalifications
     * @param param the request object
     */
    public getPrequalifiedBusinessesWithHttpInfo(param: PrequalificationsApiGetPrequalifiedBusinessesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<GetPrequalificationsResponse>>> {
        return this.api.getPrequalifiedBusinessesWithHttpInfo(param.platformBusinessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Fetch business prequalifications
     * @param param the request object
     */
    public getPrequalifiedBusinesses(param: PrequalificationsApiGetPrequalifiedBusinessesRequest = {}, options?: Configuration): Promise<Array<GetPrequalificationsResponse>> {
        return this.api.getPrequalifiedBusinesses(param.platformBusinessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiCreateUserRequest {
    /**
     * 
     * @type CreateUserRequestBody
     * @memberof UsersApicreateUser
     */
    createUserRequestBody: CreateUserRequestBody
}

export interface UsersApiGetUserRequest {
    /**
     * Either the Kanmon user UUID or your platform’s user ID, depending on &#x60;idType&#x60;.
     * @type string
     * @memberof UsersApigetUser
     */
    id: string
    /**
     * Which ID type to query the user by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     * @type &#39;KANMON&#39; | &#39;PLATFORM&#39;
     * @memberof UsersApigetUser
     */
    idType?: 'KANMON' | 'PLATFORM'
}

export interface UsersApiGetUsersRequest {
    /**
     * A comma delimited list of Kanmon’s unique IDs for users.
     * @type string
     * @memberof UsersApigetUsers
     */
    ids?: string
    /**
     * A comma delimited list of your platform’s unique IDs for users.
     * @type string
     * @memberof UsersApigetUsers
     */
    platformUserIds?: string
    /**
     * A comma delimited list of your platform’s unique business IDs for users.
     * @type string
     * @memberof UsersApigetUsers
     */
    platformBusinessIds?: string
    /**
     * A comma delimited list of your Kanmon’s unique business IDs for users.
     * @type string
     * @memberof UsersApigetUsers
     */
    businessIds?: string
    /**
     * The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @type number
     * @memberof UsersApigetUsers
     */
    offset?: number
    /**
     * The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @type number
     * @memberof UsersApigetUsers
     */
    limit?: number
    /**
     * Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof UsersApigetUsers
     */
    createdAtStart?: string
    /**
     * Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     * @type string
     * @memberof UsersApigetUsers
     */
    createdAtEnd?: string
}

export interface UsersApiMergeUserIntoBusinesRequest {
    /**
     * 
     * @type MergeUsersRequestBody
     * @memberof UsersApimergeUserIntoBusines
     */
    mergeUsersRequestBody: MergeUsersRequestBody
}

export interface UsersApiUpdateUserRequest {
    /**
     * Either the Kanmon user UUID or your platform’s user ID, depending on &#x60;idType&#x60;.
     * @type string
     * @memberof UsersApiupdateUser
     */
    id: string
    /**
     * 
     * @type UpdateUserRequestBody
     * @memberof UsersApiupdateUser
     */
    updateUserRequestBody: UpdateUserRequestBody
    /**
     * Which ID type to query the user by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     * @type &#39;KANMON&#39; | &#39;PLATFORM&#39;
     * @memberof UsersApiupdateUser
     */
    idType?: 'KANMON' | 'PLATFORM'
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a user
     * @param param the request object
     */
    public createUserWithHttpInfo(param: UsersApiCreateUserRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.createUserWithHttpInfo(param.createUserRequestBody,  options).toPromise();
    }

    /**
     * Create a user
     * @param param the request object
     */
    public createUser(param: UsersApiCreateUserRequest, options?: Configuration): Promise<User> {
        return this.api.createUser(param.createUserRequestBody,  options).toPromise();
    }

    /**
     * Fetch a user
     * @param param the request object
     */
    public getUserWithHttpInfo(param: UsersApiGetUserRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.getUserWithHttpInfo(param.id, param.idType,  options).toPromise();
    }

    /**
     * Fetch a user
     * @param param the request object
     */
    public getUser(param: UsersApiGetUserRequest, options?: Configuration): Promise<User> {
        return this.api.getUser(param.id, param.idType,  options).toPromise();
    }

    /**
     * Fetch users
     * @param param the request object
     */
    public getUsersWithHttpInfo(param: UsersApiGetUsersRequest = {}, options?: Configuration): Promise<HttpInfo<GetUsersResponse>> {
        return this.api.getUsersWithHttpInfo(param.ids, param.platformUserIds, param.platformBusinessIds, param.businessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Fetch users
     * @param param the request object
     */
    public getUsers(param: UsersApiGetUsersRequest = {}, options?: Configuration): Promise<GetUsersResponse> {
        return this.api.getUsers(param.ids, param.platformUserIds, param.platformBusinessIds, param.businessIds, param.offset, param.limit, param.createdAtStart, param.createdAtEnd,  options).toPromise();
    }

    /**
     * Users from the source business will be moved into the target business. This will only work if the source business has not started onboarding yet. After the merge, the source business will be deleted.
     * Merge users from a source business into a target business
     * @param param the request object
     */
    public mergeUserIntoBusinesWithHttpInfo(param: UsersApiMergeUserIntoBusinesRequest, options?: Configuration): Promise<HttpInfo<MergeUsersResponseBody>> {
        return this.api.mergeUserIntoBusinesWithHttpInfo(param.mergeUsersRequestBody,  options).toPromise();
    }

    /**
     * Users from the source business will be moved into the target business. This will only work if the source business has not started onboarding yet. After the merge, the source business will be deleted.
     * Merge users from a source business into a target business
     * @param param the request object
     */
    public mergeUserIntoBusines(param: UsersApiMergeUserIntoBusinesRequest, options?: Configuration): Promise<MergeUsersResponseBody> {
        return this.api.mergeUserIntoBusines(param.mergeUsersRequestBody,  options).toPromise();
    }

    /**
     * Update a user
     * @param param the request object
     */
    public updateUserWithHttpInfo(param: UsersApiUpdateUserRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.updateUserWithHttpInfo(param.id, param.updateUserRequestBody, param.idType,  options).toPromise();
    }

    /**
     * Update a user
     * @param param the request object
     */
    public updateUser(param: UsersApiUpdateUserRequest, options?: Configuration): Promise<User> {
        return this.api.updateUser(param.id, param.updateUserRequestBody, param.idType,  options).toPromise();
    }

}
