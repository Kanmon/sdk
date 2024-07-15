# BusinessesApi

All URIs are relative to *https://api.kanmon.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBusiness**](BusinessesApi.md#createBusiness) | **POST** /api/platform/v2/businesses | Create a business |
| [**getBusiness**](BusinessesApi.md#getBusiness) | **GET** /api/platform/v2/businesses/{id} | Fetch a business |
| [**getBusinessActivityLog**](BusinessesApi.md#getBusinessActivityLog) | **GET** /api/platform/v2/businesses/{id}/activity-logs | Fetch activity logs for a business |
| [**getBusinesses**](BusinessesApi.md#getBusinesses) | **GET** /api/platform/v2/businesses | Fetch businesses |
| [**updateBusiness**](BusinessesApi.md#updateBusiness) | **PATCH** /api/platform/v2/businesses/{id} | Update a business |


<a id="createBusiness"></a>
# **createBusiness**
> Business createBusiness(createBusinessRequestBody)

Create a business

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.BusinessesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    BusinessesApi apiInstance = new BusinessesApi(defaultClient);
    CreateBusinessRequestBody createBusinessRequestBody = new CreateBusinessRequestBody(); // CreateBusinessRequestBody | 
    try {
      Business result = apiInstance.createBusiness(createBusinessRequestBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BusinessesApi#createBusiness");
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
| **createBusinessRequestBody** | [**CreateBusinessRequestBody**](CreateBusinessRequestBody.md)|  | |

### Return type

[**Business**](Business.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Business created |  -  |
| **400** | BadRequestException |  -  |
| **403** | ForbiddenException |  -  |
| **409** | BusinessAlreadyExistsException |  -  |
| **500** | InternalServerErrorException |  -  |

<a id="getBusiness"></a>
# **getBusiness**
> Business getBusiness(id, idType)

Fetch a business

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.BusinessesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    BusinessesApi apiInstance = new BusinessesApi(defaultClient);
    Object id = 60eaa08c-f7a5-4f3a-860d-a16dde5771d6; // Object | Either the Kanmon business UUID or your platform’s business ID, depending on `idType`.
    String idType = "KANMON"; // String | Which ID type to query the business by. Defaults to `KANMON`. Use `PLATFORM` if you want to query by your platform’s ID.
    try {
      Business result = apiInstance.getBusiness(id, idType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BusinessesApi#getBusiness");
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
| **id** | [**Object**](.md)| Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;. | |
| **idType** | **String**| Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID. | [optional] [enum: KANMON, PLATFORM] |

### Return type

[**Business**](Business.md)

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
| **404** | BusinessNotFoundException |  -  |
| **500** | InternalServerErrorException |  -  |

<a id="getBusinessActivityLog"></a>
# **getBusinessActivityLog**
> GetActivityLogsResponse getBusinessActivityLog(id, idType, offset, limit, createdAtStart, createdAtEnd)

Fetch activity logs for a business

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.BusinessesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    BusinessesApi apiInstance = new BusinessesApi(defaultClient);
    Object id = 60eaa08c-f7a5-4f3a-860d-a16dde5771d6; // Object | Either the Kanmon business UUID or your platform’s business ID, depending on `idType`.
    String idType = "KANMON"; // String | Which ID type to query the business by. Defaults to `KANMON`. Use `PLATFORM` if you want to query by your platform’s ID.
    BigDecimal offset = new BigDecimal("0"); // BigDecimal | The number of records to skip when performing pagination. Defaults to `0`.
    BigDecimal limit = new BigDecimal("100"); // BigDecimal | The number of records to limit when performing pagination. Defaults to `100`, which is the max.
    String createdAtStart = "2022-06-01T03:57:26.115Z"; // String | Filter for records where `createdAt` is greater than or equal to this value. ISO 8601 format.
    String createdAtEnd = "2022-06-01T03:57:26.115Z"; // String | Filter for records where `createdAt` is less than or equal to this value. ISO 8601 format.
    try {
      GetActivityLogsResponse result = apiInstance.getBusinessActivityLog(id, idType, offset, limit, createdAtStart, createdAtEnd);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BusinessesApi#getBusinessActivityLog");
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
| **id** | [**Object**](.md)| Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;. | |
| **idType** | **String**| Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID. | [optional] [enum: KANMON, PLATFORM] |
| **offset** | **BigDecimal**| The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;. | [optional] |
| **limit** | **BigDecimal**| The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max. | [optional] |
| **createdAtStart** | **String**| Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format. | [optional] |
| **createdAtEnd** | **String**| Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format. | [optional] |

### Return type

[**GetActivityLogsResponse**](GetActivityLogsResponse.md)

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
| **404** | BusinessNotFoundException |  -  |
| **500** | InternalServerErrorException |  -  |

<a id="getBusinesses"></a>
# **getBusinesses**
> GetBusinessesResponse getBusinesses(ids, platformBusinessIds, offset, limit, createdAtStart, createdAtEnd)

Fetch businesses

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.BusinessesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    BusinessesApi apiInstance = new BusinessesApi(defaultClient);
    String ids = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6,70eaa08c-f7a5-4f3a-860d-a16dde5771e34"; // String | A comma delimited list of Kanmon’s unique IDs for businesses.
    String platformBusinessIds = "12345,67890"; // String | A comma delimited list of your platform’s unique IDs for businesses.
    BigDecimal offset = new BigDecimal("0"); // BigDecimal | The number of records to skip when performing pagination. Defaults to `0`.
    BigDecimal limit = new BigDecimal("100"); // BigDecimal | The number of records to limit when performing pagination. Defaults to `100`, which is the max.
    String createdAtStart = "2022-06-01T03:57:26.115Z"; // String | Filter for records where `createdAt` is greater than or equal to this value. ISO 8601 format.
    String createdAtEnd = "2022-06-01T03:57:26.115Z"; // String | Filter for records where `createdAt` is less than or equal to this value. ISO 8601 format.
    try {
      GetBusinessesResponse result = apiInstance.getBusinesses(ids, platformBusinessIds, offset, limit, createdAtStart, createdAtEnd);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BusinessesApi#getBusinesses");
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
| **ids** | **String**| A comma delimited list of Kanmon’s unique IDs for businesses. | [optional] |
| **platformBusinessIds** | **String**| A comma delimited list of your platform’s unique IDs for businesses. | [optional] |
| **offset** | **BigDecimal**| The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;. | [optional] |
| **limit** | **BigDecimal**| The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max. | [optional] |
| **createdAtStart** | **String**| Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format. | [optional] |
| **createdAtEnd** | **String**| Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format. | [optional] |

### Return type

[**GetBusinessesResponse**](GetBusinessesResponse.md)

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

<a id="updateBusiness"></a>
# **updateBusiness**
> Business updateBusiness(id, updateBusinessRequestBody, idType)

Update a business

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.BusinessesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    BusinessesApi apiInstance = new BusinessesApi(defaultClient);
    Object id = 60eaa08c-f7a5-4f3a-860d-a16dde5771d6; // Object | Either the Kanmon business UUID or your platform’s business ID, depending on `idType`.
    UpdateBusinessRequestBody updateBusinessRequestBody = new UpdateBusinessRequestBody(); // UpdateBusinessRequestBody | 
    String idType = "KANMON"; // String | Which ID type to query the business by. Defaults to `KANMON`. Use `PLATFORM` if you want to query by your platform’s ID.
    try {
      Business result = apiInstance.updateBusiness(id, updateBusinessRequestBody, idType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BusinessesApi#updateBusiness");
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
| **id** | [**Object**](.md)| Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;. | |
| **updateBusinessRequestBody** | [**UpdateBusinessRequestBody**](UpdateBusinessRequestBody.md)|  | |
| **idType** | **String**| Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID. | [optional] [enum: KANMON, PLATFORM] |

### Return type

[**Business**](Business.md)

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
| **409** | BusinessAlreadyExistsException |  -  |
| **500** | InternalServerErrorException |  -  |

