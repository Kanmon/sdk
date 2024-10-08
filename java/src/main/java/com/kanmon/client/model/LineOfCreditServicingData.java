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

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.kanmon.client.JSON;

/**
 * LineOfCreditServicingData
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
public class LineOfCreditServicingData {
  public static final String SERIALIZED_NAME_PRODUCT_TYPE = "productType";
  @SerializedName(SERIALIZED_NAME_PRODUCT_TYPE)
  private ProductType productType;

  public static final String SERIALIZED_NAME_TOTAL_LIMIT_CENTS = "totalLimitCents";
  @SerializedName(SERIALIZED_NAME_TOTAL_LIMIT_CENTS)
  private BigDecimal totalLimitCents;

  public static final String SERIALIZED_NAME_AVAILABLE_LIMIT_CENTS = "availableLimitCents";
  @SerializedName(SERIALIZED_NAME_AVAILABLE_LIMIT_CENTS)
  private BigDecimal availableLimitCents;

  public static final String SERIALIZED_NAME_INTEREST_RATE_PERCENTAGE = "interestRatePercentage";
  @SerializedName(SERIALIZED_NAME_INTEREST_RATE_PERCENTAGE)
  private BigDecimal interestRatePercentage;

  public static final String SERIALIZED_NAME_FEE_PERCENTAGE = "feePercentage";
  @SerializedName(SERIALIZED_NAME_FEE_PERCENTAGE)
  private BigDecimal feePercentage;

  public static final String SERIALIZED_NAME_REPAYMENT_DURATION_MONTHS = "repaymentDurationMonths";
  @SerializedName(SERIALIZED_NAME_REPAYMENT_DURATION_MONTHS)
  private BigDecimal repaymentDurationMonths;

  public LineOfCreditServicingData() {
  }

  public LineOfCreditServicingData productType(ProductType productType) {
    this.productType = productType;
    return this;
  }

  /**
   * Get productType
   * @return productType
   */
  @javax.annotation.Nonnull
  public ProductType getProductType() {
    return productType;
  }

  public void setProductType(ProductType productType) {
    this.productType = productType;
  }


  public LineOfCreditServicingData totalLimitCents(BigDecimal totalLimitCents) {
    this.totalLimitCents = totalLimitCents;
    return this;
  }

  /**
   * The total credit limit - in cents.
   * @return totalLimitCents
   */
  @javax.annotation.Nonnull
  public BigDecimal getTotalLimitCents() {
    return totalLimitCents;
  }

  public void setTotalLimitCents(BigDecimal totalLimitCents) {
    this.totalLimitCents = totalLimitCents;
  }


  public LineOfCreditServicingData availableLimitCents(BigDecimal availableLimitCents) {
    this.availableLimitCents = availableLimitCents;
    return this;
  }

  /**
   * The total limit less the amount of balance outstanding - in cents.
   * @return availableLimitCents
   */
  @javax.annotation.Nonnull
  public BigDecimal getAvailableLimitCents() {
    return availableLimitCents;
  }

  public void setAvailableLimitCents(BigDecimal availableLimitCents) {
    this.availableLimitCents = availableLimitCents;
  }


  public LineOfCreditServicingData interestRatePercentage(BigDecimal interestRatePercentage) {
    this.interestRatePercentage = interestRatePercentage;
    return this;
  }

  /**
   * The rate of interest on the loan. E.g. a value of &#x60;10&#x60; means 10%.
   * @return interestRatePercentage
   */
  @javax.annotation.Nonnull
  public BigDecimal getInterestRatePercentage() {
    return interestRatePercentage;
  }

  public void setInterestRatePercentage(BigDecimal interestRatePercentage) {
    this.interestRatePercentage = interestRatePercentage;
  }


  public LineOfCreditServicingData feePercentage(BigDecimal feePercentage) {
    this.feePercentage = feePercentage;
    return this;
  }

  /**
   * The fee percentage charged as the borrowing cost of the loan. E.g. a value of &#x60;2&#x60; means a 2% fee.
   * @return feePercentage
   */
  @javax.annotation.Nonnull
  public BigDecimal getFeePercentage() {
    return feePercentage;
  }

  public void setFeePercentage(BigDecimal feePercentage) {
    this.feePercentage = feePercentage;
  }


  public LineOfCreditServicingData repaymentDurationMonths(BigDecimal repaymentDurationMonths) {
    this.repaymentDurationMonths = repaymentDurationMonths;
    return this;
  }

  /**
   * The duration of the repayment for each draw - in months.
   * @return repaymentDurationMonths
   */
  @javax.annotation.Nonnull
  public BigDecimal getRepaymentDurationMonths() {
    return repaymentDurationMonths;
  }

  public void setRepaymentDurationMonths(BigDecimal repaymentDurationMonths) {
    this.repaymentDurationMonths = repaymentDurationMonths;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LineOfCreditServicingData lineOfCreditServicingData = (LineOfCreditServicingData) o;
    return Objects.equals(this.productType, lineOfCreditServicingData.productType) &&
        Objects.equals(this.totalLimitCents, lineOfCreditServicingData.totalLimitCents) &&
        Objects.equals(this.availableLimitCents, lineOfCreditServicingData.availableLimitCents) &&
        Objects.equals(this.interestRatePercentage, lineOfCreditServicingData.interestRatePercentage) &&
        Objects.equals(this.feePercentage, lineOfCreditServicingData.feePercentage) &&
        Objects.equals(this.repaymentDurationMonths, lineOfCreditServicingData.repaymentDurationMonths);
  }

  @Override
  public int hashCode() {
    return Objects.hash(productType, totalLimitCents, availableLimitCents, interestRatePercentage, feePercentage, repaymentDurationMonths);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LineOfCreditServicingData {\n");
    sb.append("    productType: ").append(toIndentedString(productType)).append("\n");
    sb.append("    totalLimitCents: ").append(toIndentedString(totalLimitCents)).append("\n");
    sb.append("    availableLimitCents: ").append(toIndentedString(availableLimitCents)).append("\n");
    sb.append("    interestRatePercentage: ").append(toIndentedString(interestRatePercentage)).append("\n");
    sb.append("    feePercentage: ").append(toIndentedString(feePercentage)).append("\n");
    sb.append("    repaymentDurationMonths: ").append(toIndentedString(repaymentDurationMonths)).append("\n");
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
    openapiFields.add("totalLimitCents");
    openapiFields.add("availableLimitCents");
    openapiFields.add("interestRatePercentage");
    openapiFields.add("feePercentage");
    openapiFields.add("repaymentDurationMonths");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("productType");
    openapiRequiredFields.add("totalLimitCents");
    openapiRequiredFields.add("availableLimitCents");
    openapiRequiredFields.add("interestRatePercentage");
    openapiRequiredFields.add("feePercentage");
    openapiRequiredFields.add("repaymentDurationMonths");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to LineOfCreditServicingData
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!LineOfCreditServicingData.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in LineOfCreditServicingData is not found in the empty JSON string", LineOfCreditServicingData.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!LineOfCreditServicingData.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `LineOfCreditServicingData` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : LineOfCreditServicingData.openapiRequiredFields) {
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
       if (!LineOfCreditServicingData.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'LineOfCreditServicingData' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<LineOfCreditServicingData> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(LineOfCreditServicingData.class));

       return (TypeAdapter<T>) new TypeAdapter<LineOfCreditServicingData>() {
           @Override
           public void write(JsonWriter out, LineOfCreditServicingData value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public LineOfCreditServicingData read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of LineOfCreditServicingData given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of LineOfCreditServicingData
   * @throws IOException if the JSON string is invalid with respect to LineOfCreditServicingData
   */
  public static LineOfCreditServicingData fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, LineOfCreditServicingData.class);
  }

  /**
   * Convert an instance of LineOfCreditServicingData to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

