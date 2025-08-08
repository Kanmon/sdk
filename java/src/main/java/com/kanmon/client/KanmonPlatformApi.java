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
    private ConnectTokensApi connectTokens;
    private BusinessesApi businesses;
    private UsersApi users;
    private BankAccountsApi bankAccounts;
    private DocumentsApi documents;
    private DrawRequestsApi drawRequests;
    private EmbeddedSessionsApi embeddedSessions;
    private InvoicesApi invoices;
    private IssuedProductsApi issuedProducts;
    private OffersApi offers;
    private PaymentsApi payments;
    private PrequalificationsApi prequalifications;
    private IntegratedMcaApi integratedMca;
    private Gson gson;

    public KanmonPlatformApi(String apiToken) {
        this(apiToken, Environment.PRODUCTION);
    }

    public KanmonPlatformApi(String apiToken, Environment environment) {
        this.apiClient = new ApiClient();
        this.apiClient.setBasePath(environment.getUrl());
        this.apiClient.setApiKey("ApiKey " + apiToken);

        this.connectTokens = new ConnectTokensApi(this.apiClient);
        this.businesses = new BusinessesApi(this.apiClient);
        this.users = new UsersApi(this.apiClient);
        this.bankAccounts = new BankAccountsApi(this.apiClient);
        this.documents = new DocumentsApi(this.apiClient);
        this.drawRequests = new DrawRequestsApi(this.apiClient);
        this.embeddedSessions = new EmbeddedSessionsApi(this.apiClient);
        this.invoices = new InvoicesApi(this.apiClient);
        this.issuedProducts = new IssuedProductsApi(this.apiClient);
        this.offers = new OffersApi(this.apiClient);
        this.payments = new PaymentsApi(this.apiClient);
        this.prequalifications = new PrequalificationsApi(this.apiClient);
        this.integratedMca = new IntegratedMcaApi(this.apiClient);
        gson = new Gson();
    }

    public ConnectTokensApi getConnectTokens() {
        return connectTokens;
    }

    public BusinessesApi getBusinesses() {
        return businesses;
    }

    public UsersApi getUsers() {
        return users;
    }

    public BankAccountsApi getBankAccounts() {
        return bankAccounts;
    }

    public DocumentsApi getDocuments() {
        return documents;
    }

    public DrawRequestsApi getDrawRequests() {
        return drawRequests;
    }

    public EmbeddedSessionsApi getEmbeddedSessions() {
        return embeddedSessions;
    }

    public InvoicesApi getInvoices() {
        return invoices;
    }

    public IssuedProductsApi getIssuedProducts() {
        return issuedProducts;
    }

    public OffersApi getOffers() {
        return offers;
    }

    public PaymentsApi getPayments() {
        return payments;
    }

    public PrequalificationsApi getPrequalifications() {
        return prequalifications;
    }

    public IntegratedMcaApi getIntegratedMca() {
        return integratedMca;
    }

    public KanmonApiException getKanmonException(ApiException apiException) {
        return gson.fromJson(apiException.getResponseBody(), KanmonApiException.class);
    }
}