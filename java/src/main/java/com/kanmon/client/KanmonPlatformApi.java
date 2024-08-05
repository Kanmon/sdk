package com.kanmon.client;

import com.google.gson.Gson;
import com.kanmon.client.api.*;

public class KanmonPlatformApi {

    public enum Environment {
        PRODUCTION("https://api.kanmon.com"),
        SANDBOX("https://api.kanmon.dev"),
        // For internal use only
        DEVELOPMENT("http://localhost:3333"),
        // For internal use only
        STAGING("https://workflow.concar.dev");

        private final String url;

        Environment(String url) {
            this.url = url;
        }

        public String getUrl() {
            return this.url;
        }
    }

    private ApiClient apiClient;
    private ConnectTokensApi connectTokensApi;
    private BusinessesApi businessesApi;
    private UsersApi usersApi;
    private BankAccountsApi bankAccountsApi;
    private DocumentsApi documentsApi;
    private DrawRequestsApi drawRequestsApi;
    private EmbeddedSessionsApi embeddedSessionsApi;
    private InvoicesApi invoicesApi;
    private IssuedProductsApi issuedProductsApi;
    private OffersApi offersApi;
    private PaymentsApi paymentsApi;
    private PrequalificationsApi prequalificationsApi;
    private Gson gson;

    public KanmonPlatformApi(String apiToken) {
        this(apiToken, Environment.PRODUCTION);
    }

    public KanmonPlatformApi(String apiToken, Environment environment) {
        this.apiClient = new ApiClient();
        this.apiClient.setBasePath(environment.getUrl());
        this.apiClient.setApiKey("ApiKey " + apiToken);

        this.connectTokensApi = new ConnectTokensApi(this.apiClient);
        this.businessesApi = new BusinessesApi(this.apiClient);
        this.usersApi = new UsersApi(this.apiClient);
        this.bankAccountsApi = new BankAccountsApi(this.apiClient);
        this.documentsApi = new DocumentsApi(this.apiClient);
        this.drawRequestsApi = new DrawRequestsApi(this.apiClient);
        this.embeddedSessionsApi = new EmbeddedSessionsApi(this.apiClient);
        this.invoicesApi = new InvoicesApi(this.apiClient);
        this.issuedProductsApi = new IssuedProductsApi(this.apiClient);
        this.offersApi = new OffersApi(this.apiClient);
        this.paymentsApi = new PaymentsApi(this.apiClient);
        this.prequalificationsApi = new PrequalificationsApi(this.apiClient);
        gson = new Gson();
    }

    public ConnectTokensApi getConnectTokensApi() {
        return connectTokensApi;
    }

    public BusinessesApi getBusinessesApi() {
        return businessesApi;
    }

    public UsersApi getUsersApi() {
        return usersApi;
    }

    public BankAccountsApi getBankAccountsApi() {
        return bankAccountsApi;
    }

    public DocumentsApi getDocumentsApi() {
        return documentsApi;
    }

    public DrawRequestsApi getDrawRequestsApi() {
        return drawRequestsApi;
    }

    public EmbeddedSessionsApi getEmbeddedSessionsApi() {
        return embeddedSessionsApi;
    }

    public InvoicesApi getInvoicesApi() {
        return invoicesApi;
    }

    public IssuedProductsApi getIssuedProductsApi() {
        return issuedProductsApi;
    }

    public OffersApi getOffersApi() {
        return offersApi;
    }

    public PaymentsApi getPaymentsApi() {
        return paymentsApi;
    }

    public PrequalificationsApi getPrequalificationsApi() {
        return prequalificationsApi;
    }

    public KanmonApiException getKanmonException(ApiException apiException) {
        return gson.fromJson(apiException.getResponseBody(), KanmonApiException.class);
    }
}