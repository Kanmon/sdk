import {
  BankAccountsApi,
  BusinessesApi,
  Configuration,
  ConnectTokensApi,
  createConfiguration,
  DocumentsApi,
  UsersApi,
  DrawRequestsApi,
  EmbeddedSessionsApi,
  InvoicesApi,
  IssuedProductsApi,
  OffersApi,
  PaymentsApi,
  PrequalificationsApi,
  servers,
} from "./openapi";

export * from "./openapi";

const serverEnvToIndex = {
  production: 0,
  sandbox: 1,
  // For internal use only
  development: 2,
  // For internal use only
  staging: 3,
};

export class KanmonPlatformApi {
  public readonly _configuration: Configuration;
  public readonly connectTokens: ConnectTokensApi;
  public readonly businesses: BusinessesApi;
  public readonly users: UsersApi;
  public readonly bankAccounts: BankAccountsApi;
  public readonly documents: DocumentsApi;
  public readonly drawRequests: DrawRequestsApi;
  public readonly embeddedSessions: EmbeddedSessionsApi;
  public readonly invoices: InvoicesApi;
  public readonly issuedProducts: IssuedProductsApi;
  public readonly offers: OffersApi;
  public readonly payments: PaymentsApi;
  public readonly prequalifications: PrequalificationsApi;

  constructor(apiToken: string, env?: keyof typeof serverEnvToIndex) {
    const serverIndex = serverEnvToIndex[env || "production"];

    const baseServer = servers[serverIndex];

    const config = createConfiguration({
      baseServer,
      authMethods: {
        Authorization: `ApiKey ${apiToken}`,
      },
    });

    this._configuration = config;
    this.connectTokens = new ConnectTokensApi(this._configuration);
    this.businesses = new BusinessesApi(this._configuration);
    this.users = new UsersApi(this._configuration);
    this.bankAccounts = new BankAccountsApi(this._configuration);
    this.documents = new DocumentsApi(this._configuration);
    this.drawRequests = new DrawRequestsApi(this._configuration);
    this.embeddedSessions = new EmbeddedSessionsApi(this._configuration);
    this.invoices = new InvoicesApi(this._configuration);
    this.issuedProducts = new IssuedProductsApi(this._configuration);
    this.offers = new OffersApi(this._configuration);
    this.payments = new PaymentsApi(this._configuration);
    this.prequalifications = new PrequalificationsApi(this._configuration);
  }
}
