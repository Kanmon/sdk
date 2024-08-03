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
import com.kanmon.client.model.IssuedProduct;
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
 * GetIssuedProductsResponse
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-08-02T17:11:18.940267-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class GetIssuedProductsResponse {
  public static final String SERIALIZED_NAME_ISSUED_PRODUCTS = "issuedProducts";
  @SerializedName(SERIALIZED_NAME_ISSUED_PRODUCTS)
  private List<IssuedProduct> issuedProducts = new ArrayList<>();

  public static final String SERIALIZED_NAME_PAGINATION = "pagination";
  @SerializedName(SERIALIZED_NAME_PAGINATION)
  private PaginationResult pagination;

  public GetIssuedProductsResponse() {
  }

  public GetIssuedProductsResponse issuedProducts(List<IssuedProduct> issuedProducts) {
    this.issuedProducts = issuedProducts;
    return this;
  }

  public GetIssuedProductsResponse addIssuedProductsItem(IssuedProduct issuedProductsItem) {
    if (this.issuedProducts == null) {
      this.issuedProducts = new ArrayList<>();
    }
    this.issuedProducts.add(issuedProductsItem);
    return this;
  }

   /**
   * Array of issued products.
   * @return issuedProducts
  **/
  @javax.annotation.Nonnull
  public List<IssuedProduct> getIssuedProducts() {
    return issuedProducts;
  }

  public void setIssuedProducts(List<IssuedProduct> issuedProducts) {
    this.issuedProducts = issuedProducts;
  }


  public GetIssuedProductsResponse pagination(PaginationResult pagination) {
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
    GetIssuedProductsResponse getIssuedProductsResponse = (GetIssuedProductsResponse) o;
    return Objects.equals(this.issuedProducts, getIssuedProductsResponse.issuedProducts) &&
        Objects.equals(this.pagination, getIssuedProductsResponse.pagination);
  }

  @Override
  public int hashCode() {
    return Objects.hash(issuedProducts, pagination);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetIssuedProductsResponse {\n");
    sb.append("    issuedProducts: ").append(toIndentedString(issuedProducts)).append("\n");
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
    openapiFields.add("issuedProducts");
    openapiFields.add("pagination");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("issuedProducts");
    openapiRequiredFields.add("pagination");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to GetIssuedProductsResponse
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!GetIssuedProductsResponse.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in GetIssuedProductsResponse is not found in the empty JSON string", GetIssuedProductsResponse.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!GetIssuedProductsResponse.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `GetIssuedProductsResponse` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : GetIssuedProductsResponse.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the json data is an array
      if (!jsonObj.get("issuedProducts").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `issuedProducts` to be an array in the JSON string but got `%s`", jsonObj.get("issuedProducts").toString()));
      }

      JsonArray jsonArrayissuedProducts = jsonObj.getAsJsonArray("issuedProducts");
      // validate the required field `issuedProducts` (array)
      for (int i = 0; i < jsonArrayissuedProducts.size(); i++) {
        IssuedProduct.validateJsonElement(jsonArrayissuedProducts.get(i));
      };
      // validate the required field `pagination`
      PaginationResult.validateJsonElement(jsonObj.get("pagination"));
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!GetIssuedProductsResponse.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'GetIssuedProductsResponse' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<GetIssuedProductsResponse> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(GetIssuedProductsResponse.class));

       return (TypeAdapter<T>) new TypeAdapter<GetIssuedProductsResponse>() {
           @Override
           public void write(JsonWriter out, GetIssuedProductsResponse value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public GetIssuedProductsResponse read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of GetIssuedProductsResponse given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of GetIssuedProductsResponse
  * @throws IOException if the JSON string is invalid with respect to GetIssuedProductsResponse
  */
  public static GetIssuedProductsResponse fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, GetIssuedProductsResponse.class);
  }

 /**
  * Convert an instance of GetIssuedProductsResponse to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

