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

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.kanmon.client.JSON;

/**
 * McaServicingData
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-08-02T17:11:18.940267-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class McaServicingData {
  public static final String SERIALIZED_NAME_PRODUCT_TYPE = "productType";
  @SerializedName(SERIALIZED_NAME_PRODUCT_TYPE)
  private String productType;

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

  /**
   * The repayment frequency of the loan. E.g. biweekly repayment occurs every 14 days, weekly repayment occurs every 7 days, etc.
   */
  @JsonAdapter(RepaymentFrequencyEnum.Adapter.class)
  public enum RepaymentFrequencyEnum {
    DAILY("DAILY"),
    
    WEEKLY("WEEKLY"),
    
    BIWEEKLY("BIWEEKLY"),
    
    MONTHLY("MONTHLY");

    private String value;

    RepaymentFrequencyEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static RepaymentFrequencyEnum fromValue(String value) {
      for (RepaymentFrequencyEnum b : RepaymentFrequencyEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<RepaymentFrequencyEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final RepaymentFrequencyEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public RepaymentFrequencyEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return RepaymentFrequencyEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      RepaymentFrequencyEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_REPAYMENT_FREQUENCY = "repaymentFrequency";
  @SerializedName(SERIALIZED_NAME_REPAYMENT_FREQUENCY)
  private RepaymentFrequencyEnum repaymentFrequency;

  public static final String SERIALIZED_NAME_NEXT_PAYMENT_DATE = "nextPaymentDate";
  @SerializedName(SERIALIZED_NAME_NEXT_PAYMENT_DATE)
  private String nextPaymentDate;

  public static final String SERIALIZED_NAME_ADVANCE_BALANCE_CENTS = "advanceBalanceCents";
  @SerializedName(SERIALIZED_NAME_ADVANCE_BALANCE_CENTS)
  private BigDecimal advanceBalanceCents;

  public McaServicingData() {
  }

  public McaServicingData productType(String productType) {
    this.productType = productType;
    return this;
  }

   /**
   * The type of product being offered. Always &#x60;MCA&#x60; for &#x60;McaServicingData&#x60;.
   * @return productType
  **/
  @javax.annotation.Nonnull
  public String getProductType() {
    return productType;
  }

  public void setProductType(String productType) {
    this.productType = productType;
  }


  public McaServicingData advanceAmountCents(BigDecimal advanceAmountCents) {
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


  public McaServicingData repaymentPercentage(BigDecimal repaymentPercentage) {
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


  public McaServicingData feeFactor(BigDecimal feeFactor) {
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


  public McaServicingData totalRepaymentCents(BigDecimal totalRepaymentCents) {
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


  public McaServicingData repaymentFrequency(RepaymentFrequencyEnum repaymentFrequency) {
    this.repaymentFrequency = repaymentFrequency;
    return this;
  }

   /**
   * The repayment frequency of the loan. E.g. biweekly repayment occurs every 14 days, weekly repayment occurs every 7 days, etc.
   * @return repaymentFrequency
  **/
  @javax.annotation.Nonnull
  public RepaymentFrequencyEnum getRepaymentFrequency() {
    return repaymentFrequency;
  }

  public void setRepaymentFrequency(RepaymentFrequencyEnum repaymentFrequency) {
    this.repaymentFrequency = repaymentFrequency;
  }


  public McaServicingData nextPaymentDate(String nextPaymentDate) {
    this.nextPaymentDate = nextPaymentDate;
    return this;
  }

   /**
   * The next scheduled payment date - ISO 8601 date format.
   * @return nextPaymentDate
  **/
  @javax.annotation.Nullable
  public String getNextPaymentDate() {
    return nextPaymentDate;
  }

  public void setNextPaymentDate(String nextPaymentDate) {
    this.nextPaymentDate = nextPaymentDate;
  }


  public McaServicingData advanceBalanceCents(BigDecimal advanceBalanceCents) {
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
    McaServicingData mcaServicingData = (McaServicingData) o;
    return Objects.equals(this.productType, mcaServicingData.productType) &&
        Objects.equals(this.advanceAmountCents, mcaServicingData.advanceAmountCents) &&
        Objects.equals(this.repaymentPercentage, mcaServicingData.repaymentPercentage) &&
        Objects.equals(this.feeFactor, mcaServicingData.feeFactor) &&
        Objects.equals(this.totalRepaymentCents, mcaServicingData.totalRepaymentCents) &&
        Objects.equals(this.repaymentFrequency, mcaServicingData.repaymentFrequency) &&
        Objects.equals(this.nextPaymentDate, mcaServicingData.nextPaymentDate) &&
        Objects.equals(this.advanceBalanceCents, mcaServicingData.advanceBalanceCents);
  }

  @Override
  public int hashCode() {
    return Objects.hash(productType, advanceAmountCents, repaymentPercentage, feeFactor, totalRepaymentCents, repaymentFrequency, nextPaymentDate, advanceBalanceCents);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class McaServicingData {\n");
    sb.append("    productType: ").append(toIndentedString(productType)).append("\n");
    sb.append("    advanceAmountCents: ").append(toIndentedString(advanceAmountCents)).append("\n");
    sb.append("    repaymentPercentage: ").append(toIndentedString(repaymentPercentage)).append("\n");
    sb.append("    feeFactor: ").append(toIndentedString(feeFactor)).append("\n");
    sb.append("    totalRepaymentCents: ").append(toIndentedString(totalRepaymentCents)).append("\n");
    sb.append("    repaymentFrequency: ").append(toIndentedString(repaymentFrequency)).append("\n");
    sb.append("    nextPaymentDate: ").append(toIndentedString(nextPaymentDate)).append("\n");
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
    openapiFields.add("repaymentFrequency");
    openapiFields.add("nextPaymentDate");
    openapiFields.add("advanceBalanceCents");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("productType");
    openapiRequiredFields.add("advanceAmountCents");
    openapiRequiredFields.add("repaymentPercentage");
    openapiRequiredFields.add("feeFactor");
    openapiRequiredFields.add("totalRepaymentCents");
    openapiRequiredFields.add("repaymentFrequency");
    openapiRequiredFields.add("nextPaymentDate");
    openapiRequiredFields.add("advanceBalanceCents");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to McaServicingData
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!McaServicingData.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in McaServicingData is not found in the empty JSON string", McaServicingData.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!McaServicingData.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `McaServicingData` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : McaServicingData.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("productType").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `productType` to be a primitive type in the JSON string but got `%s`", jsonObj.get("productType").toString()));
      }
      if (!jsonObj.get("repaymentFrequency").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `repaymentFrequency` to be a primitive type in the JSON string but got `%s`", jsonObj.get("repaymentFrequency").toString()));
      }
      // validate the required field `repaymentFrequency`
      RepaymentFrequencyEnum.validateJsonElement(jsonObj.get("repaymentFrequency"));
      if ((jsonObj.get("nextPaymentDate") != null && !jsonObj.get("nextPaymentDate").isJsonNull()) && !jsonObj.get("nextPaymentDate").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `nextPaymentDate` to be a primitive type in the JSON string but got `%s`", jsonObj.get("nextPaymentDate").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!McaServicingData.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'McaServicingData' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<McaServicingData> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(McaServicingData.class));

       return (TypeAdapter<T>) new TypeAdapter<McaServicingData>() {
           @Override
           public void write(JsonWriter out, McaServicingData value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public McaServicingData read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of McaServicingData given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of McaServicingData
  * @throws IOException if the JSON string is invalid with respect to McaServicingData
  */
  public static McaServicingData fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, McaServicingData.class);
  }

 /**
  * Convert an instance of McaServicingData to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

