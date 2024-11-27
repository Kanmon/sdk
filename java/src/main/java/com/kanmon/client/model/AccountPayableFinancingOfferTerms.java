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
 * AccountPayableFinancingOfferTerms
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
public class AccountPayableFinancingOfferTerms {
  public static final String SERIALIZED_NAME_PRODUCT_TYPE = "productType";
  @SerializedName(SERIALIZED_NAME_PRODUCT_TYPE)
  private ProductType productType;

  public static final String SERIALIZED_NAME_TOTAL_LIMIT_CENTS = "totalLimitCents";
  @SerializedName(SERIALIZED_NAME_TOTAL_LIMIT_CENTS)
  private BigDecimal totalLimitCents;

  public static final String SERIALIZED_NAME_PRICING_PLANS = "pricingPlans";
  @SerializedName(SERIALIZED_NAME_PRICING_PLANS)
  private List<InvoicePaymentPlan> pricingPlans = new ArrayList<>();

  public AccountPayableFinancingOfferTerms() {
  }

  public AccountPayableFinancingOfferTerms productType(ProductType productType) {
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


  public AccountPayableFinancingOfferTerms totalLimitCents(BigDecimal totalLimitCents) {
    this.totalLimitCents = totalLimitCents;
    return this;
  }

  /**
   * The total limit allowed for this offer - in cents.
   * @return totalLimitCents
   */
  @javax.annotation.Nonnull
  public BigDecimal getTotalLimitCents() {
    return totalLimitCents;
  }

  public void setTotalLimitCents(BigDecimal totalLimitCents) {
    this.totalLimitCents = totalLimitCents;
  }


  public AccountPayableFinancingOfferTerms pricingPlans(List<InvoicePaymentPlan> pricingPlans) {
    this.pricingPlans = pricingPlans;
    return this;
  }

  public AccountPayableFinancingOfferTerms addPricingPlansItem(InvoicePaymentPlan pricingPlansItem) {
    if (this.pricingPlans == null) {
      this.pricingPlans = new ArrayList<>();
    }
    this.pricingPlans.add(pricingPlansItem);
    return this;
  }

  /**
   * The pricing plans available for this offer.
   * @return pricingPlans
   */
  @javax.annotation.Nonnull
  public List<InvoicePaymentPlan> getPricingPlans() {
    return pricingPlans;
  }

  public void setPricingPlans(List<InvoicePaymentPlan> pricingPlans) {
    this.pricingPlans = pricingPlans;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccountPayableFinancingOfferTerms accountPayableFinancingOfferTerms = (AccountPayableFinancingOfferTerms) o;
    return Objects.equals(this.productType, accountPayableFinancingOfferTerms.productType) &&
        Objects.equals(this.totalLimitCents, accountPayableFinancingOfferTerms.totalLimitCents) &&
        Objects.equals(this.pricingPlans, accountPayableFinancingOfferTerms.pricingPlans);
  }

  @Override
  public int hashCode() {
    return Objects.hash(productType, totalLimitCents, pricingPlans);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountPayableFinancingOfferTerms {\n");
    sb.append("    productType: ").append(toIndentedString(productType)).append("\n");
    sb.append("    totalLimitCents: ").append(toIndentedString(totalLimitCents)).append("\n");
    sb.append("    pricingPlans: ").append(toIndentedString(pricingPlans)).append("\n");
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

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("productType");
    openapiRequiredFields.add("totalLimitCents");
    openapiRequiredFields.add("pricingPlans");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to AccountPayableFinancingOfferTerms
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!AccountPayableFinancingOfferTerms.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in AccountPayableFinancingOfferTerms is not found in the empty JSON string", AccountPayableFinancingOfferTerms.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!AccountPayableFinancingOfferTerms.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `AccountPayableFinancingOfferTerms` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : AccountPayableFinancingOfferTerms.openapiRequiredFields) {
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
       if (!AccountPayableFinancingOfferTerms.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'AccountPayableFinancingOfferTerms' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<AccountPayableFinancingOfferTerms> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(AccountPayableFinancingOfferTerms.class));

       return (TypeAdapter<T>) new TypeAdapter<AccountPayableFinancingOfferTerms>() {
           @Override
           public void write(JsonWriter out, AccountPayableFinancingOfferTerms value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public AccountPayableFinancingOfferTerms read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of AccountPayableFinancingOfferTerms given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of AccountPayableFinancingOfferTerms
   * @throws IOException if the JSON string is invalid with respect to AccountPayableFinancingOfferTerms
   */
  public static AccountPayableFinancingOfferTerms fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, AccountPayableFinancingOfferTerms.class);
  }

  /**
   * Convert an instance of AccountPayableFinancingOfferTerms to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

