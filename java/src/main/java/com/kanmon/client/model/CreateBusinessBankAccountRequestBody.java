/*
 * Kanmon Public V2 API
 * Kanmon's public api. Contains all of the endpoints for both capital providers and platforms
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.kanmon.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.kanmon.client.JSON;

/**
 * CreateBusinessBankAccountRequestBody
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-07-31T15:58:38.669848-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class CreateBusinessBankAccountRequestBody {
  public static final String SERIALIZED_NAME_PLATFORM_BUSINESS_ID = "platformBusinessId";
  @SerializedName(SERIALIZED_NAME_PLATFORM_BUSINESS_ID)
  private String platformBusinessId;

  public static final String SERIALIZED_NAME_BUSINESS_ID = "businessId";
  @SerializedName(SERIALIZED_NAME_BUSINESS_ID)
  private String businessId;

  public static final String SERIALIZED_NAME_PLATFORM_BANK_ACCOUNT_ID = "platformBankAccountId";
  @SerializedName(SERIALIZED_NAME_PLATFORM_BANK_ACCOUNT_ID)
  private String platformBankAccountId;

  public static final String SERIALIZED_NAME_ACCOUNT_NAME = "accountName";
  @SerializedName(SERIALIZED_NAME_ACCOUNT_NAME)
  private String accountName;

  public static final String SERIALIZED_NAME_ACCOUNT_NUMBER = "accountNumber";
  @SerializedName(SERIALIZED_NAME_ACCOUNT_NUMBER)
  private String accountNumber;

  public static final String SERIALIZED_NAME_ROUTING_NUMBER = "routingNumber";
  @SerializedName(SERIALIZED_NAME_ROUTING_NUMBER)
  private String routingNumber;

  /**
   * The bank account’s type. Currently, we only support checking accounts. We may support others in the future.
   */
  @JsonAdapter(AccountTypeEnum.Adapter.class)
  public enum AccountTypeEnum {
    CHECKING("CHECKING");

    private String value;

    AccountTypeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static AccountTypeEnum fromValue(String value) {
      for (AccountTypeEnum b : AccountTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<AccountTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final AccountTypeEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public AccountTypeEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return AccountTypeEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      AccountTypeEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_ACCOUNT_TYPE = "accountType";
  @SerializedName(SERIALIZED_NAME_ACCOUNT_TYPE)
  private AccountTypeEnum accountType;

  /**
   * Gets or Sets roles
   */
  @JsonAdapter(RolesEnum.Adapter.class)
  public enum RolesEnum {
    DISBURSEMENT("DISBURSEMENT");

    private String value;

    RolesEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static RolesEnum fromValue(String value) {
      for (RolesEnum b : RolesEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<RolesEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final RolesEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public RolesEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return RolesEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      RolesEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_ROLES = "roles";
  @SerializedName(SERIALIZED_NAME_ROLES)
  private List<RolesEnum> roles = new ArrayList<>();

  public CreateBusinessBankAccountRequestBody() {
  }

  public CreateBusinessBankAccountRequestBody platformBusinessId(String platformBusinessId) {
    this.platformBusinessId = platformBusinessId;
    return this;
  }

   /**
   * Your platform’s unique business ID for the business. Either &#x60;platformBusinessId&#x60; or &#x60;businessId&#x60; is required.
   * @return platformBusinessId
  **/
  @javax.annotation.Nullable
  public String getPlatformBusinessId() {
    return platformBusinessId;
  }

  public void setPlatformBusinessId(String platformBusinessId) {
    this.platformBusinessId = platformBusinessId;
  }


  public CreateBusinessBankAccountRequestBody businessId(String businessId) {
    this.businessId = businessId;
    return this;
  }

   /**
   * The UUID representing the user’s business in Kanmon. Either &#x60;platformBusinessId&#x60; or &#x60;businessId&#x60; is required.
   * @return businessId
  **/
  @javax.annotation.Nullable
  public String getBusinessId() {
    return businessId;
  }

  public void setBusinessId(String businessId) {
    this.businessId = businessId;
  }


  public CreateBusinessBankAccountRequestBody platformBankAccountId(String platformBankAccountId) {
    this.platformBankAccountId = platformBankAccountId;
    return this;
  }

   /**
   * Your platform’s unique ID for the bank account.
   * @return platformBankAccountId
  **/
  @javax.annotation.Nonnull
  public String getPlatformBankAccountId() {
    return platformBankAccountId;
  }

  public void setPlatformBankAccountId(String platformBankAccountId) {
    this.platformBankAccountId = platformBankAccountId;
  }


  public CreateBusinessBankAccountRequestBody accountName(String accountName) {
    this.accountName = accountName;
    return this;
  }

   /**
   * The business defined bank account name.
   * @return accountName
  **/
  @javax.annotation.Nonnull
  public String getAccountName() {
    return accountName;
  }

  public void setAccountName(String accountName) {
    this.accountName = accountName;
  }


  public CreateBusinessBankAccountRequestBody accountNumber(String accountNumber) {
    this.accountNumber = accountNumber;
    return this;
  }

   /**
   * The business’s bank account number. Only digits, no formatting.
   * @return accountNumber
  **/
  @javax.annotation.Nonnull
  public String getAccountNumber() {
    return accountNumber;
  }

  public void setAccountNumber(String accountNumber) {
    this.accountNumber = accountNumber;
  }


  public CreateBusinessBankAccountRequestBody routingNumber(String routingNumber) {
    this.routingNumber = routingNumber;
    return this;
  }

   /**
   * The business’s bank routing number. Should be a 9 digits number, no formatting.
   * @return routingNumber
  **/
  @javax.annotation.Nonnull
  public String getRoutingNumber() {
    return routingNumber;
  }

  public void setRoutingNumber(String routingNumber) {
    this.routingNumber = routingNumber;
  }


  public CreateBusinessBankAccountRequestBody accountType(AccountTypeEnum accountType) {
    this.accountType = accountType;
    return this;
  }

   /**
   * The bank account’s type. Currently, we only support checking accounts. We may support others in the future.
   * @return accountType
  **/
  @javax.annotation.Nonnull
  public AccountTypeEnum getAccountType() {
    return accountType;
  }

  public void setAccountType(AccountTypeEnum accountType) {
    this.accountType = accountType;
  }


  public CreateBusinessBankAccountRequestBody roles(List<RolesEnum> roles) {
    this.roles = roles;
    return this;
  }

  public CreateBusinessBankAccountRequestBody addRolesItem(RolesEnum rolesItem) {
    if (this.roles == null) {
      this.roles = new ArrayList<>();
    }
    this.roles.add(rolesItem);
    return this;
  }

   /**
   * The bank account’s roles. Currently, we only support creating disbursement bank account. We may support others in the future.
   * @return roles
  **/
  @javax.annotation.Nonnull
  public List<RolesEnum> getRoles() {
    return roles;
  }

  public void setRoles(List<RolesEnum> roles) {
    this.roles = roles;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateBusinessBankAccountRequestBody createBusinessBankAccountRequestBody = (CreateBusinessBankAccountRequestBody) o;
    return Objects.equals(this.platformBusinessId, createBusinessBankAccountRequestBody.platformBusinessId) &&
        Objects.equals(this.businessId, createBusinessBankAccountRequestBody.businessId) &&
        Objects.equals(this.platformBankAccountId, createBusinessBankAccountRequestBody.platformBankAccountId) &&
        Objects.equals(this.accountName, createBusinessBankAccountRequestBody.accountName) &&
        Objects.equals(this.accountNumber, createBusinessBankAccountRequestBody.accountNumber) &&
        Objects.equals(this.routingNumber, createBusinessBankAccountRequestBody.routingNumber) &&
        Objects.equals(this.accountType, createBusinessBankAccountRequestBody.accountType) &&
        Objects.equals(this.roles, createBusinessBankAccountRequestBody.roles);
  }

  @Override
  public int hashCode() {
    return Objects.hash(platformBusinessId, businessId, platformBankAccountId, accountName, accountNumber, routingNumber, accountType, roles);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateBusinessBankAccountRequestBody {\n");
    sb.append("    platformBusinessId: ").append(toIndentedString(platformBusinessId)).append("\n");
    sb.append("    businessId: ").append(toIndentedString(businessId)).append("\n");
    sb.append("    platformBankAccountId: ").append(toIndentedString(platformBankAccountId)).append("\n");
    sb.append("    accountName: ").append(toIndentedString(accountName)).append("\n");
    sb.append("    accountNumber: ").append(toIndentedString(accountNumber)).append("\n");
    sb.append("    routingNumber: ").append(toIndentedString(routingNumber)).append("\n");
    sb.append("    accountType: ").append(toIndentedString(accountType)).append("\n");
    sb.append("    roles: ").append(toIndentedString(roles)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("platformBusinessId");
    openapiFields.add("businessId");
    openapiFields.add("platformBankAccountId");
    openapiFields.add("accountName");
    openapiFields.add("accountNumber");
    openapiFields.add("routingNumber");
    openapiFields.add("accountType");
    openapiFields.add("roles");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("platformBankAccountId");
    openapiRequiredFields.add("accountName");
    openapiRequiredFields.add("accountNumber");
    openapiRequiredFields.add("routingNumber");
    openapiRequiredFields.add("accountType");
    openapiRequiredFields.add("roles");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to CreateBusinessBankAccountRequestBody
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!CreateBusinessBankAccountRequestBody.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in CreateBusinessBankAccountRequestBody is not found in the empty JSON string", CreateBusinessBankAccountRequestBody.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!CreateBusinessBankAccountRequestBody.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `CreateBusinessBankAccountRequestBody` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : CreateBusinessBankAccountRequestBody.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("platformBusinessId") != null && !jsonObj.get("platformBusinessId").isJsonNull()) && !jsonObj.get("platformBusinessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `platformBusinessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("platformBusinessId").toString()));
      }
      if ((jsonObj.get("businessId") != null && !jsonObj.get("businessId").isJsonNull()) && !jsonObj.get("businessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `businessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("businessId").toString()));
      }
      if (!jsonObj.get("platformBankAccountId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `platformBankAccountId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("platformBankAccountId").toString()));
      }
      if (!jsonObj.get("accountName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `accountName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("accountName").toString()));
      }
      if (!jsonObj.get("accountNumber").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `accountNumber` to be a primitive type in the JSON string but got `%s`", jsonObj.get("accountNumber").toString()));
      }
      if (!jsonObj.get("routingNumber").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `routingNumber` to be a primitive type in the JSON string but got `%s`", jsonObj.get("routingNumber").toString()));
      }
      if (!jsonObj.get("accountType").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `accountType` to be a primitive type in the JSON string but got `%s`", jsonObj.get("accountType").toString()));
      }
      // validate the required field `accountType`
      AccountTypeEnum.validateJsonElement(jsonObj.get("accountType"));
      // ensure the required json array is present
      if (jsonObj.get("roles") == null) {
        throw new IllegalArgumentException("Expected the field `linkedContent` to be an array in the JSON string but got `null`");
      } else if (!jsonObj.get("roles").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `roles` to be an array in the JSON string but got `%s`", jsonObj.get("roles").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!CreateBusinessBankAccountRequestBody.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'CreateBusinessBankAccountRequestBody' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<CreateBusinessBankAccountRequestBody> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(CreateBusinessBankAccountRequestBody.class));

       return (TypeAdapter<T>) new TypeAdapter<CreateBusinessBankAccountRequestBody>() {
           @Override
           public void write(JsonWriter out, CreateBusinessBankAccountRequestBody value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public CreateBusinessBankAccountRequestBody read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of CreateBusinessBankAccountRequestBody given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of CreateBusinessBankAccountRequestBody
  * @throws IOException if the JSON string is invalid with respect to CreateBusinessBankAccountRequestBody
  */
  public static CreateBusinessBankAccountRequestBody fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, CreateBusinessBankAccountRequestBody.class);
  }

 /**
  * Convert an instance of CreateBusinessBankAccountRequestBody to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

