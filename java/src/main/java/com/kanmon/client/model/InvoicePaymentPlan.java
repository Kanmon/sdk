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
import com.kanmon.client.model.InvoicePaymentPlanRepaymentWindow;
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

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.kanmon.client.JSON;

/**
 * InvoicePaymentPlan
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-07-26T14:34:18.978357-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class InvoicePaymentPlan {
  public static final String SERIALIZED_NAME_ADVANCE_RATE_PERCENTAGE = "advanceRatePercentage";
  @SerializedName(SERIALIZED_NAME_ADVANCE_RATE_PERCENTAGE)
  private BigDecimal advanceRatePercentage;

  public static final String SERIALIZED_NAME_TRANSACTION_FEE_PERCENTAGE = "transactionFeePercentage";
  @SerializedName(SERIALIZED_NAME_TRANSACTION_FEE_PERCENTAGE)
  private BigDecimal transactionFeePercentage;

  public static final String SERIALIZED_NAME_REPAYMENT_WINDOW = "repaymentWindow";
  @SerializedName(SERIALIZED_NAME_REPAYMENT_WINDOW)
  private InvoicePaymentPlanRepaymentWindow repaymentWindow;

  public InvoicePaymentPlan() {
  }

  public InvoicePaymentPlan advanceRatePercentage(BigDecimal advanceRatePercentage) {
    this.advanceRatePercentage = advanceRatePercentage;
    return this;
  }

   /**
   * The percentage of the invoice that is allowed for advances. E.g. a value of &#x60;80&#x60; would mean that $800 would be advanced on a $1,000 invoice.
   * @return advanceRatePercentage
  **/
  @javax.annotation.Nonnull
  public BigDecimal getAdvanceRatePercentage() {
    return advanceRatePercentage;
  }

  public void setAdvanceRatePercentage(BigDecimal advanceRatePercentage) {
    this.advanceRatePercentage = advanceRatePercentage;
  }


  public InvoicePaymentPlan transactionFeePercentage(BigDecimal transactionFeePercentage) {
    this.transactionFeePercentage = transactionFeePercentage;
    return this;
  }

   /**
   * The percentage of the transaction that is charged as a fee. E.g. a value of &#x60;5&#x60; means 5%.
   * @return transactionFeePercentage
  **/
  @javax.annotation.Nonnull
  public BigDecimal getTransactionFeePercentage() {
    return transactionFeePercentage;
  }

  public void setTransactionFeePercentage(BigDecimal transactionFeePercentage) {
    this.transactionFeePercentage = transactionFeePercentage;
  }


  public InvoicePaymentPlan repaymentWindow(InvoicePaymentPlanRepaymentWindow repaymentWindow) {
    this.repaymentWindow = repaymentWindow;
    return this;
  }

   /**
   * Get repaymentWindow
   * @return repaymentWindow
  **/
  @javax.annotation.Nonnull
  public InvoicePaymentPlanRepaymentWindow getRepaymentWindow() {
    return repaymentWindow;
  }

  public void setRepaymentWindow(InvoicePaymentPlanRepaymentWindow repaymentWindow) {
    this.repaymentWindow = repaymentWindow;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InvoicePaymentPlan invoicePaymentPlan = (InvoicePaymentPlan) o;
    return Objects.equals(this.advanceRatePercentage, invoicePaymentPlan.advanceRatePercentage) &&
        Objects.equals(this.transactionFeePercentage, invoicePaymentPlan.transactionFeePercentage) &&
        Objects.equals(this.repaymentWindow, invoicePaymentPlan.repaymentWindow);
  }

  @Override
  public int hashCode() {
    return Objects.hash(advanceRatePercentage, transactionFeePercentage, repaymentWindow);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InvoicePaymentPlan {\n");
    sb.append("    advanceRatePercentage: ").append(toIndentedString(advanceRatePercentage)).append("\n");
    sb.append("    transactionFeePercentage: ").append(toIndentedString(transactionFeePercentage)).append("\n");
    sb.append("    repaymentWindow: ").append(toIndentedString(repaymentWindow)).append("\n");
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
    openapiFields.add("advanceRatePercentage");
    openapiFields.add("transactionFeePercentage");
    openapiFields.add("repaymentWindow");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("advanceRatePercentage");
    openapiRequiredFields.add("transactionFeePercentage");
    openapiRequiredFields.add("repaymentWindow");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to InvoicePaymentPlan
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!InvoicePaymentPlan.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in InvoicePaymentPlan is not found in the empty JSON string", InvoicePaymentPlan.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!InvoicePaymentPlan.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `InvoicePaymentPlan` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : InvoicePaymentPlan.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // validate the required field `repaymentWindow`
      InvoicePaymentPlanRepaymentWindow.validateJsonElement(jsonObj.get("repaymentWindow"));
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!InvoicePaymentPlan.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'InvoicePaymentPlan' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<InvoicePaymentPlan> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(InvoicePaymentPlan.class));

       return (TypeAdapter<T>) new TypeAdapter<InvoicePaymentPlan>() {
           @Override
           public void write(JsonWriter out, InvoicePaymentPlan value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public InvoicePaymentPlan read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of InvoicePaymentPlan given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of InvoicePaymentPlan
  * @throws IOException if the JSON string is invalid with respect to InvoicePaymentPlan
  */
  public static InvoicePaymentPlan fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, InvoicePaymentPlan.class);
  }

 /**
  * Convert an instance of InvoicePaymentPlan to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

