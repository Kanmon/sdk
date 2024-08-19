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
import com.kanmon.client.model.ProductType;
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
 * IntegratedMcaServicingData
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.5.0")
public class IntegratedMcaServicingData {
  public static final String SERIALIZED_NAME_PRODUCT_TYPE = "productType";
  @SerializedName(SERIALIZED_NAME_PRODUCT_TYPE)
  private ProductType productType;

  public static final String SERIALIZED_NAME_ADVANCE_AMOUNT_CENTS = "advanceAmountCents";
  @SerializedName(SERIALIZED_NAME_ADVANCE_AMOUNT_CENTS)
  private BigDecimal advanceAmountCents;

  public static final String SERIALIZED_NAME_REPAYMENT_PERCENTAGE = "repaymentPercentage";
  @SerializedName(SERIALIZED_NAME_REPAYMENT_PERCENTAGE)
  private BigDecimal repaymentPercentage;

  public static final String SERIALIZED_NAME_FEE_FACTOR = "feeFactor";
  @SerializedName(SERIALIZED_NAME_FEE_FACTOR)
  private BigDecimal feeFactor;

  public static final String SERIALIZED_NAME_TOTAL_REPAYMENT_CENTS = "totalRepaymentCents";
  @SerializedName(SERIALIZED_NAME_TOTAL_REPAYMENT_CENTS)
  private BigDecimal totalRepaymentCents;

  public static final String SERIALIZED_NAME_ADVANCE_BALANCE_CENTS = "advanceBalanceCents";
  @SerializedName(SERIALIZED_NAME_ADVANCE_BALANCE_CENTS)
  private BigDecimal advanceBalanceCents;

  public IntegratedMcaServicingData() {
  }

  public IntegratedMcaServicingData productType(ProductType productType) {
    this.productType = productType;
    return this;
  }

   /**
   * Get productType
   * @return productType
  **/
  @javax.annotation.Nonnull
  public ProductType getProductType() {
    return productType;
  }

  public void setProductType(ProductType productType) {
    this.productType = productType;
  }


  public IntegratedMcaServicingData advanceAmountCents(BigDecimal advanceAmountCents) {
    this.advanceAmountCents = advanceAmountCents;
    return this;
  }

   /**
   * The loan amount - in cents.
   * @return advanceAmountCents
  **/
  @javax.annotation.Nonnull
  public BigDecimal getAdvanceAmountCents() {
    return advanceAmountCents;
  }

  public void setAdvanceAmountCents(BigDecimal advanceAmountCents) {
    this.advanceAmountCents = advanceAmountCents;
  }


  public IntegratedMcaServicingData repaymentPercentage(BigDecimal repaymentPercentage) {
    this.repaymentPercentage = repaymentPercentage;
    return this;
  }

   /**
   * The repayment percentage for calculating repayment amounts. E.g. a value of a &#x60;20&#x60; means 20%. If a business has $100 of income over a repayment period, the repayment amount would be $20.
   * @return repaymentPercentage
  **/
  @javax.annotation.Nonnull
  public BigDecimal getRepaymentPercentage() {
    return repaymentPercentage;
  }

  public void setRepaymentPercentage(BigDecimal repaymentPercentage) {
    this.repaymentPercentage = repaymentPercentage;
  }


  public IntegratedMcaServicingData feeFactor(BigDecimal feeFactor) {
    this.feeFactor = feeFactor;
    return this;
  }

   /**
   * The fee percentage charged as the borrowing cost of the loan. E.g. a value of &#x60;1.3&#x60; means a 30% fee.
   * @return feeFactor
  **/
  @javax.annotation.Nonnull
  public BigDecimal getFeeFactor() {
    return feeFactor;
  }

  public void setFeeFactor(BigDecimal feeFactor) {
    this.feeFactor = feeFactor;
  }


  public IntegratedMcaServicingData totalRepaymentCents(BigDecimal totalRepaymentCents) {
    this.totalRepaymentCents = totalRepaymentCents;
    return this;
  }

   /**
   * The total repayment amount in cents required to settle and close the debt. E.g. for a $10,000 loan with a fee factor of 1.3, the repayment amount equates to $13,000.
   * @return totalRepaymentCents
  **/
  @javax.annotation.Nonnull
  public BigDecimal getTotalRepaymentCents() {
    return totalRepaymentCents;
  }

  public void setTotalRepaymentCents(BigDecimal totalRepaymentCents) {
    this.totalRepaymentCents = totalRepaymentCents;
  }


  public IntegratedMcaServicingData advanceBalanceCents(BigDecimal advanceBalanceCents) {
    this.advanceBalanceCents = advanceBalanceCents;
    return this;
  }

   /**
   * The total repayment amount less the amount repaid - in cents.
   * @return advanceBalanceCents
  **/
  @javax.annotation.Nonnull
  public BigDecimal getAdvanceBalanceCents() {
    return advanceBalanceCents;
  }

  public void setAdvanceBalanceCents(BigDecimal advanceBalanceCents) {
    this.advanceBalanceCents = advanceBalanceCents;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    IntegratedMcaServicingData integratedMcaServicingData = (IntegratedMcaServicingData) o;
    return Objects.equals(this.productType, integratedMcaServicingData.productType) &&
        Objects.equals(this.advanceAmountCents, integratedMcaServicingData.advanceAmountCents) &&
        Objects.equals(this.repaymentPercentage, integratedMcaServicingData.repaymentPercentage) &&
        Objects.equals(this.feeFactor, integratedMcaServicingData.feeFactor) &&
        Objects.equals(this.totalRepaymentCents, integratedMcaServicingData.totalRepaymentCents) &&
        Objects.equals(this.advanceBalanceCents, integratedMcaServicingData.advanceBalanceCents);
  }

  @Override
  public int hashCode() {
    return Objects.hash(productType, advanceAmountCents, repaymentPercentage, feeFactor, totalRepaymentCents, advanceBalanceCents);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IntegratedMcaServicingData {\n");
    sb.append("    productType: ").append(toIndentedString(productType)).append("\n");
    sb.append("    advanceAmountCents: ").append(toIndentedString(advanceAmountCents)).append("\n");
    sb.append("    repaymentPercentage: ").append(toIndentedString(repaymentPercentage)).append("\n");
    sb.append("    feeFactor: ").append(toIndentedString(feeFactor)).append("\n");
    sb.append("    totalRepaymentCents: ").append(toIndentedString(totalRepaymentCents)).append("\n");
    sb.append("    advanceBalanceCents: ").append(toIndentedString(advanceBalanceCents)).append("\n");
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
    openapiFields.add("productType");
    openapiFields.add("advanceAmountCents");
    openapiFields.add("repaymentPercentage");
    openapiFields.add("feeFactor");
    openapiFields.add("totalRepaymentCents");
    openapiFields.add("advanceBalanceCents");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("productType");
    openapiRequiredFields.add("advanceAmountCents");
    openapiRequiredFields.add("repaymentPercentage");
    openapiRequiredFields.add("feeFactor");
    openapiRequiredFields.add("totalRepaymentCents");
    openapiRequiredFields.add("advanceBalanceCents");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to IntegratedMcaServicingData
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!IntegratedMcaServicingData.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in IntegratedMcaServicingData is not found in the empty JSON string", IntegratedMcaServicingData.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!IntegratedMcaServicingData.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `IntegratedMcaServicingData` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : IntegratedMcaServicingData.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // validate the required field `productType`
      ProductType.validateJsonElement(jsonObj.get("productType"));
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!IntegratedMcaServicingData.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'IntegratedMcaServicingData' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<IntegratedMcaServicingData> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(IntegratedMcaServicingData.class));

       return (TypeAdapter<T>) new TypeAdapter<IntegratedMcaServicingData>() {
           @Override
           public void write(JsonWriter out, IntegratedMcaServicingData value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public IntegratedMcaServicingData read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of IntegratedMcaServicingData given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of IntegratedMcaServicingData
  * @throws IOException if the JSON string is invalid with respect to IntegratedMcaServicingData
  */
  public static IntegratedMcaServicingData fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, IntegratedMcaServicingData.class);
  }

 /**
  * Convert an instance of IntegratedMcaServicingData to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

