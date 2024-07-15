# DrawRequestsApi

All URIs are relative to *https://api.kanmon.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDrawRequest**](DrawRequestsApi.md#getDrawRequest) | **GET** /api/platform/v2/draw-requests/{id} | Fetch a draw request |
| [**getDrawRequests**](DrawRequestsApi.md#getDrawRequests) | **GET** /api/platform/v2/draw-requests | Fetch draw requests |


<a id="getDrawRequest"></a>
# **getDrawRequest**
> DrawRequest getDrawRequest(id)

Fetch a draw request

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.DrawRequestsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    DrawRequestsApi apiInstance = new DrawRequestsApi(defaultClient);
    String id = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6"; // String | The Kanmon draw request UUID.
    try {
      DrawRequest result = apiInstance.getDrawRequest(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DrawRequestsApi#getDrawRequest");
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
| **id** | **String**| The Kanmon draw request UUID. | |

### Return type

[**DrawRequest**](DrawRequest.md)

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
| **404** |  |  -  |
| **500** | InternalServerErrorException |  -  |

<a id="getDrawRequests"></a>
# **getDrawRequests**
> GetDrawRequestsResponse getDrawRequests(statuses, ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd)

Fetch draw requests

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.DrawRequestsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    DrawRequestsApi apiInstance = new DrawRequestsApi(defaultClient);
    String statuses = "DRAW_REQUEST_FUNDED,DRAW_REQUEST_PAID_IN_FULL"; // String | A comma delimited list of draw request statuses.
    String ids = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6,70eaa08c-f7a5-4f3a-860d-a16dde5771e34"; // String | A comma delimited list of Kanmon’s unique IDs for invoices.
    String platformBusinessIds = "12345,67890"; // String | A comma delimited list of your platform’s unique IDs for businesses.
    String businessIds = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6,70eaa08c-f7a5-4f3a-860d-a16dde5771e34"; // String | A comma delimited list of Kanmon’s unique IDs for businesses.
    BigDecimal offset = new BigDecimal("0"); // BigDecimal | The number of records to skip when performing pagination. Defaults to `0`.
    BigDecimal limit = new BigDecimal("100"); // BigDecimal | The number of records to limit when performing pagination. Defaults to `100`, which is the max.
    String createdAtStart = "2022-06-01T03:57:26.115Z"; // String | Filter for records where `createdAt` is greater than or equal to this value. ISO 8601 format.
    String createdAtEnd = "2022-06-01T03:57:26.115Z"; // String | Filter for records where `createdAt` is less than or equal to this value. ISO 8601 format.
    try {
      GetDrawRequestsResponse result = apiInstance.getDrawRequests(statuses, ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DrawRequestsApi#getDrawRequests");
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
| **statuses** | **String**| A comma delimited list of draw request statuses. | [optional] |
| **ids** | **String**| A comma delimited list of Kanmon’s unique IDs for invoices. | [optional] |
| **platformBusinessIds** | **String**| A comma delimited list of your platform’s unique IDs for businesses. | [optional] |
| **businessIds** | **String**| A comma delimited list of Kanmon’s unique IDs for businesses. | [optional] |
| **offset** | **BigDecimal**| The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;. | [optional] |
| **limit** | **BigDecimal**| The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max. | [optional] |
| **createdAtStart** | **String**| Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format. | [optional] |
| **createdAtEnd** | **String**| Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format. | [optional] |

### Return type

[**GetDrawRequestsResponse**](GetDrawRequestsResponse.md)

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

