# UsersApi

All URIs are relative to *https://api.kanmon.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUser**](UsersApi.md#createUser) | **POST** /api/platform/v2/users | Create a user |
| [**getUser**](UsersApi.md#getUser) | **GET** /api/platform/v2/users/{id} | Fetch a user |
| [**getUsers**](UsersApi.md#getUsers) | **GET** /api/platform/v2/users | Fetch users |
| [**mergeUserIntoBusiness**](UsersApi.md#mergeUserIntoBusiness) | **POST** /api/platform/v2/users/merge | Merge users from a source business into a target business |
| [**updateUser**](UsersApi.md#updateUser) | **PATCH** /api/platform/v2/users/{id} | Update a user |


<a id="createUser"></a>
# **createUser**
> User createUser(createUserRequestBody)

Create a user

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.UsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    UsersApi apiInstance = new UsersApi(defaultClient);
    CreateUserRequestBody createUserRequestBody = new CreateUserRequestBody(); // CreateUserRequestBody | 
    try {
      User result = apiInstance.createUser(createUserRequestBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UsersApi#createUser");
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
| **createUserRequestBody** | [**CreateUserRequestBody**](CreateUserRequestBody.md)|  | |

### Return type

[**User**](User.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | User created |  -  |
| **400** | BadRequestException |  -  |
| **403** | ForbiddenException |  -  |
| **404** | BusinessNotFoundException |  -  |
| **409** | PrimaryBusinessOwnerAlreadyExistsForBusinessException, UserAlreadyExistsWithPlatformUserIdException, UserAlreadyExistsWithEmailException |  -  |
| **500** | InternalServerErrorException |  -  |

<a id="getUser"></a>
# **getUser**
> User getUser(id, idType)

Fetch a user

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.UsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    UsersApi apiInstance = new UsersApi(defaultClient);
    String id = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6"; // String | Either the Kanmon user UUID or your platform’s user ID, depending on `idType`.
    String idType = "KANMON"; // String | Which ID type to query the user by. Defaults to `KANMON`. Use `PLATFORM` if you want to query by your platform’s ID.
    try {
      User result = apiInstance.getUser(id, idType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UsersApi#getUser");
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
| **id** | **String**| Either the Kanmon user UUID or your platform’s user ID, depending on &#x60;idType&#x60;. | |
| **idType** | **String**| Which ID type to query the user by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID. | [optional] [enum: KANMON, PLATFORM] |

### Return type

[**User**](User.md)

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
| **404** | UserNotFoundException |  -  |
| **500** | InternalServerErrorException |  -  |

<a id="getUsers"></a>
# **getUsers**
> GetUsersResponse getUsers(ids, platformUserIds, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd)

Fetch users

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.UsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    UsersApi apiInstance = new UsersApi(defaultClient);
    String ids = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6,70eaa08c-f7a5-4f3a-860d-a16dde5771e34"; // String | A comma delimited list of Kanmon’s unique IDs for users.
    String platformUserIds = "12345,67890"; // String | A comma delimited list of your platform’s unique IDs for users.
    String platformBusinessIds = "12345,67890"; // String | A comma delimited list of your platform’s unique business IDs for users.
    String businessIds = "ecdeda66-dbd6-461f-b4de-5049d317a27c,fec4606f-746d-456a-a27d-0baa7c17d3e3"; // String | A comma delimited list of your Kanmon’s unique business IDs for users.
    BigDecimal offset = new BigDecimal("0"); // BigDecimal | The number of records to skip when performing pagination. Defaults to `0`.
    BigDecimal limit = new BigDecimal("100"); // BigDecimal | The number of records to limit when performing pagination. Defaults to `100`, which is the max.
    String createdAtStart = "2022-06-01T03:57:26.115Z"; // String | Filter for records where `createdAt` is greater than or equal to this value. ISO 8601 format.
    String createdAtEnd = "2022-06-01T03:57:26.115Z"; // String | Filter for records where `createdAt` is less than or equal to this value. ISO 8601 format.
    try {
      GetUsersResponse result = apiInstance.getUsers(ids, platformUserIds, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UsersApi#getUsers");
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
| **ids** | **String**| A comma delimited list of Kanmon’s unique IDs for users. | [optional] |
| **platformUserIds** | **String**| A comma delimited list of your platform’s unique IDs for users. | [optional] |
| **platformBusinessIds** | **String**| A comma delimited list of your platform’s unique business IDs for users. | [optional] |
| **businessIds** | **String**| A comma delimited list of your Kanmon’s unique business IDs for users. | [optional] |
| **offset** | **BigDecimal**| The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;. | [optional] |
| **limit** | **BigDecimal**| The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max. | [optional] |
| **createdAtStart** | **String**| Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format. | [optional] |
| **createdAtEnd** | **String**| Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format. | [optional] |

### Return type

[**GetUsersResponse**](GetUsersResponse.md)

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

<a id="mergeUserIntoBusiness"></a>
# **mergeUserIntoBusiness**
> MergeUsersResponseBody mergeUserIntoBusiness(mergeUsersRequestBody)

Merge users from a source business into a target business

Users from the source business will be moved into the target business. This will only work if the source business has not started onboarding yet. After the merge, the source business will be deleted.

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.UsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    UsersApi apiInstance = new UsersApi(defaultClient);
    MergeUsersRequestBody mergeUsersRequestBody = new MergeUsersRequestBody(); // MergeUsersRequestBody | 
    try {
      MergeUsersResponseBody result = apiInstance.mergeUserIntoBusiness(mergeUsersRequestBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UsersApi#mergeUserIntoBusiness");
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
| **mergeUsersRequestBody** | [**MergeUsersRequestBody**](MergeUsersRequestBody.md)|  | |

### Return type

[**MergeUsersResponseBody**](MergeUsersResponseBody.md)

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
| **409** | PrimaryBusinessOwnerAlreadyExistsForBusinessException |  -  |
| **500** | InternalServerErrorException |  -  |

<a id="updateUser"></a>
# **updateUser**
> User updateUser(id, updateUserRequestBody, idType)

Update a user

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.UsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    UsersApi apiInstance = new UsersApi(defaultClient);
    String id = "60eaa08c-f7a5-4f3a-860d-a16dde5771d6"; // String | Either the Kanmon user UUID or your platform’s user ID, depending on `idType`.
    UpdateUserRequestBody updateUserRequestBody = new UpdateUserRequestBody(); // UpdateUserRequestBody | 
    String idType = "KANMON"; // String | Which ID type to query the user by. Defaults to `KANMON`. Use `PLATFORM` if you want to query by your platform’s ID.
    try {
      User result = apiInstance.updateUser(id, updateUserRequestBody, idType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UsersApi#updateUser");
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
| **id** | **String**| Either the Kanmon user UUID or your platform’s user ID, depending on &#x60;idType&#x60;. | |
| **updateUserRequestBody** | [**UpdateUserRequestBody**](UpdateUserRequestBody.md)|  | |
| **idType** | **String**| Which ID type to query the user by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID. | [optional] [enum: KANMON, PLATFORM] |

### Return type

[**User**](User.md)

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
| **404** | UserNotFoundException |  -  |
| **409** | UserAlreadyExistsWithEmailException, PrimaryBusinessOwnerAlreadyExistsForBusinessException |  -  |
| **500** | InternalServerErrorException |  -  |

