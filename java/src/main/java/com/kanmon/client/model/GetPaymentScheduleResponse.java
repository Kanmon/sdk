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
import com.kanmon.client.model.PaginationResult;
import com.kanmon.client.model.PaymentScheduleItem;
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
 * GetPaymentScheduleResponse
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-07-18T19:11:29.794846-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class GetPaymentScheduleResponse {
  public static final String SERIALIZED_NAME_PAYMENT_SCHEDULE = "paymentSchedule";
  @SerializedName(SERIALIZED_NAME_PAYMENT_SCHEDULE)
  private List<PaymentScheduleItem> paymentSchedule = new ArrayList<>();

  public static final String SERIALIZED_NAME_PAGINATION = "pagination";
  @SerializedName(SERIALIZED_NAME_PAGINATION)
  private PaginationResult pagination;

  public GetPaymentScheduleResponse() {
  }

  public GetPaymentScheduleResponse paymentSchedule(List<PaymentScheduleItem> paymentSchedule) {
    this.paymentSchedule = paymentSchedule;
    return this;
  }

  public GetPaymentScheduleResponse addPaymentScheduleItem(PaymentScheduleItem paymentScheduleItem) {
    if (this.paymentSchedule == null) {
      this.paymentSchedule = new ArrayList<>();
    }
    this.paymentSchedule.add(paymentScheduleItem);
    return this;
  }

   /**
   * Array of payment schedule items for an issued product.
   * @return paymentSchedule
  **/
  @javax.annotation.Nonnull
  public List<PaymentScheduleItem> getPaymentSchedule() {
    return paymentSchedule;
  }

  public void setPaymentSchedule(List<PaymentScheduleItem> paymentSchedule) {
    this.paymentSchedule = paymentSchedule;
  }


  public GetPaymentScheduleResponse pagination(PaginationResult pagination) {
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
    GetPaymentScheduleResponse getPaymentScheduleResponse = (GetPaymentScheduleResponse) o;
    return Objects.equals(this.paymentSchedule, getPaymentScheduleResponse.paymentSchedule) &&
        Objects.equals(this.pagination, getPaymentScheduleResponse.pagination);
  }

  @Override
  public int hashCode() {
    return Objects.hash(paymentSchedule, pagination);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetPaymentScheduleResponse {\n");
    sb.append("    paymentSchedule: ").append(toIndentedString(paymentSchedule)).append("\n");
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
    openapiFields.add("paymentSchedule");
    openapiFields.add("pagination");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("paymentSchedule");
    openapiRequiredFields.add("pagination");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to GetPaymentScheduleResponse
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!GetPaymentScheduleResponse.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in GetPaymentScheduleResponse is not found in the empty JSON string", GetPaymentScheduleResponse.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!GetPaymentScheduleResponse.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `GetPaymentScheduleResponse` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : GetPaymentScheduleResponse.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the json data is an array
      if (!jsonObj.get("paymentSchedule").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `paymentSchedule` to be an array in the JSON string but got `%s`", jsonObj.get("paymentSchedule").toString()));
      }

      JsonArray jsonArraypaymentSchedule = jsonObj.getAsJsonArray("paymentSchedule");
      // validate the required field `paymentSchedule` (array)
      for (int i = 0; i < jsonArraypaymentSchedule.size(); i++) {
        PaymentScheduleItem.validateJsonElement(jsonArraypaymentSchedule.get(i));
      };
      // validate the required field `pagination`
      PaginationResult.validateJsonElement(jsonObj.get("pagination"));
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!GetPaymentScheduleResponse.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'GetPaymentScheduleResponse' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<GetPaymentScheduleResponse> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(GetPaymentScheduleResponse.class));

       return (TypeAdapter<T>) new TypeAdapter<GetPaymentScheduleResponse>() {
           @Override
           public void write(JsonWriter out, GetPaymentScheduleResponse value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public GetPaymentScheduleResponse read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of GetPaymentScheduleResponse given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of GetPaymentScheduleResponse
  * @throws IOException if the JSON string is invalid with respect to GetPaymentScheduleResponse
  */
  public static GetPaymentScheduleResponse fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, GetPaymentScheduleResponse.class);
  }

 /**
  * Convert an instance of GetPaymentScheduleResponse to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

