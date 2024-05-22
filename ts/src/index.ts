import {
  BankAccountsApi,
  BusinessesApi,
  Configuration,
  ConnectTokensApi,
  DocumentsApi,
  UsersApi,
  DrawRequestsApi,
  EmbeddedSessionsApi,
  InvoicesApi,
  IssuedProductsApi,
  OffersApi,
  PaymentsApi,
  PrequalificationsApi,
} from "./openapi/src";

export * from "./openapi/src";

const serverEnvToBasePath = {
  production: "https://api.kanmon.com",
  sandbox: "https://api.kanmon.dev",
  // For internal use only
  development: "http://localhost:3333",
  // For internal use only
  staging: "https://workflow.concar.dev",
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

  constructor(apiToken: string, env?: keyof typeof serverEnvToBasePath) {
    const basePath = serverEnvToBasePath[env || "production"];

    const config = new Configuration({
      basePath,
      apiKey: `ApiKey ${apiToken}`,
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
