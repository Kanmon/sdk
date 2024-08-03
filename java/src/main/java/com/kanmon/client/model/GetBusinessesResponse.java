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
import com.kanmon.client.model.Business;
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
 * GetBusinessesResponse
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-08-02T17:11:18.940267-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class GetBusinessesResponse {
  public static final String SERIALIZED_NAME_BUSINESSES = "businesses";
  @SerializedName(SERIALIZED_NAME_BUSINESSES)
  private List<Business> businesses = new ArrayList<>();

  public static final String SERIALIZED_NAME_PAGINATION = "pagination";
  @SerializedName(SERIALIZED_NAME_PAGINATION)
  private PaginationResult pagination;

  public GetBusinessesResponse() {
  }

  public GetBusinessesResponse businesses(List<Business> businesses) {
    this.businesses = businesses;
    return this;
  }

  public GetBusinessesResponse addBusinessesItem(Business businessesItem) {
    if (this.businesses == null) {
      this.businesses = new ArrayList<>();
    }
    this.businesses.add(businessesItem);
    return this;
  }

   /**
   * Array of businesses.
   * @return businesses
  **/
  @javax.annotation.Nonnull
  public List<Business> getBusinesses() {
    return businesses;
  }

  public void setBusinesses(List<Business> businesses) {
    this.businesses = businesses;
  }


  public GetBusinessesResponse pagination(PaginationResult pagination) {
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
    GetBusinessesResponse getBusinessesResponse = (GetBusinessesResponse) o;
    return Objects.equals(this.businesses, getBusinessesResponse.businesses) &&
        Objects.equals(this.pagination, getBusinessesResponse.pagination);
  }

  @Override
  public int hashCode() {
    return Objects.hash(businesses, pagination);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetBusinessesResponse {\n");
    sb.append("    businesses: ").append(toIndentedString(businesses)).append("\n");
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
    openapiFields.add("businesses");
    openapiFields.add("pagination");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("businesses");
    openapiRequiredFields.add("pagination");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to GetBusinessesResponse
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!GetBusinessesResponse.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in GetBusinessesResponse is not found in the empty JSON string", GetBusinessesResponse.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!GetBusinessesResponse.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `GetBusinessesResponse` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : GetBusinessesResponse.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the json data is an array
      if (!jsonObj.get("businesses").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `businesses` to be an array in the JSON string but got `%s`", jsonObj.get("businesses").toString()));
      }

      JsonArray jsonArraybusinesses = jsonObj.getAsJsonArray("businesses");
      // validate the required field `businesses` (array)
      for (int i = 0; i < jsonArraybusinesses.size(); i++) {
        Business.validateJsonElement(jsonArraybusinesses.get(i));
      };
      // validate the required field `pagination`
      PaginationResult.validateJsonElement(jsonObj.get("pagination"));
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!GetBusinessesResponse.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'GetBusinessesResponse' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<GetBusinessesResponse> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(GetBusinessesResponse.class));

       return (TypeAdapter<T>) new TypeAdapter<GetBusinessesResponse>() {
           @Override
           public void write(JsonWriter out, GetBusinessesResponse value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public GetBusinessesResponse read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of GetBusinessesResponse given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of GetBusinessesResponse
  * @throws IOException if the JSON string is invalid with respect to GetBusinessesResponse
  */
  public static GetBusinessesResponse fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, GetBusinessesResponse.class);
  }

 /**
  * Convert an instance of GetBusinessesResponse to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

