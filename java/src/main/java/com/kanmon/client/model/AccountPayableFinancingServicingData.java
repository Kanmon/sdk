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
import com.kanmon.client.model.InvoicePaymentPlan;
import com.kanmon.client.model.ProductType;
import java.io.IOException;
import java.math.BigDecimal;
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

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.kanmon.client.JSON;

/**
 * AccountPayableFinancingServicingData
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
public class AccountPayableFinancingServicingData {
  public static final String SERIALIZED_NAME_PRODUCT_TYPE = "productType";
  @SerializedName(SERIALIZED_NAME_PRODUCT_TYPE)
  private ProductType productType;

  public static final String SERIALIZED_NAME_TOTAL_LIMIT_CENTS = "totalLimitCents";
  @SerializedName(SERIALIZED_NAME_TOTAL_LIMIT_CENTS)
  private BigDecimal totalLimitCents;

  public static final String SERIALIZED_NAME_PRICING_PLANS = "pricingPlans";
  @SerializedName(SERIALIZED_NAME_PRICING_PLANS)
  private List<InvoicePaymentPlan> pricingPlans = new ArrayList<>();

  public static final String SERIALIZED_NAME_AVAILABLE_LIMIT_CENTS = "availableLimitCents";
  @SerializedName(SERIALIZED_NAME_AVAILABLE_LIMIT_CENTS)
  private BigDecimal availableLimitCents;

  public AccountPayableFinancingServicingData() {
  }

  public AccountPayableFinancingServicingData productType(ProductType productType) {
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


  public AccountPayableFinancingServicingData totalLimitCents(BigDecimal totalLimitCents) {
    this.totalLimitCents = totalLimitCents;
    return this;
  }

  /**
   * The total limit allowed - in cents.
   * @return totalLimitCents
   */
  @javax.annotation.Nonnull
  public BigDecimal getTotalLimitCents() {
    return totalLimitCents;
  }

  public void setTotalLimitCents(BigDecimal totalLimitCents) {
    this.totalLimitCents = totalLimitCents;
  }


  public AccountPayableFinancingServicingData pricingPlans(List<InvoicePaymentPlan> pricingPlans) {
    this.pricingPlans = pricingPlans;
    return this;
  }

  public AccountPayableFinancingServicingData addPricingPlansItem(InvoicePaymentPlan pricingPlansItem) {
    if (this.pricingPlans == null) {
      this.pricingPlans = new ArrayList<>();
    }
    this.pricingPlans.add(pricingPlansItem);
    return this;
  }

  /**
   * The pricing plans available for this issued product.
   * @return pricingPlans
   */
  @javax.annotation.Nonnull
  public List<InvoicePaymentPlan> getPricingPlans() {
    return pricingPlans;
  }

  public void setPricingPlans(List<InvoicePaymentPlan> pricingPlans) {
    this.pricingPlans = pricingPlans;
  }


  public AccountPayableFinancingServicingData availableLimitCents(BigDecimal availableLimitCents) {
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



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccountPayableFinancingServicingData accountPayableFinancingServicingData = (AccountPayableFinancingServicingData) o;
    return Objects.equals(this.productType, accountPayableFinancingServicingData.productType) &&
        Objects.equals(this.totalLimitCents, accountPayableFinancingServicingData.totalLimitCents) &&
        Objects.equals(this.pricingPlans, accountPayableFinancingServicingData.pricingPlans) &&
        Objects.equals(this.availableLimitCents, accountPayableFinancingServicingData.availableLimitCents);
  }

  @Override
  public int hashCode() {
    return Objects.hash(productType, totalLimitCents, pricingPlans, availableLimitCents);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountPayableFinancingServicingData {\n");
    sb.append("    productType: ").append(toIndentedString(productType)).append("\n");
    sb.append("    totalLimitCents: ").append(toIndentedString(totalLimitCents)).append("\n");
    sb.append("    pricingPlans: ").append(toIndentedString(pricingPlans)).append("\n");
    sb.append("    availableLimitCents: ").append(toIndentedString(availableLimitCents)).append("\n");
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
    openapiFields.add("pricingPlans");
    openapiFields.add("availableLimitCents");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("productType");
    openapiRequiredFields.add("totalLimitCents");
    openapiRequiredFields.add("pricingPlans");
    openapiRequiredFields.add("availableLimitCents");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to AccountPayableFinancingServicingData
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!AccountPayableFinancingServicingData.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in AccountPayableFinancingServicingData is not found in the empty JSON string", AccountPayableFinancingServicingData.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!AccountPayableFinancingServicingData.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `AccountPayableFinancingServicingData` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : AccountPayableFinancingServicingData.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // validate the required field `productType`
      ProductType.validateJsonElement(jsonObj.get("productType"));
      // ensure the json data is an array
      if (!jsonObj.get("pricingPlans").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `pricingPlans` to be an array in the JSON string but got `%s`", jsonObj.get("pricingPlans").toString()));
      }

      JsonArray jsonArraypricingPlans = jsonObj.getAsJsonArray("pricingPlans");
      // validate the required field `pricingPlans` (array)
      for (int i = 0; i < jsonArraypricingPlans.size(); i++) {
        InvoicePaymentPlan.validateJsonElement(jsonArraypricingPlans.get(i));
      };
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!AccountPayableFinancingServicingData.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'AccountPayableFinancingServicingData' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<AccountPayableFinancingServicingData> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(AccountPayableFinancingServicingData.class));

       return (TypeAdapter<T>) new TypeAdapter<AccountPayableFinancingServicingData>() {
           @Override
           public void write(JsonWriter out, AccountPayableFinancingServicingData value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public AccountPayableFinancingServicingData read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of AccountPayableFinancingServicingData given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of AccountPayableFinancingServicingData
   * @throws IOException if the JSON string is invalid with respect to AccountPayableFinancingServicingData
   */
  public static AccountPayableFinancingServicingData fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, AccountPayableFinancingServicingData.class);
  }

  /**
   * Convert an instance of AccountPayableFinancingServicingData to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}
