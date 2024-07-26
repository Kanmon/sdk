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
import com.kanmon.client.model.ActivityLog;
import com.kanmon.client.model.PaginationResult;
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
 * GetActivityLogsResponse
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-07-26T14:34:18.978357-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class GetActivityLogsResponse {
  public static final String SERIALIZED_NAME_ACTIVITY_LOGS = "activityLogs";
  @SerializedName(SERIALIZED_NAME_ACTIVITY_LOGS)
  private List<ActivityLog> activityLogs = new ArrayList<>();

  public static final String SERIALIZED_NAME_PAGINATION = "pagination";
  @SerializedName(SERIALIZED_NAME_PAGINATION)
  private PaginationResult pagination;

  public GetActivityLogsResponse() {
  }

  public GetActivityLogsResponse activityLogs(List<ActivityLog> activityLogs) {
    this.activityLogs = activityLogs;
    return this;
  }

  public GetActivityLogsResponse addActivityLogsItem(ActivityLog activityLogsItem) {
    if (this.activityLogs == null) {
      this.activityLogs = new ArrayList<>();
    }
    this.activityLogs.add(activityLogsItem);
    return this;
  }

   /**
   * An array of activity logs.
   * @return activityLogs
  **/
  @javax.annotation.Nonnull
  public List<ActivityLog> getActivityLogs() {
    return activityLogs;
  }

  public void setActivityLogs(List<ActivityLog> activityLogs) {
    this.activityLogs = activityLogs;
  }


  public GetActivityLogsResponse pagination(PaginationResult pagination) {
    this.pagination = pagination;
    return this;
  }

   /**
   * Pagination metadata.
   * @return pagination
  **/
  @javax.annotation.Nonnull
  public PaginationResult getPagination() {
    return pagination;
  }

  public void setPagination(PaginationResult pagination) {
    this.pagination = pagination;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetActivityLogsResponse getActivityLogsResponse = (GetActivityLogsResponse) o;
    return Objects.equals(this.activityLogs, getActivityLogsResponse.activityLogs) &&
        Objects.equals(this.pagination, getActivityLogsResponse.pagination);
  }

  @Override
  public int hashCode() {
    return Objects.hash(activityLogs, pagination);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetActivityLogsResponse {\n");
    sb.append("    activityLogs: ").append(toIndentedString(activityLogs)).append("\n");
    sb.append("    pagination: ").append(toIndentedString(pagination)).append("\n");
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
    openapiFields.add("activityLogs");
    openapiFields.add("pagination");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("activityLogs");
    openapiRequiredFields.add("pagination");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to GetActivityLogsResponse
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!GetActivityLogsResponse.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in GetActivityLogsResponse is not found in the empty JSON string", GetActivityLogsResponse.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!GetActivityLogsResponse.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `GetActivityLogsResponse` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : GetActivityLogsResponse.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the json data is an array
      if (!jsonObj.get("activityLogs").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `activityLogs` to be an array in the JSON string but got `%s`", jsonObj.get("activityLogs").toString()));
      }

      JsonArray jsonArrayactivityLogs = jsonObj.getAsJsonArray("activityLogs");
      // validate the required field `activityLogs` (array)
      for (int i = 0; i < jsonArrayactivityLogs.size(); i++) {
        ActivityLog.validateJsonElement(jsonArrayactivityLogs.get(i));
      };
      // validate the required field `pagination`
      PaginationResult.validateJsonElement(jsonObj.get("pagination"));
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!GetActivityLogsResponse.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'GetActivityLogsResponse' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<GetActivityLogsResponse> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(GetActivityLogsResponse.class));

       return (TypeAdapter<T>) new TypeAdapter<GetActivityLogsResponse>() {
           @Override
           public void write(JsonWriter out, GetActivityLogsResponse value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public GetActivityLogsResponse read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of GetActivityLogsResponse given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of GetActivityLogsResponse
  * @throws IOException if the JSON string is invalid with respect to GetActivityLogsResponse
  */
  public static GetActivityLogsResponse fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, GetActivityLogsResponse.class);
  }

 /**
  * Convert an instance of GetActivityLogsResponse to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

