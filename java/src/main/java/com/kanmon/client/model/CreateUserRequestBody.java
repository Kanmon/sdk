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
import com.kanmon.client.model.Address;
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
 * CreateUserRequestBody
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-07-15T15:34:24.061123-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class CreateUserRequestBody {
  public static final String SERIALIZED_NAME_PLATFORM_USER_ID = "platformUserId";
  @SerializedName(SERIALIZED_NAME_PLATFORM_USER_ID)
  private String platformUserId;

  public static final String SERIALIZED_NAME_PLATFORM_BUSINESS_ID = "platformBusinessId";
  @SerializedName(SERIALIZED_NAME_PLATFORM_BUSINESS_ID)
  private String platformBusinessId;

  public static final String SERIALIZED_NAME_BUSINESS_ID = "businessId";
  @SerializedName(SERIALIZED_NAME_BUSINESS_ID)
  private String businessId;

  public static final String SERIALIZED_NAME_EMAIL = "email";
  @SerializedName(SERIALIZED_NAME_EMAIL)
  private String email;

  public static final String SERIALIZED_NAME_FIRST_NAME = "firstName";
  @SerializedName(SERIALIZED_NAME_FIRST_NAME)
  private String firstName;

  public static final String SERIALIZED_NAME_LAST_NAME = "lastName";
  @SerializedName(SERIALIZED_NAME_LAST_NAME)
  private String lastName;

  public static final String SERIALIZED_NAME_ADDRESS = "address";
  @SerializedName(SERIALIZED_NAME_ADDRESS)
  private Address address;

  /**
   * Gets or Sets roles
   */
  @JsonAdapter(RolesEnum.Adapter.class)
  public enum RolesEnum {
    PRIMARY_OWNER("PRIMARY_OWNER"),
    
    OPERATOR("OPERATOR");

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

  public static final String SERIALIZED_NAME_METADATA = "metadata";
  @SerializedName(SERIALIZED_NAME_METADATA)
  private Object metadata;

  public CreateUserRequestBody() {
  }

  public CreateUserRequestBody platformUserId(String platformUserId) {
    this.platformUserId = platformUserId;
    return this;
  }

   /**
   * Your platform’s unique ID for the user.
   * @return platformUserId
  **/
  @javax.annotation.Nonnull
  public String getPlatformUserId() {
    return platformUserId;
  }

  public void setPlatformUserId(String platformUserId) {
    this.platformUserId = platformUserId;
  }


  public CreateUserRequestBody platformBusinessId(String platformBusinessId) {
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


  public CreateUserRequestBody businessId(String businessId) {
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


  public CreateUserRequestBody email(String email) {
    this.email = email;
    return this;
  }

   /**
   * The user’s email.
   * @return email
  **/
  @javax.annotation.Nullable
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }


  public CreateUserRequestBody firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

   /**
   * The user’s first name.
   * @return firstName
  **/
  @javax.annotation.Nullable
  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }


  public CreateUserRequestBody lastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

   /**
   * The user’s last name.
   * @return lastName
  **/
  @javax.annotation.Nullable
  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }


  public CreateUserRequestBody address(Address address) {
    this.address = address;
    return this;
  }

   /**
   * The user’s address.
   * @return address
  **/
  @javax.annotation.Nullable
  public Address getAddress() {
    return address;
  }

  public void setAddress(Address address) {
    this.address = address;
  }


  public CreateUserRequestBody roles(List<RolesEnum> roles) {
    this.roles = roles;
    return this;
  }

  public CreateUserRequestBody addRolesItem(RolesEnum rolesItem) {
    if (this.roles == null) {
      this.roles = new ArrayList<>();
    }
    this.roles.add(rolesItem);
    return this;
  }

   /**
   * The user’s roles. If no roles are defined, the user will be prompted to select a role within Kanmon. &lt;br/&gt;&lt;br/&gt;A primary owner is a user with the authority to issue debt on behalf of the business. &lt;br/&gt;This means the user can complete onboarding, receive offers, choose to accept offers, &lt;br/&gt;sign financing agreements, and service an active issued product. &lt;br/&gt;&lt;br/&gt;An operator is a user with permission to service an active issued product. Examples are uploading invoices on &lt;br/&gt;behalf of the business, checking the status of payments, etc. &lt;br /&gt;&lt;br/&gt;Please note Kanmon supports an additional user role called secondary owners. &lt;br/&gt;Secondary owners are beneficial owners of a business, like primary owners, and Kanmon &lt;br/&gt;must perform KYC checks for these users. Kanmon will handle creating and managing &lt;br/&gt;these users for KYC purposes through a separate process. &lt;br/&gt;
   * @return roles
  **/
  @javax.annotation.Nullable
  public List<RolesEnum> getRoles() {
    return roles;
  }

  public void setRoles(List<RolesEnum> roles) {
    this.roles = roles;
  }


  public CreateUserRequestBody metadata(Object metadata) {
    this.metadata = metadata;
    return this;
  }

   /**
   * Metadata from your system that you want to associate the user with.
   * @return metadata
  **/
  @javax.annotation.Nullable
  public Object getMetadata() {
    return metadata;
  }

  public void setMetadata(Object metadata) {
    this.metadata = metadata;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateUserRequestBody createUserRequestBody = (CreateUserRequestBody) o;
    return Objects.equals(this.platformUserId, createUserRequestBody.platformUserId) &&
        Objects.equals(this.platformBusinessId, createUserRequestBody.platformBusinessId) &&
        Objects.equals(this.businessId, createUserRequestBody.businessId) &&
        Objects.equals(this.email, createUserRequestBody.email) &&
        Objects.equals(this.firstName, createUserRequestBody.firstName) &&
        Objects.equals(this.lastName, createUserRequestBody.lastName) &&
        Objects.equals(this.address, createUserRequestBody.address) &&
        Objects.equals(this.roles, createUserRequestBody.roles) &&
        Objects.equals(this.metadata, createUserRequestBody.metadata);
  }

  @Override
  public int hashCode() {
    return Objects.hash(platformUserId, platformBusinessId, businessId, email, firstName, lastName, address, roles, metadata);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateUserRequestBody {\n");
    sb.append("    platformUserId: ").append(toIndentedString(platformUserId)).append("\n");
    sb.append("    platformBusinessId: ").append(toIndentedString(platformBusinessId)).append("\n");
    sb.append("    businessId: ").append(toIndentedString(businessId)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    roles: ").append(toIndentedString(roles)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
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
    openapiFields.add("platformUserId");
    openapiFields.add("platformBusinessId");
    openapiFields.add("businessId");
    openapiFields.add("email");
    openapiFields.add("firstName");
    openapiFields.add("lastName");
    openapiFields.add("address");
    openapiFields.add("roles");
    openapiFields.add("metadata");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("platformUserId");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to CreateUserRequestBody
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!CreateUserRequestBody.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in CreateUserRequestBody is not found in the empty JSON string", CreateUserRequestBody.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!CreateUserRequestBody.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `CreateUserRequestBody` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : CreateUserRequestBody.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("platformUserId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `platformUserId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("platformUserId").toString()));
      }
      if ((jsonObj.get("platformBusinessId") != null && !jsonObj.get("platformBusinessId").isJsonNull()) && !jsonObj.get("platformBusinessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `platformBusinessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("platformBusinessId").toString()));
      }
      if ((jsonObj.get("businessId") != null && !jsonObj.get("businessId").isJsonNull()) && !jsonObj.get("businessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `businessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("businessId").toString()));
      }
      if ((jsonObj.get("email") != null && !jsonObj.get("email").isJsonNull()) && !jsonObj.get("email").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `email` to be a primitive type in the JSON string but got `%s`", jsonObj.get("email").toString()));
      }
      if ((jsonObj.get("firstName") != null && !jsonObj.get("firstName").isJsonNull()) && !jsonObj.get("firstName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `firstName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("firstName").toString()));
      }
      if ((jsonObj.get("lastName") != null && !jsonObj.get("lastName").isJsonNull()) && !jsonObj.get("lastName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `lastName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("lastName").toString()));
      }
      // validate the optional field `address`
      if (jsonObj.get("address") != null && !jsonObj.get("address").isJsonNull()) {
        Address.validateJsonElement(jsonObj.get("address"));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("roles") != null && !jsonObj.get("roles").isJsonNull() && !jsonObj.get("roles").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `roles` to be an array in the JSON string but got `%s`", jsonObj.get("roles").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!CreateUserRequestBody.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'CreateUserRequestBody' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<CreateUserRequestBody> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(CreateUserRequestBody.class));

       return (TypeAdapter<T>) new TypeAdapter<CreateUserRequestBody>() {
           @Override
           public void write(JsonWriter out, CreateUserRequestBody value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public CreateUserRequestBody read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of CreateUserRequestBody given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of CreateUserRequestBody
  * @throws IOException if the JSON string is invalid with respect to CreateUserRequestBody
  */
  public static CreateUserRequestBody fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, CreateUserRequestBody.class);
  }

 /**
  * Convert an instance of CreateUserRequestBody to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

