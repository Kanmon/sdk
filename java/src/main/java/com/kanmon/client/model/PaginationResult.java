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
import java.math.BigDecimal;
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

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.kanmon.client.JSON;

/**
 * PaginationResult
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
public class PaginationResult {
  public static final String SERIALIZED_NAME_LIMIT = "limit";
  @SerializedName(SERIALIZED_NAME_LIMIT)
  private BigDecimal limit;

  public static final String SERIALIZED_NAME_OFFSET = "offset";
  @SerializedName(SERIALIZED_NAME_OFFSET)
  private BigDecimal offset;

  public static final String SERIALIZED_NAME_TOTAL_COUNT = "totalCount";
  @SerializedName(SERIALIZED_NAME_TOTAL_COUNT)
  private BigDecimal totalCount;

  public PaginationResult() {
  }

  public PaginationResult limit(BigDecimal limit) {
    this.limit = limit;
    return this;
  }

  /**
   * The number of records to limit when performing pagination.
   * @return limit
   */
  @javax.annotation.Nonnull
  public BigDecimal getLimit() {
    return limit;
  }

  public void setLimit(BigDecimal limit) {
    this.limit = limit;
  }


  public PaginationResult offset(BigDecimal offset) {
    this.offset = offset;
    return this;
  }

  /**
   * The number of records to skip when performing pagination.
   * @return offset
   */
  @javax.annotation.Nonnull
  public BigDecimal getOffset() {
    return offset;
  }

  public void setOffset(BigDecimal offset) {
    this.offset = offset;
  }


  public PaginationResult totalCount(BigDecimal totalCount) {
    this.totalCount = totalCount;
    return this;
  }

  /**
   * The total number of records that matched the query.
   * @return totalCount
   */
  @javax.annotation.Nonnull
  public BigDecimal getTotalCount() {
    return totalCount;
  }

  public void setTotalCount(BigDecimal totalCount) {
    this.totalCount = totalCount;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PaginationResult paginationResult = (PaginationResult) o;
    return Objects.equals(this.limit, paginationResult.limit) &&
        Objects.equals(this.offset, paginationResult.offset) &&
        Objects.equals(this.totalCount, paginationResult.totalCount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(limit, offset, totalCount);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaginationResult {\n");
    sb.append("    limit: ").append(toIndentedString(limit)).append("\n");
    sb.append("    offset: ").append(toIndentedString(offset)).append("\n");
    sb.append("    totalCount: ").append(toIndentedString(totalCount)).append("\n");
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
    openapiFields.add("limit");
    openapiFields.add("offset");
    openapiFields.add("totalCount");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("limit");
    openapiRequiredFields.add("offset");
    openapiRequiredFields.add("totalCount");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to PaginationResult
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!PaginationResult.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in PaginationResult is not found in the empty JSON string", PaginationResult.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!PaginationResult.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `PaginationResult` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : PaginationResult.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!PaginationResult.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'PaginationResult' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<PaginationResult> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(PaginationResult.class));

       return (TypeAdapter<T>) new TypeAdapter<PaginationResult>() {
           @Override
           public void write(JsonWriter out, PaginationResult value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public PaginationResult read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of PaginationResult given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of PaginationResult
   * @throws IOException if the JSON string is invalid with respect to PaginationResult
   */
  public static PaginationResult fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, PaginationResult.class);
  }

  /**
   * Convert an instance of PaginationResult to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

