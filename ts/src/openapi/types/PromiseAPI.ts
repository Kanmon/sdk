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
import { ObservableBankAccountsApi } from './ObservableAPI';

import { BankAccountsApiRequestFactory, BankAccountsApiResponseProcessor} from "../apis/BankAccountsApi";
export class PromiseBankAccountsApi {
    private api: ObservableBankAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BankAccountsApiRequestFactory,
        responseProcessor?: BankAccountsApiResponseProcessor
    ) {
        this.api = new ObservableBankAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.       Please contact Kanmon to enable access to bank account APIs.
     * Create a business bank account
     * @param createBusinessBankAccountRequestBody 
     */
    public createBusinessBankAccountWithHttpInfo(createBusinessBankAccountRequestBody: CreateBusinessBankAccountRequestBody, _options?: Configuration): Promise<HttpInfo<BusinessBankAccount>> {
        const result = this.api.createBusinessBankAccountWithHttpInfo(createBusinessBankAccountRequestBody, _options);
        return result.toPromise();
    }

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.       Please contact Kanmon to enable access to bank account APIs.
     * Create a business bank account
     * @param createBusinessBankAccountRequestBody 
     */
    public createBusinessBankAccount(createBusinessBankAccountRequestBody: CreateBusinessBankAccountRequestBody, _options?: Configuration): Promise<BusinessBankAccount> {
        const result = this.api.createBusinessBankAccount(createBusinessBankAccountRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Please contact Kanmon to enable access to bank account APIs.
     * Fetch a business bank account
     * @param id Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getBusinessBankAccountWithHttpInfo(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<HttpInfo<BusinessBankAccount>> {
        const result = this.api.getBusinessBankAccountWithHttpInfo(id, idType, _options);
        return result.toPromise();
    }

    /**
     * Please contact Kanmon to enable access to bank account APIs.
     * Fetch a business bank account
     * @param id Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getBusinessBankAccount(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<BusinessBankAccount> {
        const result = this.api.getBusinessBankAccount(id, idType, _options);
        return result.toPromise();
    }

    /**
     * Please contact Kanmon to enable access to bank account APIs.
     * Fetch business bank accounts
     * @param ids A comma delimited list of Kanmon’s unique IDs for bank accounts.
     * @param platformBankAccountIds A comma delimited list of your platform’s unique IDs for bank accounts.
     * @param platformBusinessIds A comma delimited list of your platform’s unique business IDs for bannk accounts.
     * @param businessIds A comma delimited list of your Kanmon’s unique business IDs for bannk accounts.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getBusinessBankAccountsWithHttpInfo(ids?: string, platformBankAccountIds?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<HttpInfo<GetBusinessBankAccountsResponse>> {
        const result = this.api.getBusinessBankAccountsWithHttpInfo(ids, platformBankAccountIds, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Please contact Kanmon to enable access to bank account APIs.
     * Fetch business bank accounts
     * @param ids A comma delimited list of Kanmon’s unique IDs for bank accounts.
     * @param platformBankAccountIds A comma delimited list of your platform’s unique IDs for bank accounts.
     * @param platformBusinessIds A comma delimited list of your platform’s unique business IDs for bannk accounts.
     * @param businessIds A comma delimited list of your Kanmon’s unique business IDs for bannk accounts.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getBusinessBankAccounts(ids?: string, platformBankAccountIds?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<GetBusinessBankAccountsResponse> {
        const result = this.api.getBusinessBankAccounts(ids, platformBankAccountIds, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.         Please contact Kanmon to enable access to bank account APIs.
     * Update a business bank account
     * @param id Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;.
     * @param updateBusinessAccountRequestBody 
     * @param idType Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public updateBusinessBankAccountWithHttpInfo(id: string, updateBusinessAccountRequestBody: UpdateBusinessAccountRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<HttpInfo<BusinessBankAccount>> {
        const result = this.api.updateBusinessBankAccountWithHttpInfo(id, updateBusinessAccountRequestBody, idType, _options);
        return result.toPromise();
    }

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.         Please contact Kanmon to enable access to bank account APIs.
     * Update a business bank account
     * @param id Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;.
     * @param updateBusinessAccountRequestBody 
     * @param idType Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public updateBusinessBankAccount(id: string, updateBusinessAccountRequestBody: UpdateBusinessAccountRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<BusinessBankAccount> {
        const result = this.api.updateBusinessBankAccount(id, updateBusinessAccountRequestBody, idType, _options);
        return result.toPromise();
    }


}



import { ObservableBusinessesApi } from './ObservableAPI';

import { BusinessesApiRequestFactory, BusinessesApiResponseProcessor} from "../apis/BusinessesApi";
export class PromiseBusinessesApi {
    private api: ObservableBusinessesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BusinessesApiRequestFactory,
        responseProcessor?: BusinessesApiResponseProcessor
    ) {
        this.api = new ObservableBusinessesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a business
     * @param createBusinessRequestBody 
     */
    public createBusinessWithHttpInfo(createBusinessRequestBody: CreateBusinessRequestBody, _options?: Configuration): Promise<HttpInfo<Business>> {
        const result = this.api.createBusinessWithHttpInfo(createBusinessRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Create a business
     * @param createBusinessRequestBody 
     */
    public createBusiness(createBusinessRequestBody: CreateBusinessRequestBody, _options?: Configuration): Promise<Business> {
        const result = this.api.createBusiness(createBusinessRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Fetch a business
     * @param id Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getBusinessWithHttpInfo(id: any, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<HttpInfo<Business>> {
        const result = this.api.getBusinessWithHttpInfo(id, idType, _options);
        return result.toPromise();
    }

    /**
     * Fetch a business
     * @param id Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getBusiness(id: any, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<Business> {
        const result = this.api.getBusiness(id, idType, _options);
        return result.toPromise();
    }

    /**
     * Fetch activity logs for a business
     * @param id Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getBusinessActivityLogWithHttpInfo(id: any, idType?: 'KANMON' | 'PLATFORM', offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<HttpInfo<GetActivityLogsResponse>> {
        const result = this.api.getBusinessActivityLogWithHttpInfo(id, idType, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Fetch activity logs for a business
     * @param id Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getBusinessActivityLog(id: any, idType?: 'KANMON' | 'PLATFORM', offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<GetActivityLogsResponse> {
        const result = this.api.getBusinessActivityLog(id, idType, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Fetch businesses
     * @param ids A comma delimited list of Kanmon’s unique IDs for businesses.
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getBusinessesWithHttpInfo(ids?: string, platformBusinessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<HttpInfo<GetBusinessesResponse>> {
        const result = this.api.getBusinessesWithHttpInfo(ids, platformBusinessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Fetch businesses
     * @param ids A comma delimited list of Kanmon’s unique IDs for businesses.
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getBusinesses(ids?: string, platformBusinessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<GetBusinessesResponse> {
        const result = this.api.getBusinesses(ids, platformBusinessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Update a business
     * @param id Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @param updateBusinessRequestBody 
     * @param idType Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public updateBusinessWithHttpInfo(id: any, updateBusinessRequestBody: UpdateBusinessRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<HttpInfo<Business>> {
        const result = this.api.updateBusinessWithHttpInfo(id, updateBusinessRequestBody, idType, _options);
        return result.toPromise();
    }

    /**
     * Update a business
     * @param id Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @param updateBusinessRequestBody 
     * @param idType Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public updateBusiness(id: any, updateBusinessRequestBody: UpdateBusinessRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<Business> {
        const result = this.api.updateBusiness(id, updateBusinessRequestBody, idType, _options);
        return result.toPromise();
    }


}



import { ObservableConnectTokensApi } from './ObservableAPI';

import { ConnectTokensApiRequestFactory, ConnectTokensApiResponseProcessor} from "../apis/ConnectTokensApi";
export class PromiseConnectTokensApi {
    private api: ObservableConnectTokensApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConnectTokensApiRequestFactory,
        responseProcessor?: ConnectTokensApiResponseProcessor
    ) {
        this.api = new ObservableConnectTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a connect token
     * @param createConnectTokenRequestBody 
     */
    public connectTokenWithHttpInfo(createConnectTokenRequestBody: CreateConnectTokenRequestBody, _options?: Configuration): Promise<HttpInfo<ConnectToken>> {
        const result = this.api.connectTokenWithHttpInfo(createConnectTokenRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Create a connect token
     * @param createConnectTokenRequestBody 
     */
    public connectToken(createConnectTokenRequestBody: CreateConnectTokenRequestBody, _options?: Configuration): Promise<ConnectToken> {
        const result = this.api.connectToken(createConnectTokenRequestBody, _options);
        return result.toPromise();
    }


}



import { ObservableDocumentsApi } from './ObservableAPI';

import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";
export class PromiseDocumentsApi {
    private api: ObservableDocumentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentsApiRequestFactory,
        responseProcessor?: DocumentsApiResponseProcessor
    ) {
        this.api = new ObservableDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload documents for a business
     * @param invoices Invoices to be uploaded. The file format must be PDF. The limit is 10 files, 10 MB per file.
     * @param businessId The unique identifier for business in our system. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
     * @param platformBusinessId The unique identifier for business in your platform. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
     */
    public createBusinessDocumentWithHttpInfo(invoices: Array<HttpFile>, businessId?: string, platformBusinessId?: string, _options?: Configuration): Promise<HttpInfo<CreateBusinessDocumentsResponse>> {
        const result = this.api.createBusinessDocumentWithHttpInfo(invoices, businessId, platformBusinessId, _options);
        return result.toPromise();
    }

    /**
     * Upload documents for a business
     * @param invoices Invoices to be uploaded. The file format must be PDF. The limit is 10 files, 10 MB per file.
     * @param businessId The unique identifier for business in our system. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
     * @param platformBusinessId The unique identifier for business in your platform. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
     */
    public createBusinessDocument(invoices: Array<HttpFile>, businessId?: string, platformBusinessId?: string, _options?: Configuration): Promise<CreateBusinessDocumentsResponse> {
        const result = this.api.createBusinessDocument(invoices, businessId, platformBusinessId, _options);
        return result.toPromise();
    }


}



import { ObservableDrawRequestsApi } from './ObservableAPI';

import { DrawRequestsApiRequestFactory, DrawRequestsApiResponseProcessor} from "../apis/DrawRequestsApi";
export class PromiseDrawRequestsApi {
    private api: ObservableDrawRequestsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DrawRequestsApiRequestFactory,
        responseProcessor?: DrawRequestsApiResponseProcessor
    ) {
        this.api = new ObservableDrawRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch a draw request
     * @param id The Kanmon draw request UUID.
     */
    public getDrawRequestWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<DrawRequest>> {
        const result = this.api.getDrawRequestWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Fetch a draw request
     * @param id The Kanmon draw request UUID.
     */
    public getDrawRequest(id: string, _options?: Configuration): Promise<DrawRequest> {
        const result = this.api.getDrawRequest(id, _options);
        return result.toPromise();
    }

    /**
     * Fetch draw requests
     * @param statuses A comma delimited list of draw request statuses.
     * @param ids A comma delimited list of Kanmon’s unique IDs for invoices.
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param businessIds A comma delimited list of Kanmon’s unique IDs for businesses.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getDrawRequestsWithHttpInfo(statuses?: string, ids?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<HttpInfo<GetDrawRequestsResponse>> {
        const result = this.api.getDrawRequestsWithHttpInfo(statuses, ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Fetch draw requests
     * @param statuses A comma delimited list of draw request statuses.
     * @param ids A comma delimited list of Kanmon’s unique IDs for invoices.
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param businessIds A comma delimited list of Kanmon’s unique IDs for businesses.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getDrawRequests(statuses?: string, ids?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<GetDrawRequestsResponse> {
        const result = this.api.getDrawRequests(statuses, ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }


}



import { ObservableEmbeddedSessionsApi } from './ObservableAPI';

import { EmbeddedSessionsApiRequestFactory, EmbeddedSessionsApiResponseProcessor} from "../apis/EmbeddedSessionsApi";
export class PromiseEmbeddedSessionsApi {
    private api: ObservableEmbeddedSessionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmbeddedSessionsApiRequestFactory,
        responseProcessor?: EmbeddedSessionsApiResponseProcessor
    ) {
        this.api = new ObservableEmbeddedSessionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an embedded session
     * @param createSessionTokenRequestBody 
     */
    public createEmbeddedSessionWithHttpInfo(createSessionTokenRequestBody: CreateSessionTokenRequestBody, _options?: Configuration): Promise<HttpInfo<EmbeddedSession>> {
        const result = this.api.createEmbeddedSessionWithHttpInfo(createSessionTokenRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Create an embedded session
     * @param createSessionTokenRequestBody 
     */
    public createEmbeddedSession(createSessionTokenRequestBody: CreateSessionTokenRequestBody, _options?: Configuration): Promise<EmbeddedSession> {
        const result = this.api.createEmbeddedSession(createSessionTokenRequestBody, _options);
        return result.toPromise();
    }


}



import { ObservableInvoicesApi } from './ObservableAPI';

import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";
export class PromiseInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoicesApiRequestFactory,
        responseProcessor?: InvoicesApiResponseProcessor
    ) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch an invoice
     * @param id Either the Kanmon invoice UUID or your platform’s invoice ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the invoice by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getInvoiceWithHttpInfo(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<HttpInfo<Invoice>> {
        const result = this.api.getInvoiceWithHttpInfo(id, idType, _options);
        return result.toPromise();
    }

    /**
     * Fetch an invoice
     * @param id Either the Kanmon invoice UUID or your platform’s invoice ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the invoice by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getInvoice(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<Invoice> {
        const result = this.api.getInvoice(id, idType, _options);
        return result.toPromise();
    }

    /**
     * Fetch invoices
     * @param statuses A comma delimited list of invoice statuses.
     * @param ids A comma delimited list of Kanmon’s unique IDs for invoices.
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param businessIds A comma delimited list of Kanmon’s unique IDs for businesses.
     * @param platformInvoiceIds A comma delimited list of your platforms’s unique IDs for invoices.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getInvoicesWithHttpInfo(statuses?: string, ids?: string, platformBusinessIds?: string, businessIds?: string, platformInvoiceIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<HttpInfo<GetInvoicesResponse>> {
        const result = this.api.getInvoicesWithHttpInfo(statuses, ids, platformBusinessIds, businessIds, platformInvoiceIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Fetch invoices
     * @param statuses A comma delimited list of invoice statuses.
     * @param ids A comma delimited list of Kanmon’s unique IDs for invoices.
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param businessIds A comma delimited list of Kanmon’s unique IDs for businesses.
     * @param platformInvoiceIds A comma delimited list of your platforms’s unique IDs for invoices.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getInvoices(statuses?: string, ids?: string, platformBusinessIds?: string, businessIds?: string, platformInvoiceIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<GetInvoicesResponse> {
        const result = this.api.getInvoices(statuses, ids, platformBusinessIds, businessIds, platformInvoiceIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }


}



import { ObservableIssuedProductsApi } from './ObservableAPI';

import { IssuedProductsApiRequestFactory, IssuedProductsApiResponseProcessor} from "../apis/IssuedProductsApi";
export class PromiseIssuedProductsApi {
    private api: ObservableIssuedProductsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IssuedProductsApiRequestFactory,
        responseProcessor?: IssuedProductsApiResponseProcessor
    ) {
        this.api = new ObservableIssuedProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch issued products
     * @param ids A comma delimited list of Kanmon’s unique IDs for offers.
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param businessIds A comma delimited list of Kanmon’s unique IDs for businesses.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getAllIssuedProductsWithHttpInfo(ids?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<HttpInfo<GetIssuedProductsResponse>> {
        const result = this.api.getAllIssuedProductsWithHttpInfo(ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Fetch issued products
     * @param ids A comma delimited list of Kanmon’s unique IDs for offers.
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param businessIds A comma delimited list of Kanmon’s unique IDs for businesses.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getAllIssuedProducts(ids?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<GetIssuedProductsResponse> {
        const result = this.api.getAllIssuedProducts(ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Fetch an issued product
     * @param id The Kanmon issued product UUID.
     */
    public getIssuedProductByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<IssuedProduct>> {
        const result = this.api.getIssuedProductByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Fetch an issued product
     * @param id The Kanmon issued product UUID.
     */
    public getIssuedProductById(id: string, _options?: Configuration): Promise<IssuedProduct> {
        const result = this.api.getIssuedProductById(id, _options);
        return result.toPromise();
    }


}



import { ObservableOffersApi } from './ObservableAPI';

import { OffersApiRequestFactory, OffersApiResponseProcessor} from "../apis/OffersApi";
export class PromiseOffersApi {
    private api: ObservableOffersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OffersApiRequestFactory,
        responseProcessor?: OffersApiResponseProcessor
    ) {
        this.api = new ObservableOffersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch offers
     * @param ids A comma delimited list of Kanmon’s unique IDs for offers.
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param businessIds A comma delimited list of Kanmon’s unique IDs for businesses.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getAllOffersWithHttpInfo(ids?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<HttpInfo<GetOffersResponse>> {
        const result = this.api.getAllOffersWithHttpInfo(ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Fetch offers
     * @param ids A comma delimited list of Kanmon’s unique IDs for offers.
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param businessIds A comma delimited list of Kanmon’s unique IDs for businesses.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getAllOffers(ids?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<GetOffersResponse> {
        const result = this.api.getAllOffers(ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Fetch an offer
     * @param id The Kanmon offer UUID.
     */
    public getOfferByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<Offer>> {
        const result = this.api.getOfferByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Fetch an offer
     * @param id The Kanmon offer UUID.
     */
    public getOfferById(id: string, _options?: Configuration): Promise<Offer> {
        const result = this.api.getOfferById(id, _options);
        return result.toPromise();
    }


}



import { ObservablePaymentsApi } from './ObservableAPI';

import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor} from "../apis/PaymentsApi";
export class PromisePaymentsApi {
    private api: ObservablePaymentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentsApiRequestFactory,
        responseProcessor?: PaymentsApiResponseProcessor
    ) {
        this.api = new ObservablePaymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch a payment
     * @param id The Kanmon payment order UUID.
     */
    public getPaymentByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<PaymentOrder>> {
        const result = this.api.getPaymentByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Fetch a payment
     * @param id The Kanmon payment order UUID.
     */
    public getPaymentById(id: string, _options?: Configuration): Promise<PaymentOrder> {
        const result = this.api.getPaymentById(id, _options);
        return result.toPromise();
    }

    /**
     * Fetch payment schedule for an issued product
     * @param id The Kanmon issued product UUID.
     * @param drawRequestIds A comma delimited list of Kanmon’s unique draw request IDs.
     * @param invoiceIds A comma delimited list of Kanmon’s unique IDs for invoices.
     * @param platformInvoiceIds A comma delimited list of your platform’s unique IDs for invoices.
     * @param direction The direction of the payment.
     * @param status The status of the payment.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     */
    public getPaymentScheduleForAIssuedProductWithHttpInfo(id: string, drawRequestIds?: string, invoiceIds?: string, platformInvoiceIds?: string, direction?: 'DISBURSEMENT' | 'REPAYMENT', status?: PaymentOrderStatus, offset?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<GetPaymentScheduleResponse>> {
        const result = this.api.getPaymentScheduleForAIssuedProductWithHttpInfo(id, drawRequestIds, invoiceIds, platformInvoiceIds, direction, status, offset, limit, _options);
        return result.toPromise();
    }

    /**
     * Fetch payment schedule for an issued product
     * @param id The Kanmon issued product UUID.
     * @param drawRequestIds A comma delimited list of Kanmon’s unique draw request IDs.
     * @param invoiceIds A comma delimited list of Kanmon’s unique IDs for invoices.
     * @param platformInvoiceIds A comma delimited list of your platform’s unique IDs for invoices.
     * @param direction The direction of the payment.
     * @param status The status of the payment.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     */
    public getPaymentScheduleForAIssuedProduct(id: string, drawRequestIds?: string, invoiceIds?: string, platformInvoiceIds?: string, direction?: 'DISBURSEMENT' | 'REPAYMENT', status?: PaymentOrderStatus, offset?: number, limit?: number, _options?: Configuration): Promise<GetPaymentScheduleResponse> {
        const result = this.api.getPaymentScheduleForAIssuedProduct(id, drawRequestIds, invoiceIds, platformInvoiceIds, direction, status, offset, limit, _options);
        return result.toPromise();
    }


}



import { ObservablePrequalificationsApi } from './ObservableAPI';

import { PrequalificationsApiRequestFactory, PrequalificationsApiResponseProcessor} from "../apis/PrequalificationsApi";
export class PromisePrequalificationsApi {
    private api: ObservablePrequalificationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PrequalificationsApiRequestFactory,
        responseProcessor?: PrequalificationsApiResponseProcessor
    ) {
        this.api = new ObservablePrequalificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch business prequalifications
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getPrequalifiedBusinessesWithHttpInfo(platformBusinessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<HttpInfo<Array<GetPrequalificationsResponse>>> {
        const result = this.api.getPrequalifiedBusinessesWithHttpInfo(platformBusinessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Fetch business prequalifications
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getPrequalifiedBusinesses(platformBusinessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<Array<GetPrequalificationsResponse>> {
        const result = this.api.getPrequalifiedBusinesses(platformBusinessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a user
     * @param createUserRequestBody 
     */
    public createUserWithHttpInfo(createUserRequestBody: CreateUserRequestBody, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.createUserWithHttpInfo(createUserRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Create a user
     * @param createUserRequestBody 
     */
    public createUser(createUserRequestBody: CreateUserRequestBody, _options?: Configuration): Promise<User> {
        const result = this.api.createUser(createUserRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Fetch a user
     * @param id Either the Kanmon user UUID or your platform’s user ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the user by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getUserWithHttpInfo(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.getUserWithHttpInfo(id, idType, _options);
        return result.toPromise();
    }

    /**
     * Fetch a user
     * @param id Either the Kanmon user UUID or your platform’s user ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the user by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getUser(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<User> {
        const result = this.api.getUser(id, idType, _options);
        return result.toPromise();
    }

    /**
     * Fetch users
     * @param ids A comma delimited list of Kanmon’s unique IDs for users.
     * @param platformUserIds A comma delimited list of your platform’s unique IDs for users.
     * @param platformBusinessIds A comma delimited list of your platform’s unique business IDs for users.
     * @param businessIds A comma delimited list of your Kanmon’s unique business IDs for users.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getUsersWithHttpInfo(ids?: string, platformUserIds?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<HttpInfo<GetUsersResponse>> {
        const result = this.api.getUsersWithHttpInfo(ids, platformUserIds, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Fetch users
     * @param ids A comma delimited list of Kanmon’s unique IDs for users.
     * @param platformUserIds A comma delimited list of your platform’s unique IDs for users.
     * @param platformBusinessIds A comma delimited list of your platform’s unique business IDs for users.
     * @param businessIds A comma delimited list of your Kanmon’s unique business IDs for users.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getUsers(ids?: string, platformUserIds?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<GetUsersResponse> {
        const result = this.api.getUsers(ids, platformUserIds, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);
        return result.toPromise();
    }

    /**
     * Users from the source business will be moved into the target business. This will only work if the source business has not started onboarding yet. After the merge, the source business will be deleted.
     * Merge users from a source business into a target business
     * @param mergeUsersRequestBody 
     */
    public mergeUserIntoBusinesWithHttpInfo(mergeUsersRequestBody: MergeUsersRequestBody, _options?: Configuration): Promise<HttpInfo<MergeUsersResponseBody>> {
        const result = this.api.mergeUserIntoBusinesWithHttpInfo(mergeUsersRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Users from the source business will be moved into the target business. This will only work if the source business has not started onboarding yet. After the merge, the source business will be deleted.
     * Merge users from a source business into a target business
     * @param mergeUsersRequestBody 
     */
    public mergeUserIntoBusines(mergeUsersRequestBody: MergeUsersRequestBody, _options?: Configuration): Promise<MergeUsersResponseBody> {
        const result = this.api.mergeUserIntoBusines(mergeUsersRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Update a user
     * @param id Either the Kanmon user UUID or your platform’s user ID, depending on &#x60;idType&#x60;.
     * @param updateUserRequestBody 
     * @param idType Which ID type to query the user by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public updateUserWithHttpInfo(id: string, updateUserRequestBody: UpdateUserRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.updateUserWithHttpInfo(id, updateUserRequestBody, idType, _options);
        return result.toPromise();
    }

    /**
     * Update a user
     * @param id Either the Kanmon user UUID or your platform’s user ID, depending on &#x60;idType&#x60;.
     * @param updateUserRequestBody 
     * @param idType Which ID type to query the user by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public updateUser(id: string, updateUserRequestBody: UpdateUserRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<User> {
        const result = this.api.updateUser(id, updateUserRequestBody, idType, _options);
        return result.toPromise();
    }


}



