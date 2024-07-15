# InvoicesApi

All URIs are relative to *https://api.kanmon.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getInvoice**](InvoicesApi.md#getInvoice) | **GET** /api/platform/v2/invoices/{id} | Fetch an invoice |
| [**getInvoices**](InvoicesApi.md#getInvoices) | **GET** /api/platform/v2/invoices | Fetch invoices |


<a id="getInvoice"></a>
# **getInvoice**
> Invoice getInvoice(id, idType)

Fetch an invoice

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.InvoicesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    InvoicesApi apiInstance = new InvoicesApi(defaultClient);
    String id = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6"; // String | Either the Kanmon invoice UUID or your platform’s invoice ID, depending on `idType`.
    String idType = "KANMON"; // String | Which ID type to query the invoice by. Defaults to `KANMON`. Use `PLATFORM` if you want to query by your platform’s ID.
    try {
      Invoice result = apiInstance.getInvoice(id, idType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InvoicesApi#getInvoice");
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
| **id** | **String**| Either the Kanmon invoice UUID or your platform’s invoice ID, depending on &#x60;idType&#x60;. | |
| **idType** | **String**| Which ID type to query the invoice by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID. | [optional] [enum: KANMON, PLATFORM] |

### Return type

[**Invoice**](Invoice.md)

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
| **404** | InvoiceNotFoundException, BusinessNotFoundException |  -  |
| **500** | InternalServerErrorException |  -  |

<a id="getInvoices"></a>
# **getInvoices**
> GetInvoicesResponse getInvoices(statuses, ids, platformBusinessIds, businessIds, platformInvoiceIds, offset, limit, createdAtStart, createdAtEnd)

Fetch invoices

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.InvoicesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    InvoicesApi apiInstance = new InvoicesApi(defaultClient);
    String statuses = "INVOICE_CREATED,INVOICE_FUNDED"; // String | A comma delimited list of invoice statuses.
    String ids = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6,70eaa08c-f7a5-4f3a-860d-a16dde5771e34"; // String | A comma delimited list of Kanmon’s unique IDs for invoices.
    String platformBusinessIds = "12345,67890"; // String | A comma delimited list of your platform’s unique IDs for businesses.
    String businessIds = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6,70eaa08c-f7a5-4f3a-860d-a16dde5771e34"; // String | A comma delimited list of Kanmon’s unique IDs for businesses.
    String platformInvoiceIds = "12345,67890"; // String | A comma delimited list of your platforms’s unique IDs for invoices.
    BigDecimal offset = new BigDecimal("0"); // BigDecimal | The number of records to skip when performing pagination. Defaults to `0`.
    BigDecimal limit = new BigDecimal("100"); // BigDecimal | The number of records to limit when performing pagination. Defaults to `100`, which is the max.
    String createdAtStart = "2022-06-01T03:57:26.115Z"; // String | Filter for records where `createdAt` is greater than or equal to this value. ISO 8601 format.
    String createdAtEnd = "2022-06-01T03:57:26.115Z"; // String | Filter for records where `createdAt` is less than or equal to this value. ISO 8601 format.
    try {
      GetInvoicesResponse result = apiInstance.getInvoices(statuses, ids, platformBusinessIds, businessIds, platformInvoiceIds, offset, limit, createdAtStart, createdAtEnd);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InvoicesApi#getInvoices");
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
| **statuses** | **String**| A comma delimited list of invoice statuses. | [optional] |
| **ids** | **String**| A comma delimited list of Kanmon’s unique IDs for invoices. | [optional] |
| **platformBusinessIds** | **String**| A comma delimited list of your platform’s unique IDs for businesses. | [optional] |
| **businessIds** | **String**| A comma delimited list of Kanmon’s unique IDs for businesses. | [optional] |
| **platformInvoiceIds** | **String**| A comma delimited list of your platforms’s unique IDs for invoices. | [optional] |
| **offset** | **BigDecimal**| The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;. | [optional] |
| **limit** | **BigDecimal**| The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max. | [optional] |
| **createdAtStart** | **String**| Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format. | [optional] |
| **createdAtEnd** | **String**| Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format. | [optional] |

### Return type

[**GetInvoicesResponse**](GetInvoicesResponse.md)

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

