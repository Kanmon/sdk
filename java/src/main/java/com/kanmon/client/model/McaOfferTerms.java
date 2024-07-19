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
 * McaOfferTerms
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-07-18T19:11:29.794846-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class McaOfferTerms {
  /**
   * Gets or Sets productType
   */
  @JsonAdapter(ProductTypeEnum.Adapter.class)
  public enum ProductTypeEnum {
    MCA("MCA");

    private String value;

    ProductTypeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static ProductTypeEnum fromValue(String value) {
      for (ProductTypeEnum b : ProductTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<ProductTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ProductTypeEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public ProductTypeEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return ProductTypeEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      ProductTypeEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_PRODUCT_TYPE = "productType";
  @SerializedName(SERIALIZED_NAME_PRODUCT_TYPE)
  private ProductTypeEnum productType;

  public static final String SERIALIZED_NAME_ADVANCE_AMOUNT_CENTS = "advanceAmountCents";
  @SerializedName(SERIALIZED_NAME_ADVANCE_AMOUNT_CENTS)
  private BigDecimal advanceAmountCents;

  public static final String SERIALIZED_NAME_REPAYMENT_PERCENTAGE = "repaymentPercentage";
  @SerializedName(SERIALIZED_NAME_REPAYMENT_PERCENTAGE)
  private BigDecimal repaymentPercentage;

  public static final String SERIALIZED_NAME_FEE_FACTOR = "feeFactor";
  @SerializedName(SERIALIZED_NAME_FEE_FACTOR)
  private BigDecimal feeFactor;

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

  public static final String SERIALIZED_NAME_TOTAL_REPAYMENT_CENTS = "totalRepaymentCents";
  @SerializedName(SERIALIZED_NAME_TOTAL_REPAYMENT_CENTS)
  private BigDecimal totalRepaymentCents;

  public McaOfferTerms() {
  }

  public McaOfferTerms productType(ProductTypeEnum productType) {
    this.productType = productType;
    return this;
  }

   /**
   * Get productType
   * @return productType
  **/
  @javax.annotation.Nonnull
  public ProductTypeEnum getProductType() {
    return productType;
  }

  public void setProductType(ProductTypeEnum productType) {
    this.productType = productType;
  }


  public McaOfferTerms advanceAmountCents(BigDecimal advanceAmountCents) {
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


  public McaOfferTerms repaymentPercentage(BigDecimal repaymentPercentage) {
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


  public McaOfferTerms feeFactor(BigDecimal feeFactor) {
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


  public McaOfferTerms repaymentFrequency(RepaymentFrequencyEnum repaymentFrequency) {
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


  public McaOfferTerms totalRepaymentCents(BigDecimal totalRepaymentCents) {
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



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    McaOfferTerms mcaOfferTerms = (McaOfferTerms) o;
    return Objects.equals(this.productType, mcaOfferTerms.productType) &&
        Objects.equals(this.advanceAmountCents, mcaOfferTerms.advanceAmountCents) &&
        Objects.equals(this.repaymentPercentage, mcaOfferTerms.repaymentPercentage) &&
        Objects.equals(this.feeFactor, mcaOfferTerms.feeFactor) &&
        Objects.equals(this.repaymentFrequency, mcaOfferTerms.repaymentFrequency) &&
        Objects.equals(this.totalRepaymentCents, mcaOfferTerms.totalRepaymentCents);
  }

  @Override
  public int hashCode() {
    return Objects.hash(productType, advanceAmountCents, repaymentPercentage, feeFactor, repaymentFrequency, totalRepaymentCents);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class McaOfferTerms {\n");
    sb.append("    productType: ").append(toIndentedString(productType)).append("\n");
    sb.append("    advanceAmountCents: ").append(toIndentedString(advanceAmountCents)).append("\n");
    sb.append("    repaymentPercentage: ").append(toIndentedString(repaymentPercentage)).append("\n");
    sb.append("    feeFactor: ").append(toIndentedString(feeFactor)).append("\n");
    sb.append("    repaymentFrequency: ").append(toIndentedString(repaymentFrequency)).append("\n");
    sb.append("    totalRepaymentCents: ").append(toIndentedString(totalRepaymentCents)).append("\n");
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
    openapiFields.add("repaymentFrequency");
    openapiFields.add("totalRepaymentCents");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("productType");
    openapiRequiredFields.add("advanceAmountCents");
    openapiRequiredFields.add("repaymentPercentage");
    openapiRequiredFields.add("feeFactor");
    openapiRequiredFields.add("repaymentFrequency");
    openapiRequiredFields.add("totalRepaymentCents");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to McaOfferTerms
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!McaOfferTerms.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in McaOfferTerms is not found in the empty JSON string", McaOfferTerms.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!McaOfferTerms.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `McaOfferTerms` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : McaOfferTerms.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("productType").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `productType` to be a primitive type in the JSON string but got `%s`", jsonObj.get("productType").toString()));
      }
      // validate the required field `productType`
      ProductTypeEnum.validateJsonElement(jsonObj.get("productType"));
      if (!jsonObj.get("repaymentFrequency").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `repaymentFrequency` to be a primitive type in the JSON string but got `%s`", jsonObj.get("repaymentFrequency").toString()));
      }
      // validate the required field `repaymentFrequency`
      RepaymentFrequencyEnum.validateJsonElement(jsonObj.get("repaymentFrequency"));
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!McaOfferTerms.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'McaOfferTerms' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<McaOfferTerms> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(McaOfferTerms.class));

       return (TypeAdapter<T>) new TypeAdapter<McaOfferTerms>() {
           @Override
           public void write(JsonWriter out, McaOfferTerms value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public McaOfferTerms read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of McaOfferTerms given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of McaOfferTerms
  * @throws IOException if the JSON string is invalid with respect to McaOfferTerms
  */
  public static McaOfferTerms fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, McaOfferTerms.class);
  }

 /**
  * Convert an instance of McaOfferTerms to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

