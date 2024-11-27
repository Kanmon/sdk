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
 * TermLoanOfferTerms
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
public class TermLoanOfferTerms {
  /**
   * The type of product being offered. Always &#x60;TERM_LOAN&#x60; for &#x60;TermLoanOfferTerms&#x60;.
   */
  @JsonAdapter(ProductTypeEnum.Adapter.class)
  public enum ProductTypeEnum {
    INVOICE_FINANCING("INVOICE_FINANCING"),
    
    TERM_LOAN("TERM_LOAN"),
    
    MCA("MCA"),
    
    LINE_OF_CREDIT("LINE_OF_CREDIT"),
    
    INTEGRATED_MCA("INTEGRATED_MCA"),
    
    ACCOUNTS_PAYABLE_FINANCING("ACCOUNTS_PAYABLE_FINANCING");

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

  public static final String SERIALIZED_NAME_MAX_LOAN_AMOUNT_CENTS = "maxLoanAmountCents";
  @SerializedName(SERIALIZED_NAME_MAX_LOAN_AMOUNT_CENTS)
  private BigDecimal maxLoanAmountCents;

  public static final String SERIALIZED_NAME_LOAN_AMOUNT_CENTS = "loanAmountCents";
  @SerializedName(SERIALIZED_NAME_LOAN_AMOUNT_CENTS)
  private BigDecimal loanAmountCents;

  public static final String SERIALIZED_NAME_INTEREST_RATE_PERCENTAGE = "interestRatePercentage";
  @SerializedName(SERIALIZED_NAME_INTEREST_RATE_PERCENTAGE)
  private BigDecimal interestRatePercentage;

  public static final String SERIALIZED_NAME_DURATION_MONTHS = "durationMonths";
  @SerializedName(SERIALIZED_NAME_DURATION_MONTHS)
  private BigDecimal durationMonths;

  public static final String SERIALIZED_NAME_FEE_PERCENTAGE = "feePercentage";
  @SerializedName(SERIALIZED_NAME_FEE_PERCENTAGE)
  private BigDecimal feePercentage;

  public TermLoanOfferTerms() {
  }

  public TermLoanOfferTerms productType(ProductTypeEnum productType) {
    this.productType = productType;
    return this;
  }

  /**
   * The type of product being offered. Always &#x60;TERM_LOAN&#x60; for &#x60;TermLoanOfferTerms&#x60;.
   * @return productType
   */
  @javax.annotation.Nonnull
  public ProductTypeEnum getProductType() {
    return productType;
  }

  public void setProductType(ProductTypeEnum productType) {
    this.productType = productType;
  }


  public TermLoanOfferTerms maxLoanAmountCents(BigDecimal maxLoanAmountCents) {
    this.maxLoanAmountCents = maxLoanAmountCents;
    return this;
  }

  /**
   * The maximum loan amount - in cents.
   * @return maxLoanAmountCents
   */
  @javax.annotation.Nonnull
  public BigDecimal getMaxLoanAmountCents() {
    return maxLoanAmountCents;
  }

  public void setMaxLoanAmountCents(BigDecimal maxLoanAmountCents) {
    this.maxLoanAmountCents = maxLoanAmountCents;
  }


  public TermLoanOfferTerms loanAmountCents(BigDecimal loanAmountCents) {
    this.loanAmountCents = loanAmountCents;
    return this;
  }

  /**
   * The loan amount - in cents. This defaults to &#x60;maxLoanAmountCents&#x60;. However, the business can select a smaller amount.
   * @return loanAmountCents
   */
  @javax.annotation.Nonnull
  public BigDecimal getLoanAmountCents() {
    return loanAmountCents;
  }

  public void setLoanAmountCents(BigDecimal loanAmountCents) {
    this.loanAmountCents = loanAmountCents;
  }


  public TermLoanOfferTerms interestRatePercentage(BigDecimal interestRatePercentage) {
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


  public TermLoanOfferTerms durationMonths(BigDecimal durationMonths) {
    this.durationMonths = durationMonths;
    return this;
  }

  /**
   * The duration of the loan - in months.
   * @return durationMonths
   */
  @javax.annotation.Nonnull
  public BigDecimal getDurationMonths() {
    return durationMonths;
  }

  public void setDurationMonths(BigDecimal durationMonths) {
    this.durationMonths = durationMonths;
  }


  public TermLoanOfferTerms feePercentage(BigDecimal feePercentage) {
    this.feePercentage = feePercentage;
    return this;
  }

  /**
   * The fee percentage on the loan. E.g. a value of &#x60;3&#x60; means 3%.
   * @return feePercentage
   */
  @javax.annotation.Nonnull
  public BigDecimal getFeePercentage() {
    return feePercentage;
  }

  public void setFeePercentage(BigDecimal feePercentage) {
    this.feePercentage = feePercentage;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TermLoanOfferTerms termLoanOfferTerms = (TermLoanOfferTerms) o;
    return Objects.equals(this.productType, termLoanOfferTerms.productType) &&
        Objects.equals(this.maxLoanAmountCents, termLoanOfferTerms.maxLoanAmountCents) &&
        Objects.equals(this.loanAmountCents, termLoanOfferTerms.loanAmountCents) &&
        Objects.equals(this.interestRatePercentage, termLoanOfferTerms.interestRatePercentage) &&
        Objects.equals(this.durationMonths, termLoanOfferTerms.durationMonths) &&
        Objects.equals(this.feePercentage, termLoanOfferTerms.feePercentage);
  }

  @Override
  public int hashCode() {
    return Objects.hash(productType, maxLoanAmountCents, loanAmountCents, interestRatePercentage, durationMonths, feePercentage);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TermLoanOfferTerms {\n");
    sb.append("    productType: ").append(toIndentedString(productType)).append("\n");
    sb.append("    maxLoanAmountCents: ").append(toIndentedString(maxLoanAmountCents)).append("\n");
    sb.append("    loanAmountCents: ").append(toIndentedString(loanAmountCents)).append("\n");
    sb.append("    interestRatePercentage: ").append(toIndentedString(interestRatePercentage)).append("\n");
    sb.append("    durationMonths: ").append(toIndentedString(durationMonths)).append("\n");
    sb.append("    feePercentage: ").append(toIndentedString(feePercentage)).append("\n");
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
    openapiFields.add("maxLoanAmountCents");
    openapiFields.add("loanAmountCents");
    openapiFields.add("interestRatePercentage");
    openapiFields.add("durationMonths");
    openapiFields.add("feePercentage");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("productType");
    openapiRequiredFields.add("maxLoanAmountCents");
    openapiRequiredFields.add("loanAmountCents");
    openapiRequiredFields.add("interestRatePercentage");
    openapiRequiredFields.add("durationMonths");
    openapiRequiredFields.add("feePercentage");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to TermLoanOfferTerms
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!TermLoanOfferTerms.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in TermLoanOfferTerms is not found in the empty JSON string", TermLoanOfferTerms.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!TermLoanOfferTerms.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `TermLoanOfferTerms` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : TermLoanOfferTerms.openapiRequiredFields) {
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
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!TermLoanOfferTerms.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'TermLoanOfferTerms' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<TermLoanOfferTerms> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(TermLoanOfferTerms.class));

       return (TypeAdapter<T>) new TypeAdapter<TermLoanOfferTerms>() {
           @Override
           public void write(JsonWriter out, TermLoanOfferTerms value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public TermLoanOfferTerms read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of TermLoanOfferTerms given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of TermLoanOfferTerms
   * @throws IOException if the JSON string is invalid with respect to TermLoanOfferTerms
   */
  public static TermLoanOfferTerms fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, TermLoanOfferTerms.class);
  }

  /**
   * Convert an instance of TermLoanOfferTerms to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

