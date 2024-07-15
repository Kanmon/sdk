# BankAccountsApi

All URIs are relative to *https://api.kanmon.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBusinessBankAccount**](BankAccountsApi.md#createBusinessBankAccount) | **POST** /api/platform/v2/bank-accounts | Create a business bank account |
| [**getBusinessBankAccount**](BankAccountsApi.md#getBusinessBankAccount) | **GET** /api/platform/v2/bank-accounts/{id} | Fetch a business bank account |
| [**getBusinessBankAccounts**](BankAccountsApi.md#getBusinessBankAccounts) | **GET** /api/platform/v2/bank-accounts | Fetch business bank accounts |
| [**updateBusinessBankAccount**](BankAccountsApi.md#updateBusinessBankAccount) | **PATCH** /api/platform/v2/bank-accounts/{id} | Update a business bank account |


<a id="createBusinessBankAccount"></a>
# **createBusinessBankAccount**
> BusinessBankAccount createBusinessBankAccount(createBusinessBankAccountRequestBody)

Create a business bank account

We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.       Please contact Kanmon to enable access to bank account APIs.

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.BankAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    BankAccountsApi apiInstance = new BankAccountsApi(defaultClient);
    CreateBusinessBankAccountRequestBody createBusinessBankAccountRequestBody = new CreateBusinessBankAccountRequestBody(); // CreateBusinessBankAccountRequestBody | 
    try {
      BusinessBankAccount result = apiInstance.createBusinessBankAccount(createBusinessBankAccountRequestBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BankAccountsApi#createBusinessBankAccount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createBusinessBankAccountRequestBody** | [**CreateBusinessBankAccountRequestBody**](CreateBusinessBankAccountRequestBody.md)|  | |

### Return type

[**BusinessBankAccount**](BusinessBankAccount.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | BadRequestException |  -  |
| **403** | ForbiddenException |  -  |
| **404** | BusinessNotFoundException |  -  |
| **409** | BankAccountAlreadyExistException |  -  |
| **500** | InternalServerErrorException |  -  |

<a id="getBusinessBankAccount"></a>
# **getBusinessBankAccount**
> BusinessBankAccount getBusinessBankAccount(id, idType)

Fetch a business bank account

Please contact Kanmon to enable access to bank account APIs.

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.BankAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    BankAccountsApi apiInstance = new BankAccountsApi(defaultClient);
    String id = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6"; // String | Either the Kanmon bank account UUID or your platform’s bank account ID, depending on `idType`.
    String idType = "KANMON"; // String | Which ID type to query the bank account by. Defaults to `KANMON`. Use `PLATFORM` if you want to query by your platform’s ID.
    try {
      BusinessBankAccount result = apiInstance.getBusinessBankAccount(id, idType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BankAccountsApi#getBusinessBankAccount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;. | |
| **idType** | **String**| Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID. | [optional] [enum: KANMON, PLATFORM] |

### Return type

[**BusinessBankAccount**](BusinessBankAccount.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **400** | BadRequestException |  -  |
| **403** | ForbiddenException |  -  |
| **404** | BankAccountNotFoundException |  -  |
| **500** | InternalServerErrorException |  -  |

<a id="getBusinessBankAccounts"></a>
# **getBusinessBankAccounts**
> GetBusinessBankAccountsResponse getBusinessBankAccounts(ids, platformBankAccountIds, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd)

Fetch business bank accounts

Please contact Kanmon to enable access to bank account APIs.

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.BankAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    BankAccountsApi apiInstance = new BankAccountsApi(defaultClient);
    String ids = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6,70eaa08c-f7a5-4f3a-860d-a16dde5771e34"; // String | A comma delimited list of Kanmon’s unique IDs for bank accounts.
    String platformBankAccountIds = "12345,67890"; // String | A comma delimited list of your platform’s unique IDs for bank accounts.
    String platformBusinessIds = "12345,67890"; // String | A comma delimited list of your platform’s unique business IDs for bannk accounts.
    String businessIds = "3dac24ba-f14b-4dea-9f3c-b11e2fcb5aed,73422933-ae2c-4367-b880-0cdb1e921ec7"; // String | A comma delimited list of your Kanmon’s unique business IDs for bannk accounts.
    BigDecimal offset = new BigDecimal("0"); // BigDecimal | The number of records to skip when performing pagination. Defaults to `0`.
    BigDecimal limit = new BigDecimal("100"); // BigDecimal | The number of records to limit when performing pagination. Defaults to `100`, which is the max.
    String createdAtStart = "2022-06-01T03:57:26.115Z"; // String | Filter for records where `createdAt` is greater than or equal to this value. ISO 8601 format.
    String createdAtEnd = "2022-06-01T03:57:26.115Z"; // String | Filter for records where `createdAt` is less than or equal to this value. ISO 8601 format.
    try {
      GetBusinessBankAccountsResponse result = apiInstance.getBusinessBankAccounts(ids, platformBankAccountIds, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BankAccountsApi#getBusinessBankAccounts");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ids** | **String**| A comma delimited list of Kanmon’s unique IDs for bank accounts. | [optional] |
| **platformBankAccountIds** | **String**| A comma delimited list of your platform’s unique IDs for bank accounts. | [optional] |
| **platformBusinessIds** | **String**| A comma delimited list of your platform’s unique business IDs for bannk accounts. | [optional] |
| **businessIds** | **String**| A comma delimited list of your Kanmon’s unique business IDs for bannk accounts. | [optional] |
| **offset** | **BigDecimal**| The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;. | [optional] |
| **limit** | **BigDecimal**| The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max. | [optional] |
| **createdAtStart** | **String**| Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format. | [optional] |
| **createdAtEnd** | **String**| Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format. | [optional] |

### Return type

[**GetBusinessBankAccountsResponse**](GetBusinessBankAccountsResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | BadRequestException |  -  |
| **403** | ForbiddenException |  -  |
| **500** | InternalServerErrorException |  -  |

<a id="updateBusinessBankAccount"></a>
# **updateBusinessBankAccount**
> BusinessBankAccount updateBusinessBankAccount(id, updateBusinessAccountRequestBody, idType)

Update a business bank account

We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.         Please contact Kanmon to enable access to bank account APIs.

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.BankAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    BankAccountsApi apiInstance = new BankAccountsApi(defaultClient);
    String id = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6"; // String | Either the Kanmon bank account UUID or your platform’s bank account ID, depending on `idType`.
    UpdateBusinessAccountRequestBody updateBusinessAccountRequestBody = new UpdateBusinessAccountRequestBody(); // UpdateBusinessAccountRequestBody | 
    String idType = "KANMON"; // String | Which ID type to query the bank account by. Defaults to `KANMON`. Use `PLATFORM` if you want to query by your platform’s ID.
    try {
      BusinessBankAccount result = apiInstance.updateBusinessBankAccount(id, updateBusinessAccountRequestBody, idType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BankAccountsApi#updateBusinessBankAccount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;. | |
| **updateBusinessAccountRequestBody** | [**UpdateBusinessAccountRequestBody**](UpdateBusinessAccountRequestBody.md)|  | |
| **idType** | **String**| Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID. | [optional] [enum: KANMON, PLATFORM] |

### Return type

[**BusinessBankAccount**](BusinessBankAccount.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | BadRequestException |  -  |
| **403** | ForbiddenException |  -  |
| **404** | BankAccountNotFoundException |  -  |
| **500** | InternalServerErrorException |  -  |

