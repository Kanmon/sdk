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
 * MergeUsersRequestBody
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-08-02T17:11:18.940267-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class MergeUsersRequestBody {
  public static final String SERIALIZED_NAME_SOURCE_PLATFORM_BUSINESS_ID = "sourcePlatformBusinessId";
  @SerializedName(SERIALIZED_NAME_SOURCE_PLATFORM_BUSINESS_ID)
  private String sourcePlatformBusinessId;

  public static final String SERIALIZED_NAME_SOURCE_BUSINESS_ID = "sourceBusinessId";
  @SerializedName(SERIALIZED_NAME_SOURCE_BUSINESS_ID)
  private String sourceBusinessId;

  public static final String SERIALIZED_NAME_TARGET_PLATFORM_BUSINESS_ID = "targetPlatformBusinessId";
  @SerializedName(SERIALIZED_NAME_TARGET_PLATFORM_BUSINESS_ID)
  private String targetPlatformBusinessId;

  public static final String SERIALIZED_NAME_TARGET_BUSINESS_ID = "targetBusinessId";
  @SerializedName(SERIALIZED_NAME_TARGET_BUSINESS_ID)
  private String targetBusinessId;

  public MergeUsersRequestBody() {
  }

  public MergeUsersRequestBody sourcePlatformBusinessId(String sourcePlatformBusinessId) {
    this.sourcePlatformBusinessId = sourcePlatformBusinessId;
    return this;
  }

   /**
   * Your platform’s unique business ID for the business to merge users from. Either &#x60;sourcePlatformBusinessId&#x60; or &#x60;sourceBusinessId&#x60; is required.
   * @return sourcePlatformBusinessId
  **/
  @javax.annotation.Nullable
  public String getSourcePlatformBusinessId() {
    return sourcePlatformBusinessId;
  }

  public void setSourcePlatformBusinessId(String sourcePlatformBusinessId) {
    this.sourcePlatformBusinessId = sourcePlatformBusinessId;
  }


  public MergeUsersRequestBody sourceBusinessId(String sourceBusinessId) {
    this.sourceBusinessId = sourceBusinessId;
    return this;
  }

   /**
   * The UUID representing the business in Kanmon to merge users from. Either &#x60;sourcePlatformBusinessId&#x60; or &#x60;sourceBusinessId&#x60; is required.
   * @return sourceBusinessId
  **/
  @javax.annotation.Nullable
  public String getSourceBusinessId() {
    return sourceBusinessId;
  }

  public void setSourceBusinessId(String sourceBusinessId) {
    this.sourceBusinessId = sourceBusinessId;
  }


  public MergeUsersRequestBody targetPlatformBusinessId(String targetPlatformBusinessId) {
    this.targetPlatformBusinessId = targetPlatformBusinessId;
    return this;
  }

   /**
   * Your platform’s unique business ID for the business to merge users to. Either &#x60;targetPlatformBusinessId&#x60; or &#x60;targetBusinessId&#x60; is required.
   * @return targetPlatformBusinessId
  **/
  @javax.annotation.Nullable
  public String getTargetPlatformBusinessId() {
    return targetPlatformBusinessId;
  }

  public void setTargetPlatformBusinessId(String targetPlatformBusinessId) {
    this.targetPlatformBusinessId = targetPlatformBusinessId;
  }


  public MergeUsersRequestBody targetBusinessId(String targetBusinessId) {
    this.targetBusinessId = targetBusinessId;
    return this;
  }

   /**
   * The UUID representing the business in Kanmon to merge users to. Either &#x60;targetPlatformBusinessId&#x60; or &#x60;targetBusinessId&#x60; is required.
   * @return targetBusinessId
  **/
  @javax.annotation.Nullable
  public String getTargetBusinessId() {
    return targetBusinessId;
  }

  public void setTargetBusinessId(String targetBusinessId) {
    this.targetBusinessId = targetBusinessId;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MergeUsersRequestBody mergeUsersRequestBody = (MergeUsersRequestBody) o;
    return Objects.equals(this.sourcePlatformBusinessId, mergeUsersRequestBody.sourcePlatformBusinessId) &&
        Objects.equals(this.sourceBusinessId, mergeUsersRequestBody.sourceBusinessId) &&
        Objects.equals(this.targetPlatformBusinessId, mergeUsersRequestBody.targetPlatformBusinessId) &&
        Objects.equals(this.targetBusinessId, mergeUsersRequestBody.targetBusinessId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(sourcePlatformBusinessId, sourceBusinessId, targetPlatformBusinessId, targetBusinessId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MergeUsersRequestBody {\n");
    sb.append("    sourcePlatformBusinessId: ").append(toIndentedString(sourcePlatformBusinessId)).append("\n");
    sb.append("    sourceBusinessId: ").append(toIndentedString(sourceBusinessId)).append("\n");
    sb.append("    targetPlatformBusinessId: ").append(toIndentedString(targetPlatformBusinessId)).append("\n");
    sb.append("    targetBusinessId: ").append(toIndentedString(targetBusinessId)).append("\n");
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
    openapiFields.add("sourcePlatformBusinessId");
    openapiFields.add("sourceBusinessId");
    openapiFields.add("targetPlatformBusinessId");
    openapiFields.add("targetBusinessId");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to MergeUsersRequestBody
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!MergeUsersRequestBody.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in MergeUsersRequestBody is not found in the empty JSON string", MergeUsersRequestBody.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!MergeUsersRequestBody.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `MergeUsersRequestBody` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("sourcePlatformBusinessId") != null && !jsonObj.get("sourcePlatformBusinessId").isJsonNull()) && !jsonObj.get("sourcePlatformBusinessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `sourcePlatformBusinessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("sourcePlatformBusinessId").toString()));
      }
      if ((jsonObj.get("sourceBusinessId") != null && !jsonObj.get("sourceBusinessId").isJsonNull()) && !jsonObj.get("sourceBusinessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `sourceBusinessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("sourceBusinessId").toString()));
      }
      if ((jsonObj.get("targetPlatformBusinessId") != null && !jsonObj.get("targetPlatformBusinessId").isJsonNull()) && !jsonObj.get("targetPlatformBusinessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `targetPlatformBusinessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("targetPlatformBusinessId").toString()));
      }
      if ((jsonObj.get("targetBusinessId") != null && !jsonObj.get("targetBusinessId").isJsonNull()) && !jsonObj.get("targetBusinessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `targetBusinessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("targetBusinessId").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!MergeUsersRequestBody.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'MergeUsersRequestBody' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<MergeUsersRequestBody> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(MergeUsersRequestBody.class));

       return (TypeAdapter<T>) new TypeAdapter<MergeUsersRequestBody>() {
           @Override
           public void write(JsonWriter out, MergeUsersRequestBody value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public MergeUsersRequestBody read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of MergeUsersRequestBody given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of MergeUsersRequestBody
  * @throws IOException if the JSON string is invalid with respect to MergeUsersRequestBody
  */
  public static MergeUsersRequestBody fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, MergeUsersRequestBody.class);
  }

 /**
  * Convert an instance of MergeUsersRequestBody to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

