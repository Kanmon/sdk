import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { BankAccountsApiRequestFactory, BankAccountsApiResponseProcessor} from "../apis/BankAccountsApi";
export class ObservableBankAccountsApi {
    private requestFactory: BankAccountsApiRequestFactory;
    private responseProcessor: BankAccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BankAccountsApiRequestFactory,
        responseProcessor?: BankAccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BankAccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BankAccountsApiResponseProcessor();
    }

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.       Please contact Kanmon to enable access to bank account APIs.
     * Create a business bank account
     * @param createBusinessBankAccountRequestBody 
     */
    public createBusinessBankAccountWithHttpInfo(createBusinessBankAccountRequestBody: CreateBusinessBankAccountRequestBody, _options?: Configuration): Observable<HttpInfo<BusinessBankAccount>> {
        const requestContextPromise = this.requestFactory.createBusinessBankAccount(createBusinessBankAccountRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBusinessBankAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.       Please contact Kanmon to enable access to bank account APIs.
     * Create a business bank account
     * @param createBusinessBankAccountRequestBody 
     */
    public createBusinessBankAccount(createBusinessBankAccountRequestBody: CreateBusinessBankAccountRequestBody, _options?: Configuration): Observable<BusinessBankAccount> {
        return this.createBusinessBankAccountWithHttpInfo(createBusinessBankAccountRequestBody, _options).pipe(map((apiResponse: HttpInfo<BusinessBankAccount>) => apiResponse.data));
    }

    /**
     * Please contact Kanmon to enable access to bank account APIs.
     * Fetch a business bank account
     * @param id Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getBusinessBankAccountWithHttpInfo(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<HttpInfo<BusinessBankAccount>> {
        const requestContextPromise = this.requestFactory.getBusinessBankAccount(id, idType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBusinessBankAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Please contact Kanmon to enable access to bank account APIs.
     * Fetch a business bank account
     * @param id Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getBusinessBankAccount(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<BusinessBankAccount> {
        return this.getBusinessBankAccountWithHttpInfo(id, idType, _options).pipe(map((apiResponse: HttpInfo<BusinessBankAccount>) => apiResponse.data));
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
    public getBusinessBankAccountsWithHttpInfo(ids?: string, platformBankAccountIds?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<HttpInfo<GetBusinessBankAccountsResponse>> {
        const requestContextPromise = this.requestFactory.getBusinessBankAccounts(ids, platformBankAccountIds, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBusinessBankAccountsWithHttpInfo(rsp)));
            }));
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
    public getBusinessBankAccounts(ids?: string, platformBankAccountIds?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<GetBusinessBankAccountsResponse> {
        return this.getBusinessBankAccountsWithHttpInfo(ids, platformBankAccountIds, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options).pipe(map((apiResponse: HttpInfo<GetBusinessBankAccountsResponse>) => apiResponse.data));
    }

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.         Please contact Kanmon to enable access to bank account APIs.
     * Update a business bank account
     * @param id Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;.
     * @param updateBusinessAccountRequestBody 
     * @param idType Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public updateBusinessBankAccountWithHttpInfo(id: string, updateBusinessAccountRequestBody: UpdateBusinessAccountRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<HttpInfo<BusinessBankAccount>> {
        const requestContextPromise = this.requestFactory.updateBusinessBankAccount(id, updateBusinessAccountRequestBody, idType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBusinessBankAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.         Please contact Kanmon to enable access to bank account APIs.
     * Update a business bank account
     * @param id Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;.
     * @param updateBusinessAccountRequestBody 
     * @param idType Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public updateBusinessBankAccount(id: string, updateBusinessAccountRequestBody: UpdateBusinessAccountRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<BusinessBankAccount> {
        return this.updateBusinessBankAccountWithHttpInfo(id, updateBusinessAccountRequestBody, idType, _options).pipe(map((apiResponse: HttpInfo<BusinessBankAccount>) => apiResponse.data));
    }

}

import { BusinessesApiRequestFactory, BusinessesApiResponseProcessor} from "../apis/BusinessesApi";
export class ObservableBusinessesApi {
    private requestFactory: BusinessesApiRequestFactory;
    private responseProcessor: BusinessesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BusinessesApiRequestFactory,
        responseProcessor?: BusinessesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BusinessesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BusinessesApiResponseProcessor();
    }

    /**
     * Create a business
     * @param createBusinessRequestBody 
     */
    public createBusinessWithHttpInfo(createBusinessRequestBody: CreateBusinessRequestBody, _options?: Configuration): Observable<HttpInfo<Business>> {
        const requestContextPromise = this.requestFactory.createBusiness(createBusinessRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBusinessWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a business
     * @param createBusinessRequestBody 
     */
    public createBusiness(createBusinessRequestBody: CreateBusinessRequestBody, _options?: Configuration): Observable<Business> {
        return this.createBusinessWithHttpInfo(createBusinessRequestBody, _options).pipe(map((apiResponse: HttpInfo<Business>) => apiResponse.data));
    }

    /**
     * Fetch a business
     * @param id Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getBusinessWithHttpInfo(id: any, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<HttpInfo<Business>> {
        const requestContextPromise = this.requestFactory.getBusiness(id, idType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBusinessWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch a business
     * @param id Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getBusiness(id: any, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<Business> {
        return this.getBusinessWithHttpInfo(id, idType, _options).pipe(map((apiResponse: HttpInfo<Business>) => apiResponse.data));
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
    public getBusinessActivityLogWithHttpInfo(id: any, idType?: 'KANMON' | 'PLATFORM', offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<HttpInfo<GetActivityLogsResponse>> {
        const requestContextPromise = this.requestFactory.getBusinessActivityLog(id, idType, offset, limit, createdAtStart, createdAtEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBusinessActivityLogWithHttpInfo(rsp)));
            }));
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
    public getBusinessActivityLog(id: any, idType?: 'KANMON' | 'PLATFORM', offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<GetActivityLogsResponse> {
        return this.getBusinessActivityLogWithHttpInfo(id, idType, offset, limit, createdAtStart, createdAtEnd, _options).pipe(map((apiResponse: HttpInfo<GetActivityLogsResponse>) => apiResponse.data));
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
    public getBusinessesWithHttpInfo(ids?: string, platformBusinessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<HttpInfo<GetBusinessesResponse>> {
        const requestContextPromise = this.requestFactory.getBusinesses(ids, platformBusinessIds, offset, limit, createdAtStart, createdAtEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBusinessesWithHttpInfo(rsp)));
            }));
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
    public getBusinesses(ids?: string, platformBusinessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<GetBusinessesResponse> {
        return this.getBusinessesWithHttpInfo(ids, platformBusinessIds, offset, limit, createdAtStart, createdAtEnd, _options).pipe(map((apiResponse: HttpInfo<GetBusinessesResponse>) => apiResponse.data));
    }

    /**
     * Update a business
     * @param id Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @param updateBusinessRequestBody 
     * @param idType Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public updateBusinessWithHttpInfo(id: any, updateBusinessRequestBody: UpdateBusinessRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<HttpInfo<Business>> {
        const requestContextPromise = this.requestFactory.updateBusiness(id, updateBusinessRequestBody, idType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBusinessWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a business
     * @param id Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @param updateBusinessRequestBody 
     * @param idType Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public updateBusiness(id: any, updateBusinessRequestBody: UpdateBusinessRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<Business> {
        return this.updateBusinessWithHttpInfo(id, updateBusinessRequestBody, idType, _options).pipe(map((apiResponse: HttpInfo<Business>) => apiResponse.data));
    }

}

import { ConnectTokensApiRequestFactory, ConnectTokensApiResponseProcessor} from "../apis/ConnectTokensApi";
export class ObservableConnectTokensApi {
    private requestFactory: ConnectTokensApiRequestFactory;
    private responseProcessor: ConnectTokensApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConnectTokensApiRequestFactory,
        responseProcessor?: ConnectTokensApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConnectTokensApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConnectTokensApiResponseProcessor();
    }

    /**
     * Create a connect token
     * @param createConnectTokenRequestBody 
     */
    public connectTokenWithHttpInfo(createConnectTokenRequestBody: CreateConnectTokenRequestBody, _options?: Configuration): Observable<HttpInfo<ConnectToken>> {
        const requestContextPromise = this.requestFactory.connectToken(createConnectTokenRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.connectTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a connect token
     * @param createConnectTokenRequestBody 
     */
    public connectToken(createConnectTokenRequestBody: CreateConnectTokenRequestBody, _options?: Configuration): Observable<ConnectToken> {
        return this.connectTokenWithHttpInfo(createConnectTokenRequestBody, _options).pipe(map((apiResponse: HttpInfo<ConnectToken>) => apiResponse.data));
    }

}

import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";
export class ObservableDocumentsApi {
    private requestFactory: DocumentsApiRequestFactory;
    private responseProcessor: DocumentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentsApiRequestFactory,
        responseProcessor?: DocumentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DocumentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DocumentsApiResponseProcessor();
    }

    /**
     * Upload documents for a business
     * @param invoices Invoices to be uploaded. The file format must be PDF. The limit is 10 files, 10 MB per file.
     * @param businessId The unique identifier for business in our system. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
     * @param platformBusinessId The unique identifier for business in your platform. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
     */
    public createBusinessDocumentWithHttpInfo(invoices: Array<HttpFile>, businessId?: string, platformBusinessId?: string, _options?: Configuration): Observable<HttpInfo<CreateBusinessDocumentsResponse>> {
        const requestContextPromise = this.requestFactory.createBusinessDocument(invoices, businessId, platformBusinessId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBusinessDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upload documents for a business
     * @param invoices Invoices to be uploaded. The file format must be PDF. The limit is 10 files, 10 MB per file.
     * @param businessId The unique identifier for business in our system. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
     * @param platformBusinessId The unique identifier for business in your platform. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
     */
    public createBusinessDocument(invoices: Array<HttpFile>, businessId?: string, platformBusinessId?: string, _options?: Configuration): Observable<CreateBusinessDocumentsResponse> {
        return this.createBusinessDocumentWithHttpInfo(invoices, businessId, platformBusinessId, _options).pipe(map((apiResponse: HttpInfo<CreateBusinessDocumentsResponse>) => apiResponse.data));
    }

}

import { DrawRequestsApiRequestFactory, DrawRequestsApiResponseProcessor} from "../apis/DrawRequestsApi";
export class ObservableDrawRequestsApi {
    private requestFactory: DrawRequestsApiRequestFactory;
    private responseProcessor: DrawRequestsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DrawRequestsApiRequestFactory,
        responseProcessor?: DrawRequestsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DrawRequestsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DrawRequestsApiResponseProcessor();
    }

    /**
     * Fetch a draw request
     * @param id The Kanmon draw request UUID.
     */
    public getDrawRequestWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<DrawRequest>> {
        const requestContextPromise = this.requestFactory.getDrawRequest(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDrawRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch a draw request
     * @param id The Kanmon draw request UUID.
     */
    public getDrawRequest(id: string, _options?: Configuration): Observable<DrawRequest> {
        return this.getDrawRequestWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DrawRequest>) => apiResponse.data));
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
    public getDrawRequestsWithHttpInfo(statuses?: string, ids?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<HttpInfo<GetDrawRequestsResponse>> {
        const requestContextPromise = this.requestFactory.getDrawRequests(statuses, ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDrawRequestsWithHttpInfo(rsp)));
            }));
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
    public getDrawRequests(statuses?: string, ids?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<GetDrawRequestsResponse> {
        return this.getDrawRequestsWithHttpInfo(statuses, ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options).pipe(map((apiResponse: HttpInfo<GetDrawRequestsResponse>) => apiResponse.data));
    }

}

import { EmbeddedSessionsApiRequestFactory, EmbeddedSessionsApiResponseProcessor} from "../apis/EmbeddedSessionsApi";
export class ObservableEmbeddedSessionsApi {
    private requestFactory: EmbeddedSessionsApiRequestFactory;
    private responseProcessor: EmbeddedSessionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmbeddedSessionsApiRequestFactory,
        responseProcessor?: EmbeddedSessionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmbeddedSessionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmbeddedSessionsApiResponseProcessor();
    }

    /**
     * Create an embedded session
     * @param createSessionTokenRequestBody 
     */
    public createEmbeddedSessionWithHttpInfo(createSessionTokenRequestBody: CreateSessionTokenRequestBody, _options?: Configuration): Observable<HttpInfo<EmbeddedSession>> {
        const requestContextPromise = this.requestFactory.createEmbeddedSession(createSessionTokenRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEmbeddedSessionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create an embedded session
     * @param createSessionTokenRequestBody 
     */
    public createEmbeddedSession(createSessionTokenRequestBody: CreateSessionTokenRequestBody, _options?: Configuration): Observable<EmbeddedSession> {
        return this.createEmbeddedSessionWithHttpInfo(createSessionTokenRequestBody, _options).pipe(map((apiResponse: HttpInfo<EmbeddedSession>) => apiResponse.data));
    }

}

import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";
export class ObservableInvoicesApi {
    private requestFactory: InvoicesApiRequestFactory;
    private responseProcessor: InvoicesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoicesApiRequestFactory,
        responseProcessor?: InvoicesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InvoicesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InvoicesApiResponseProcessor();
    }

    /**
     * Fetch an invoice
     * @param id Either the Kanmon invoice UUID or your platform’s invoice ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the invoice by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getInvoiceWithHttpInfo(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<HttpInfo<Invoice>> {
        const requestContextPromise = this.requestFactory.getInvoice(id, idType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch an invoice
     * @param id Either the Kanmon invoice UUID or your platform’s invoice ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the invoice by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getInvoice(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<Invoice> {
        return this.getInvoiceWithHttpInfo(id, idType, _options).pipe(map((apiResponse: HttpInfo<Invoice>) => apiResponse.data));
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
    public getInvoicesWithHttpInfo(statuses?: string, ids?: string, platformBusinessIds?: string, businessIds?: string, platformInvoiceIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<HttpInfo<GetInvoicesResponse>> {
        const requestContextPromise = this.requestFactory.getInvoices(statuses, ids, platformBusinessIds, businessIds, platformInvoiceIds, offset, limit, createdAtStart, createdAtEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoicesWithHttpInfo(rsp)));
            }));
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
    public getInvoices(statuses?: string, ids?: string, platformBusinessIds?: string, businessIds?: string, platformInvoiceIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<GetInvoicesResponse> {
        return this.getInvoicesWithHttpInfo(statuses, ids, platformBusinessIds, businessIds, platformInvoiceIds, offset, limit, createdAtStart, createdAtEnd, _options).pipe(map((apiResponse: HttpInfo<GetInvoicesResponse>) => apiResponse.data));
    }

}

import { IssuedProductsApiRequestFactory, IssuedProductsApiResponseProcessor} from "../apis/IssuedProductsApi";
export class ObservableIssuedProductsApi {
    private requestFactory: IssuedProductsApiRequestFactory;
    private responseProcessor: IssuedProductsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: IssuedProductsApiRequestFactory,
        responseProcessor?: IssuedProductsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new IssuedProductsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new IssuedProductsApiResponseProcessor();
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
    public getAllIssuedProductsWithHttpInfo(ids?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<HttpInfo<GetIssuedProductsResponse>> {
        const requestContextPromise = this.requestFactory.getAllIssuedProducts(ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllIssuedProductsWithHttpInfo(rsp)));
            }));
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
    public getAllIssuedProducts(ids?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<GetIssuedProductsResponse> {
        return this.getAllIssuedProductsWithHttpInfo(ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options).pipe(map((apiResponse: HttpInfo<GetIssuedProductsResponse>) => apiResponse.data));
    }

    /**
     * Fetch an issued product
     * @param id The Kanmon issued product UUID.
     */
    public getIssuedProductByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<IssuedProduct>> {
        const requestContextPromise = this.requestFactory.getIssuedProductById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getIssuedProductByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch an issued product
     * @param id The Kanmon issued product UUID.
     */
    public getIssuedProductById(id: string, _options?: Configuration): Observable<IssuedProduct> {
        return this.getIssuedProductByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<IssuedProduct>) => apiResponse.data));
    }

}

import { OffersApiRequestFactory, OffersApiResponseProcessor} from "../apis/OffersApi";
export class ObservableOffersApi {
    private requestFactory: OffersApiRequestFactory;
    private responseProcessor: OffersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OffersApiRequestFactory,
        responseProcessor?: OffersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OffersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OffersApiResponseProcessor();
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
    public getAllOffersWithHttpInfo(ids?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<HttpInfo<GetOffersResponse>> {
        const requestContextPromise = this.requestFactory.getAllOffers(ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllOffersWithHttpInfo(rsp)));
            }));
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
    public getAllOffers(ids?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<GetOffersResponse> {
        return this.getAllOffersWithHttpInfo(ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options).pipe(map((apiResponse: HttpInfo<GetOffersResponse>) => apiResponse.data));
    }

    /**
     * Fetch an offer
     * @param id The Kanmon offer UUID.
     */
    public getOfferByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Offer>> {
        const requestContextPromise = this.requestFactory.getOfferById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOfferByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch an offer
     * @param id The Kanmon offer UUID.
     */
    public getOfferById(id: string, _options?: Configuration): Observable<Offer> {
        return this.getOfferByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Offer>) => apiResponse.data));
    }

}

import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor} from "../apis/PaymentsApi";
export class ObservablePaymentsApi {
    private requestFactory: PaymentsApiRequestFactory;
    private responseProcessor: PaymentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentsApiRequestFactory,
        responseProcessor?: PaymentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentsApiResponseProcessor();
    }

    /**
     * Fetch a payment
     * @param id The Kanmon payment order UUID.
     */
    public getPaymentByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<PaymentOrder>> {
        const requestContextPromise = this.requestFactory.getPaymentById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPaymentByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch a payment
     * @param id The Kanmon payment order UUID.
     */
    public getPaymentById(id: string, _options?: Configuration): Observable<PaymentOrder> {
        return this.getPaymentByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PaymentOrder>) => apiResponse.data));
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
    public getPaymentScheduleForAIssuedProductWithHttpInfo(id: string, drawRequestIds?: string, invoiceIds?: string, platformInvoiceIds?: string, direction?: 'DISBURSEMENT' | 'REPAYMENT', status?: PaymentOrderStatus, offset?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<GetPaymentScheduleResponse>> {
        const requestContextPromise = this.requestFactory.getPaymentScheduleForAIssuedProduct(id, drawRequestIds, invoiceIds, platformInvoiceIds, direction, status, offset, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPaymentScheduleForAIssuedProductWithHttpInfo(rsp)));
            }));
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
    public getPaymentScheduleForAIssuedProduct(id: string, drawRequestIds?: string, invoiceIds?: string, platformInvoiceIds?: string, direction?: 'DISBURSEMENT' | 'REPAYMENT', status?: PaymentOrderStatus, offset?: number, limit?: number, _options?: Configuration): Observable<GetPaymentScheduleResponse> {
        return this.getPaymentScheduleForAIssuedProductWithHttpInfo(id, drawRequestIds, invoiceIds, platformInvoiceIds, direction, status, offset, limit, _options).pipe(map((apiResponse: HttpInfo<GetPaymentScheduleResponse>) => apiResponse.data));
    }

}

import { PrequalificationsApiRequestFactory, PrequalificationsApiResponseProcessor} from "../apis/PrequalificationsApi";
export class ObservablePrequalificationsApi {
    private requestFactory: PrequalificationsApiRequestFactory;
    private responseProcessor: PrequalificationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PrequalificationsApiRequestFactory,
        responseProcessor?: PrequalificationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PrequalificationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PrequalificationsApiResponseProcessor();
    }

    /**
     * Fetch business prequalifications
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getPrequalifiedBusinessesWithHttpInfo(platformBusinessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<HttpInfo<Array<GetPrequalificationsResponse>>> {
        const requestContextPromise = this.requestFactory.getPrequalifiedBusinesses(platformBusinessIds, offset, limit, createdAtStart, createdAtEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPrequalifiedBusinessesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch business prequalifications
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public getPrequalifiedBusinesses(platformBusinessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<Array<GetPrequalificationsResponse>> {
        return this.getPrequalifiedBusinessesWithHttpInfo(platformBusinessIds, offset, limit, createdAtStart, createdAtEnd, _options).pipe(map((apiResponse: HttpInfo<Array<GetPrequalificationsResponse>>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * Create a user
     * @param createUserRequestBody 
     */
    public createUserWithHttpInfo(createUserRequestBody: CreateUserRequestBody, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.createUser(createUserRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a user
     * @param createUserRequestBody 
     */
    public createUser(createUserRequestBody: CreateUserRequestBody, _options?: Configuration): Observable<User> {
        return this.createUserWithHttpInfo(createUserRequestBody, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * Fetch a user
     * @param id Either the Kanmon user UUID or your platform’s user ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the user by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getUserWithHttpInfo(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.getUser(id, idType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch a user
     * @param id Either the Kanmon user UUID or your platform’s user ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the user by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public getUser(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<User> {
        return this.getUserWithHttpInfo(id, idType, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
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
    public getUsersWithHttpInfo(ids?: string, platformUserIds?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<HttpInfo<GetUsersResponse>> {
        const requestContextPromise = this.requestFactory.getUsers(ids, platformUserIds, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUsersWithHttpInfo(rsp)));
            }));
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
    public getUsers(ids?: string, platformUserIds?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Observable<GetUsersResponse> {
        return this.getUsersWithHttpInfo(ids, platformUserIds, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd, _options).pipe(map((apiResponse: HttpInfo<GetUsersResponse>) => apiResponse.data));
    }

    /**
     * Users from the source business will be moved into the target business. This will only work if the source business has not started onboarding yet. After the merge, the source business will be deleted.
     * Merge users from a source business into a target business
     * @param mergeUsersRequestBody 
     */
    public mergeUserIntoBusinesWithHttpInfo(mergeUsersRequestBody: MergeUsersRequestBody, _options?: Configuration): Observable<HttpInfo<MergeUsersResponseBody>> {
        const requestContextPromise = this.requestFactory.mergeUserIntoBusines(mergeUsersRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mergeUserIntoBusinesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Users from the source business will be moved into the target business. This will only work if the source business has not started onboarding yet. After the merge, the source business will be deleted.
     * Merge users from a source business into a target business
     * @param mergeUsersRequestBody 
     */
    public mergeUserIntoBusines(mergeUsersRequestBody: MergeUsersRequestBody, _options?: Configuration): Observable<MergeUsersResponseBody> {
        return this.mergeUserIntoBusinesWithHttpInfo(mergeUsersRequestBody, _options).pipe(map((apiResponse: HttpInfo<MergeUsersResponseBody>) => apiResponse.data));
    }

    /**
     * Update a user
     * @param id Either the Kanmon user UUID or your platform’s user ID, depending on &#x60;idType&#x60;.
     * @param updateUserRequestBody 
     * @param idType Which ID type to query the user by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public updateUserWithHttpInfo(id: string, updateUserRequestBody: UpdateUserRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.updateUser(id, updateUserRequestBody, idType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a user
     * @param id Either the Kanmon user UUID or your platform’s user ID, depending on &#x60;idType&#x60;.
     * @param updateUserRequestBody 
     * @param idType Which ID type to query the user by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public updateUser(id: string, updateUserRequestBody: UpdateUserRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Observable<User> {
        return this.updateUserWithHttpInfo(id, updateUserRequestBody, idType, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

}
