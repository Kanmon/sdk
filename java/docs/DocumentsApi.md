# DocumentsApi

All URIs are relative to *https://api.kanmon.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBusinessDocument**](DocumentsApi.md#createBusinessDocument) | **POST** /api/platform/v2/documents | Upload documents for a business |


<a id="createBusinessDocument"></a>
# **createBusinessDocument**
> CreateBusinessDocumentsResponse createBusinessDocument(invoices, businessId, platformBusinessId)

Upload documents for a business

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.DocumentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    DocumentsApi apiInstance = new DocumentsApi(defaultClient);
    List<File> invoices = Arrays.asList(); // List<File> | Invoices to be uploaded. The file format must be PDF. The limit is 10 files, 10 MB per file.
    String businessId = "businessId_example"; // String | The unique identifier for business in our system. Either of `businessId` or `platformBusinessId` is required.
    String platformBusinessId = "platformBusinessId_example"; // String | The unique identifier for business in your platform. Either of `businessId` or `platformBusinessId` is required.
    try {
      CreateBusinessDocumentsResponse result = apiInstance.createBusinessDocument(invoices, businessId, platformBusinessId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DocumentsApi#createBusinessDocument");
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
| **invoices** | **List&lt;File&gt;**| Invoices to be uploaded. The file format must be PDF. The limit is 10 files, 10 MB per file. | |
| **businessId** | **String**| The unique identifier for business in our system. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required. | [optional] |
| **platformBusinessId** | **String**| The unique identifier for business in your platform. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required. | [optional] |

### Return type

[**CreateBusinessDocumentsResponse**](CreateBusinessDocumentsResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **400** | BadRequestException |  -  |
| **403** | ForbiddenException |  -  |
| **500** | InternalServerErrorException |  -  |

