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
import com.kanmon.client.model.IssuedProductServicingData;
import java.io.IOException;
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
 * IssuedProduct
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-08-02T17:11:18.940267-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class IssuedProduct {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_OFFER_ID = "offerId";
  @SerializedName(SERIALIZED_NAME_OFFER_ID)
  private String offerId;

  public static final String SERIALIZED_NAME_BUSINESS_ID = "businessId";
  @SerializedName(SERIALIZED_NAME_BUSINESS_ID)
  private String businessId;

  public static final String SERIALIZED_NAME_PLATFORM_BUSINESS_ID = "platformBusinessId";
  @SerializedName(SERIALIZED_NAME_PLATFORM_BUSINESS_ID)
  private String platformBusinessId;

  /**
   * The current status of the loan.
   */
  @JsonAdapter(LoanStatusEnum.Adapter.class)
  public enum LoanStatusEnum {
    CURRENT("CURRENT"),
    
    LATE("LATE"),
    
    FULLY_PAID("FULLY_PAID"),
    
    REFINANCED("REFINANCED"),
    
    CLOSED("CLOSED"),
    
    DEFAULTED("DEFAULTED");

    private String value;

    LoanStatusEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static LoanStatusEnum fromValue(String value) {
      for (LoanStatusEnum b : LoanStatusEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<LoanStatusEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final LoanStatusEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public LoanStatusEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return LoanStatusEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      LoanStatusEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_LOAN_STATUS = "loanStatus";
  @SerializedName(SERIALIZED_NAME_LOAN_STATUS)
  private LoanStatusEnum loanStatus;

  public static final String SERIALIZED_NAME_SERVICING_DATA = "servicingData";
  @SerializedName(SERIALIZED_NAME_SERVICING_DATA)
  private IssuedProductServicingData servicingData;

  public static final String SERIALIZED_NAME_CREATED_AT = "createdAt";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private String createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updatedAt";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private String updatedAt;

  public IssuedProduct() {
  }

  public IssuedProduct id(String id) {
    this.id = id;
    return this;
  }

   /**
   * The UUID representing the issued product in Kanmon.
   * @return id
  **/
  @javax.annotation.Nonnull
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public IssuedProduct offerId(String offerId) {
    this.offerId = offerId;
    return this;
  }

   /**
   * The UUID representing the offer tied to this issued product in Kanmon.
   * @return offerId
  **/
  @javax.annotation.Nonnull
  public String getOfferId() {
    return offerId;
  }

  public void setOfferId(String offerId) {
    this.offerId = offerId;
  }


  public IssuedProduct businessId(String businessId) {
    this.businessId = businessId;
    return this;
  }

   /**
   * The UUID representing the business in Kanmon.
   * @return businessId
  **/
  @javax.annotation.Nonnull
  public String getBusinessId() {
    return businessId;
  }

  public void setBusinessId(String businessId) {
    this.businessId = businessId;
  }


  public IssuedProduct platformBusinessId(String platformBusinessId) {
    this.platformBusinessId = platformBusinessId;
    return this;
  }

   /**
   * Your platform’s unique ID for the business.
   * @return platformBusinessId
  **/
  @javax.annotation.Nullable
  public String getPlatformBusinessId() {
    return platformBusinessId;
  }

  public void setPlatformBusinessId(String platformBusinessId) {
    this.platformBusinessId = platformBusinessId;
  }


  public IssuedProduct loanStatus(LoanStatusEnum loanStatus) {
    this.loanStatus = loanStatus;
    return this;
  }

   /**
   * The current status of the loan.
   * @return loanStatus
  **/
  @javax.annotation.Nonnull
  public LoanStatusEnum getLoanStatus() {
    return loanStatus;
  }

  public void setLoanStatus(LoanStatusEnum loanStatus) {
    this.loanStatus = loanStatus;
  }


  public IssuedProduct servicingData(IssuedProductServicingData servicingData) {
    this.servicingData = servicingData;
    return this;
  }

   /**
   * Get servicingData
   * @return servicingData
  **/
  @javax.annotation.Nonnull
  public IssuedProductServicingData getServicingData() {
    return servicingData;
  }

  public void setServicingData(IssuedProductServicingData servicingData) {
    this.servicingData = servicingData;
  }


  public IssuedProduct createdAt(String createdAt) {
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


  public IssuedProduct updatedAt(String updatedAt) {
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
    IssuedProduct issuedProduct = (IssuedProduct) o;
    return Objects.equals(this.id, issuedProduct.id) &&
        Objects.equals(this.offerId, issuedProduct.offerId) &&
        Objects.equals(this.businessId, issuedProduct.businessId) &&
        Objects.equals(this.platformBusinessId, issuedProduct.platformBusinessId) &&
        Objects.equals(this.loanStatus, issuedProduct.loanStatus) &&
        Objects.equals(this.servicingData, issuedProduct.servicingData) &&
        Objects.equals(this.createdAt, issuedProduct.createdAt) &&
        Objects.equals(this.updatedAt, issuedProduct.updatedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, offerId, businessId, platformBusinessId, loanStatus, servicingData, createdAt, updatedAt);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IssuedProduct {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    offerId: ").append(toIndentedString(offerId)).append("\n");
    sb.append("    businessId: ").append(toIndentedString(businessId)).append("\n");
    sb.append("    platformBusinessId: ").append(toIndentedString(platformBusinessId)).append("\n");
    sb.append("    loanStatus: ").append(toIndentedString(loanStatus)).append("\n");
    sb.append("    servicingData: ").append(toIndentedString(servicingData)).append("\n");
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
    openapiFields.add("id");
    openapiFields.add("offerId");
    openapiFields.add("businessId");
    openapiFields.add("platformBusinessId");
    openapiFields.add("loanStatus");
    openapiFields.add("servicingData");
    openapiFields.add("createdAt");
    openapiFields.add("updatedAt");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("id");
    openapiRequiredFields.add("offerId");
    openapiRequiredFields.add("businessId");
    openapiRequiredFields.add("platformBusinessId");
    openapiRequiredFields.add("loanStatus");
    openapiRequiredFields.add("servicingData");
    openapiRequiredFields.add("createdAt");
    openapiRequiredFields.add("updatedAt");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to IssuedProduct
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!IssuedProduct.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in IssuedProduct is not found in the empty JSON string", IssuedProduct.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!IssuedProduct.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `IssuedProduct` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : IssuedProduct.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("id").toString()));
      }
      if (!jsonObj.get("offerId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `offerId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("offerId").toString()));
      }
      if (!jsonObj.get("businessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `businessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("businessId").toString()));
      }
      if ((jsonObj.get("platformBusinessId") != null && !jsonObj.get("platformBusinessId").isJsonNull()) && !jsonObj.get("platformBusinessId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `platformBusinessId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("platformBusinessId").toString()));
      }
      if (!jsonObj.get("loanStatus").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `loanStatus` to be a primitive type in the JSON string but got `%s`", jsonObj.get("loanStatus").toString()));
      }
      // validate the required field `loanStatus`
      LoanStatusEnum.validateJsonElement(jsonObj.get("loanStatus"));
      // validate the required field `servicingData`
      IssuedProductServicingData.validateJsonElement(jsonObj.get("servicingData"));
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
       if (!IssuedProduct.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'IssuedProduct' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<IssuedProduct> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(IssuedProduct.class));

       return (TypeAdapter<T>) new TypeAdapter<IssuedProduct>() {
           @Override
           public void write(JsonWriter out, IssuedProduct value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public IssuedProduct read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of IssuedProduct given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of IssuedProduct
  * @throws IOException if the JSON string is invalid with respect to IssuedProduct
  */
  public static IssuedProduct fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, IssuedProduct.class);
  }

 /**
  * Convert an instance of IssuedProduct to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

