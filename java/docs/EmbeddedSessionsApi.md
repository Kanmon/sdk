# EmbeddedSessionsApi

All URIs are relative to *https://api.kanmon.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createEmbeddedSession**](EmbeddedSessionsApi.md#createEmbeddedSession) | **POST** /api/platform/v2/embedded-session | Create an embedded session |


<a id="createEmbeddedSession"></a>
# **createEmbeddedSession**
> EmbeddedSession createEmbeddedSession(createSessionTokenRequestBody)

Create an embedded session

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.EmbeddedSessionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    EmbeddedSessionsApi apiInstance = new EmbeddedSessionsApi(defaultClient);
    CreateSessionTokenRequestBody createSessionTokenRequestBody = new CreateSessionTokenRequestBody(); // CreateSessionTokenRequestBody | 
    try {
      EmbeddedSession result = apiInstance.createEmbeddedSession(createSessionTokenRequestBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EmbeddedSessionsApi#createEmbeddedSession");
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
| **createSessionTokenRequestBody** | [**CreateSessionTokenRequestBody**](CreateSessionTokenRequestBody.md)|  | |

### Return type

[**EmbeddedSession**](EmbeddedSession.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Embedded session created. |  -  |
| **400** | BadRequestException |  -  |
| **403** | ForbiddenException |  -  |
| **404** | BusinessNotFoundException |  -  |
| **409** | BusinessHasNoInvoiceFinancingProductException, PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException |  -  |
| **500** | InternalServerErrorException |  -  |

