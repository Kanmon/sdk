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
 * ActivityLog
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-07-26T19:00:57.767815-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class ActivityLog {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_BUSINESS_ID = "businessId";
  @SerializedName(SERIALIZED_NAME_BUSINESS_ID)
  private String businessId;

  public static final String SERIALIZED_NAME_PLATFORM_BUSINESS_ID = "platformBusinessId";
  @SerializedName(SERIALIZED_NAME_PLATFORM_BUSINESS_ID)
  private String platformBusinessId;

  public static final String SERIALIZED_NAME_PAYLOAD = "payload";
  @SerializedName(SERIALIZED_NAME_PAYLOAD)
  private Object payload;

  public static final String SERIALIZED_NAME_EVENT_TYPE = "eventType";
  @SerializedName(SERIALIZED_NAME_EVENT_TYPE)
  private String eventType;

  public static final String SERIALIZED_NAME_CREATED_AT = "createdAt";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private String createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updatedAt";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private String updatedAt;

  public ActivityLog() {
  }

  public ActivityLog id(String id) {
    this.id = id;
    return this;
  }

   /**
   * The UUID representing the activity log item in Kanmon.
   * @return id
  **/
  @javax.annotation.Nonnull
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public ActivityLog businessId(String businessId) {
    this.businessId = businessId;
    return this;
  }

   /**
   * The UUID representing the business in Kanmon.
   * @return businessId
  **/
  @javax.annotation.Nonnull
  public String getBusinessId() {
    return businessId;
  }

  public void setBusinessId(String businessId) {
    this.businessId = businessId;
  }


  public ActivityLog platformBusinessId(String platformBusinessId) {
    this.platformBusinessId = platformBusinessId;
    return this;
  }

   /**
   * Your platform’s unique business ID for the user.
   * @return platformBusinessId
  **/
  @javax.annotation.Nullable
  public String getPlatformBusinessId() {
    return platformBusinessId;
  }

  public void setPlatformBusinessId(String platformBusinessId) {
    this.platformBusinessId = platformBusinessId;
  }


  public ActivityLog payload(Object payload) {
    this.payload = payload;
    return this;
  }

   /**
   * Event details and schema: https://kanmon.dev/docs/webhook-events
   * @return payload
  **/
  @javax.annotation.Nonnull
  public Object getPayload() {
    return payload;
  }

  public void setPayload(Object payload) {
    this.payload = payload;
  }


  public ActivityLog eventType(String eventType) {
    this.eventType = eventType;
    return this;
  }

   /**
   * A description of the log event type.
   * @return eventType
  **/
  @javax.annotation.Nonnull
  public String getEventType() {
    return eventType;
  }

  public void setEventType(String eventType) {
    this.eventType = eventType;
  }


  public ActivityLog createdAt(String createdAt) {
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Creation UTC ISO 8601 timestamp of the business.
   * @return createdAt
  **/
  @javax.annotation.Nonnull
  public String getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }


  public ActivityLog updatedAt(String updatedAt) {
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Last updated UTC ISO 8601 timestamp of the business.
   * @return updatedAt
  **/
  @javax.annotation.Nonnull
  public String getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(String updatedAt) {
    this.updatedAt = updatedAt;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ActivityLog activityLog = (ActivityLog) o;
    return Objects.equals(this.id, activityLog.id) &&
        Objects.equals(this.businessId, activityLog.businessId) &&
        Objects.equals(this.platformBusinessId, activityLog.platformBusinessId) &&
        Objects.equals(this.payload, activityLog.payload) &&
        Objects.equals(this.eventType, activityLog.eventType) &&
        Objects.equals(this.createdAt, activityLog.createdAt) &&
        Objects.equals(this.updatedAt, activityLog.updatedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, businessId, platformBusinessId, payload, eventType, createdAt, updatedAt);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ActivityLog {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    businessId: ").append(toIndentedString(businessId)).append("\n");
    sb.append("    platformBusinessId: ").append(toIndentedString(platformBusinessId)).append("\n");
    sb.append("    payload: ").append(toIndentedString(payload)).append("\n");
    sb.append("    eventType: ").append(toIndentedString(eventType)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
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
    openapiFields.add("id");
    openapiFields.add("businessId");
    openapiFields.add("platformBusinessId");
    openapiFields.add("payload");
    openapiFields.add("eventType");
    openapiFields.add("createdAt");
    openapiFields.add("updatedAt");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("id");
    openapiRequiredFields.add("businessId");
    openapiRequiredFields.add("platformBusinessId");
    openapiRequiredFields.add("payload");
    openapiRequiredFields.add("eventType");
    openapiRequiredFields.add("createdAt");
    openapiRequiredFields.add("updatedAt");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to ActivityLog
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!ActivityLog.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in ActivityLog is not found in the empty JSON string", ActivityLog.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!ActivityLog.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `ActivityLog` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : ActivityLog.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("id").toString()));
      }
      if (!jsonObj.get("businessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `businessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("businessId").toString()));
      }
      if ((jsonObj.get("platformBusinessId") != null && !jsonObj.get("platformBusinessId").isJsonNull()) && !jsonObj.get("platformBusinessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `platformBusinessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("platformBusinessId").toString()));
      }
      if (!jsonObj.get("eventType").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `eventType` to be a primitive type in the JSON string but got `%s`", jsonObj.get("eventType").toString()));
      }
      if (!jsonObj.get("createdAt").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `createdAt` to be a primitive type in the JSON string but got `%s`", jsonObj.get("createdAt").toString()));
      }
      if (!jsonObj.get("updatedAt").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `updatedAt` to be a primitive type in the JSON string but got `%s`", jsonObj.get("updatedAt").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!ActivityLog.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'ActivityLog' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<ActivityLog> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(ActivityLog.class));

       return (TypeAdapter<T>) new TypeAdapter<ActivityLog>() {
           @Override
           public void write(JsonWriter out, ActivityLog value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public ActivityLog read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of ActivityLog given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of ActivityLog
  * @throws IOException if the JSON string is invalid with respect to ActivityLog
  */
  public static ActivityLog fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, ActivityLog.class);
  }

 /**
  * Convert an instance of ActivityLog to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

