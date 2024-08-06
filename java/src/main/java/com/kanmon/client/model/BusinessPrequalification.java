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
 * BusinessPrequalification
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.5.0")
public class BusinessPrequalification {
  public static final String SERIALIZED_NAME_PRODUCT = "product";
  @SerializedName(SERIALIZED_NAME_PRODUCT)
  private ProductType product;

  public static final String SERIALIZED_NAME_PLATFORM_ID = "platformId";
  @SerializedName(SERIALIZED_NAME_PLATFORM_ID)
  private String platformId;

  public static final String SERIALIZED_NAME_BUSINESS_ID = "businessId";
  @SerializedName(SERIALIZED_NAME_BUSINESS_ID)
  private String businessId;

  public static final String SERIALIZED_NAME_PLATFORM_BUSINESS_ID = "platformBusinessId";
  @SerializedName(SERIALIZED_NAME_PLATFORM_BUSINESS_ID)
  private String platformBusinessId;

  public static final String SERIALIZED_NAME_IS_PREQUALIFIED = "isPrequalified";
  @SerializedName(SERIALIZED_NAME_IS_PREQUALIFIED)
  private Boolean isPrequalified;

  public static final String SERIALIZED_NAME_PREQUALIFIED_AMOUNT_CENTS = "prequalifiedAmountCents";
  @SerializedName(SERIALIZED_NAME_PREQUALIFIED_AMOUNT_CENTS)
  private BigDecimal prequalifiedAmountCents;

  public static final String SERIALIZED_NAME_CREATED_AT = "createdAt";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private String createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updatedAt";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private String updatedAt;

  public BusinessPrequalification() {
  }

  public BusinessPrequalification product(ProductType product) {
    this.product = product;
    return this;
  }

   /**
   * Get product
   * @return product
  **/
  @javax.annotation.Nonnull
  public ProductType getProduct() {
    return product;
  }

  public void setProduct(ProductType product) {
    this.product = product;
  }


  public BusinessPrequalification platformId(String platformId) {
    this.platformId = platformId;
    return this;
  }

   /**
   * The UUID representing your platform in Kanmon.
   * @return platformId
  **/
  @javax.annotation.Nonnull
  public String getPlatformId() {
    return platformId;
  }

  public void setPlatformId(String platformId) {
    this.platformId = platformId;
  }


  public BusinessPrequalification businessId(String businessId) {
    this.businessId = businessId;
    return this;
  }

   /**
   * The UUID representing the business in Kanmon.
   * @return businessId
  **/
  @javax.annotation.Nullable
  public String getBusinessId() {
    return businessId;
  }

  public void setBusinessId(String businessId) {
    this.businessId = businessId;
  }


  public BusinessPrequalification platformBusinessId(String platformBusinessId) {
    this.platformBusinessId = platformBusinessId;
    return this;
  }

   /**
   * Your platform’s unique ID for the business.
   * @return platformBusinessId
  **/
  @javax.annotation.Nonnull
  public String getPlatformBusinessId() {
    return platformBusinessId;
  }

  public void setPlatformBusinessId(String platformBusinessId) {
    this.platformBusinessId = platformBusinessId;
  }


  public BusinessPrequalification isPrequalified(Boolean isPrequalified) {
    this.isPrequalified = isPrequalified;
    return this;
  }

   /**
   * Whether or not the business has been prequalified.
   * @return isPrequalified
  **/
  @javax.annotation.Nonnull
  public Boolean getIsPrequalified() {
    return isPrequalified;
  }

  public void setIsPrequalified(Boolean isPrequalified) {
    this.isPrequalified = isPrequalified;
  }


  public BusinessPrequalification prequalifiedAmountCents(BigDecimal prequalifiedAmountCents) {
    this.prequalifiedAmountCents = prequalifiedAmountCents;
    return this;
  }

   /**
   * Number describing the prequalification amount of the business in cents.
   * @return prequalifiedAmountCents
  **/
  @javax.annotation.Nullable
  public BigDecimal getPrequalifiedAmountCents() {
    return prequalifiedAmountCents;
  }

  public void setPrequalifiedAmountCents(BigDecimal prequalifiedAmountCents) {
    this.prequalifiedAmountCents = prequalifiedAmountCents;
  }


  public BusinessPrequalification createdAt(String createdAt) {
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Creation UTC ISO 8601 timestamp of the prequalification.
   * @return createdAt
  **/
  @javax.annotation.Nonnull
  public String getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }


  public BusinessPrequalification updatedAt(String updatedAt) {
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Last updated UTC ISO 8601 timestamp of the prequalification.
   * @return updatedAt
  **/
  @javax.annotation.Nonnull
  public String getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(String updatedAt) {
    this.updatedAt = updatedAt;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BusinessPrequalification businessPrequalification = (BusinessPrequalification) o;
    return Objects.equals(this.product, businessPrequalification.product) &&
        Objects.equals(this.platformId, businessPrequalification.platformId) &&
        Objects.equals(this.businessId, businessPrequalification.businessId) &&
        Objects.equals(this.platformBusinessId, businessPrequalification.platformBusinessId) &&
        Objects.equals(this.isPrequalified, businessPrequalification.isPrequalified) &&
        Objects.equals(this.prequalifiedAmountCents, businessPrequalification.prequalifiedAmountCents) &&
        Objects.equals(this.createdAt, businessPrequalification.createdAt) &&
        Objects.equals(this.updatedAt, businessPrequalification.updatedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(product, platformId, businessId, platformBusinessId, isPrequalified, prequalifiedAmountCents, createdAt, updatedAt);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BusinessPrequalification {\n");
    sb.append("    product: ").append(toIndentedString(product)).append("\n");
    sb.append("    platformId: ").append(toIndentedString(platformId)).append("\n");
    sb.append("    businessId: ").append(toIndentedString(businessId)).append("\n");
    sb.append("    platformBusinessId: ").append(toIndentedString(platformBusinessId)).append("\n");
    sb.append("    isPrequalified: ").append(toIndentedString(isPrequalified)).append("\n");
    sb.append("    prequalifiedAmountCents: ").append(toIndentedString(prequalifiedAmountCents)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
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
    openapiFields.add("product");
    openapiFields.add("platformId");
    openapiFields.add("businessId");
    openapiFields.add("platformBusinessId");
    openapiFields.add("isPrequalified");
    openapiFields.add("prequalifiedAmountCents");
    openapiFields.add("createdAt");
    openapiFields.add("updatedAt");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("product");
    openapiRequiredFields.add("platformId");
    openapiRequiredFields.add("businessId");
    openapiRequiredFields.add("platformBusinessId");
    openapiRequiredFields.add("isPrequalified");
    openapiRequiredFields.add("prequalifiedAmountCents");
    openapiRequiredFields.add("createdAt");
    openapiRequiredFields.add("updatedAt");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to BusinessPrequalification
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!BusinessPrequalification.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in BusinessPrequalification is not found in the empty JSON string", BusinessPrequalification.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!BusinessPrequalification.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `BusinessPrequalification` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : BusinessPrequalification.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // validate the required field `product`
      ProductType.validateJsonElement(jsonObj.get("product"));
      if (!jsonObj.get("platformId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `platformId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("platformId").toString()));
      }
      if ((jsonObj.get("businessId") != null && !jsonObj.get("businessId").isJsonNull()) && !jsonObj.get("businessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `businessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("businessId").toString()));
      }
      if (!jsonObj.get("platformBusinessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `platformBusinessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("platformBusinessId").toString()));
      }
      if (!jsonObj.get("createdAt").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `createdAt` to be a primitive type in the JSON string but got `%s`", jsonObj.get("createdAt").toString()));
      }
      if (!jsonObj.get("updatedAt").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `updatedAt` to be a primitive type in the JSON string but got `%s`", jsonObj.get("updatedAt").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!BusinessPrequalification.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'BusinessPrequalification' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<BusinessPrequalification> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(BusinessPrequalification.class));

       return (TypeAdapter<T>) new TypeAdapter<BusinessPrequalification>() {
           @Override
           public void write(JsonWriter out, BusinessPrequalification value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public BusinessPrequalification read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of BusinessPrequalification given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of BusinessPrequalification
  * @throws IOException if the JSON string is invalid with respect to BusinessPrequalification
  */
  public static BusinessPrequalification fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, BusinessPrequalification.class);
  }

 /**
  * Convert an instance of BusinessPrequalification to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

