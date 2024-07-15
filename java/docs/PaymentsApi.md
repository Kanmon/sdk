# PaymentsApi

All URIs are relative to *https://api.kanmon.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPaymentById**](PaymentsApi.md#getPaymentById) | **GET** /api/platform/v2/payments/{id} | Fetch a payment |
| [**getPaymentScheduleForAIssuedProduct**](PaymentsApi.md#getPaymentScheduleForAIssuedProduct) | **GET** /api/platform/v2/issued-products/{id}/payment-schedule | Fetch payment schedule for an issued product |


<a id="getPaymentById"></a>
# **getPaymentById**
> PaymentOrder getPaymentById(id)

Fetch a payment

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String id = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6"; // String | The Kanmon payment order UUID.
    try {
      PaymentOrder result = apiInstance.getPaymentById(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#getPaymentById");
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
| **id** | **String**| The Kanmon payment order UUID. | |

### Return type

[**PaymentOrder**](PaymentOrder.md)

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
| **404** | PaymentOrderNotFoundException |  -  |
| **500** | InternalServerErrorException |  -  |

<a id="getPaymentScheduleForAIssuedProduct"></a>
# **getPaymentScheduleForAIssuedProduct**
> GetPaymentScheduleResponse getPaymentScheduleForAIssuedProduct(id, drawRequestIds, invoiceIds, platformInvoiceIds, direction, status, offset, limit)

Fetch payment schedule for an issued product

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String id = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6"; // String | The Kanmon issued product UUID.
    String drawRequestIds = "46439ef9-728f-4255-8cb4-262371cb9618,1113ce7c-dc84-4cad-b60a-4824c7a91c8b"; // String | A comma delimited list of Kanmon’s unique draw request IDs.
    String invoiceIds = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6,70eaa08c-f7a5-4f3a-860d-a16dde5771e34"; // String | A comma delimited list of Kanmon’s unique IDs for invoices.
    String platformInvoiceIds = "12322,12331"; // String | A comma delimited list of your platform’s unique IDs for invoices.
    String direction = "DISBURSEMENT"; // String | The direction of the payment.
    PaymentOrderStatus status = PaymentOrderStatus.fromValue("FAILED"); // PaymentOrderStatus | The status of the payment.
    BigDecimal offset = new BigDecimal("0"); // BigDecimal | The number of records to skip when performing pagination. Defaults to `0`.
    BigDecimal limit = new BigDecimal("100"); // BigDecimal | The number of records to limit when performing pagination. Defaults to `100`, which is the max.
    try {
      GetPaymentScheduleResponse result = apiInstance.getPaymentScheduleForAIssuedProduct(id, drawRequestIds, invoiceIds, platformInvoiceIds, direction, status, offset, limit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#getPaymentScheduleForAIssuedProduct");
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
| **id** | **String**| The Kanmon issued product UUID. | |
| **drawRequestIds** | **String**| A comma delimited list of Kanmon’s unique draw request IDs. | [optional] |
| **invoiceIds** | **String**| A comma delimited list of Kanmon’s unique IDs for invoices. | [optional] |
| **platformInvoiceIds** | **String**| A comma delimited list of your platform’s unique IDs for invoices. | [optional] |
| **direction** | **String**| The direction of the payment. | [optional] [enum: DISBURSEMENT, REPAYMENT] |
| **status** | [**PaymentOrderStatus**](.md)| The status of the payment. | [optional] [enum: FAILED, PAID, PENDING] |
| **offset** | **BigDecimal**| The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;. | [optional] |
| **limit** | **BigDecimal**| The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max. | [optional] |

### Return type

[**GetPaymentScheduleResponse**](GetPaymentScheduleResponse.md)

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
| **404** | IssuedProductNotFoundException |  -  |
| **500** | InternalServerErrorException |  -  |

