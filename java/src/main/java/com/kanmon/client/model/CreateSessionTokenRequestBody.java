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
import com.kanmon.client.model.CreateSessionTokenRequestBodyData;
import java.io.IOException;
import java.util.Arrays;

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
 * CreateSessionTokenRequestBody
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-08-02T17:11:18.940267-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class CreateSessionTokenRequestBody {
  public static final String SERIALIZED_NAME_BUSINESS_ID = "businessId";
  @SerializedName(SERIALIZED_NAME_BUSINESS_ID)
  private String businessId;

  public static final String SERIALIZED_NAME_PLATFORM_BUSINESS_ID = "platformBusinessId";
  @SerializedName(SERIALIZED_NAME_PLATFORM_BUSINESS_ID)
  private String platformBusinessId;

  public static final String SERIALIZED_NAME_DATA = "data";
  @SerializedName(SERIALIZED_NAME_DATA)
  private CreateSessionTokenRequestBodyData data;

  public CreateSessionTokenRequestBody() {
  }

  public CreateSessionTokenRequestBody businessId(String businessId) {
    this.businessId = businessId;
    return this;
  }

   /**
   * The unique identifier for business in our system. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
   * @return businessId
  **/
  @javax.annotation.Nullable
  public String getBusinessId() {
    return businessId;
  }

  public void setBusinessId(String businessId) {
    this.businessId = businessId;
  }


  public CreateSessionTokenRequestBody platformBusinessId(String platformBusinessId) {
    this.platformBusinessId = platformBusinessId;
    return this;
  }

   /**
   * The unique identifier for business in your platform. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
   * @return platformBusinessId
  **/
  @javax.annotation.Nullable
  public String getPlatformBusinessId() {
    return platformBusinessId;
  }

  public void setPlatformBusinessId(String platformBusinessId) {
    this.platformBusinessId = platformBusinessId;
  }


  public CreateSessionTokenRequestBody data(CreateSessionTokenRequestBodyData data) {
    this.data = data;
    return this;
  }

   /**
   * Get data
   * @return data
  **/
  @javax.annotation.Nonnull
  public CreateSessionTokenRequestBodyData getData() {
    return data;
  }

  public void setData(CreateSessionTokenRequestBodyData data) {
    this.data = data;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateSessionTokenRequestBody createSessionTokenRequestBody = (CreateSessionTokenRequestBody) o;
    return Objects.equals(this.businessId, createSessionTokenRequestBody.businessId) &&
        Objects.equals(this.platformBusinessId, createSessionTokenRequestBody.platformBusinessId) &&
        Objects.equals(this.data, createSessionTokenRequestBody.data);
  }

  @Override
  public int hashCode() {
    return Objects.hash(businessId, platformBusinessId, data);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateSessionTokenRequestBody {\n");
    sb.append("    businessId: ").append(toIndentedString(businessId)).append("\n");
    sb.append("    platformBusinessId: ").append(toIndentedString(platformBusinessId)).append("\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
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
    openapiFields.add("businessId");
    openapiFields.add("platformBusinessId");
    openapiFields.add("data");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("data");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to CreateSessionTokenRequestBody
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!CreateSessionTokenRequestBody.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in CreateSessionTokenRequestBody is not found in the empty JSON string", CreateSessionTokenRequestBody.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!CreateSessionTokenRequestBody.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `CreateSessionTokenRequestBody` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : CreateSessionTokenRequestBody.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("businessId") != null && !jsonObj.get("businessId").isJsonNull()) && !jsonObj.get("businessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `businessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("businessId").toString()));
      }
      if ((jsonObj.get("platformBusinessId") != null && !jsonObj.get("platformBusinessId").isJsonNull()) && !jsonObj.get("platformBusinessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `platformBusinessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("platformBusinessId").toString()));
      }
      // validate the required field `data`
      CreateSessionTokenRequestBodyData.validateJsonElement(jsonObj.get("data"));
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!CreateSessionTokenRequestBody.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'CreateSessionTokenRequestBody' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<CreateSessionTokenRequestBody> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(CreateSessionTokenRequestBody.class));

       return (TypeAdapter<T>) new TypeAdapter<CreateSessionTokenRequestBody>() {
           @Override
           public void write(JsonWriter out, CreateSessionTokenRequestBody value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public CreateSessionTokenRequestBody read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of CreateSessionTokenRequestBody given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of CreateSessionTokenRequestBody
  * @throws IOException if the JSON string is invalid with respect to CreateSessionTokenRequestBody
  */
  public static CreateSessionTokenRequestBody fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, CreateSessionTokenRequestBody.class);
  }

 /**
  * Convert an instance of CreateSessionTokenRequestBody to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

