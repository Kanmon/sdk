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
import com.kanmon.client.model.Address;
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
 * SessionInvoiceWithInvoiceFile
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
public class SessionInvoiceWithInvoiceFile {
  public static final String SERIALIZED_NAME_PLATFORM_INVOICE_ID = "platformInvoiceId";
  @SerializedName(SERIALIZED_NAME_PLATFORM_INVOICE_ID)
  private String platformInvoiceId;

  public static final String SERIALIZED_NAME_DOCUMENT_ID = "documentId";
  @SerializedName(SERIALIZED_NAME_DOCUMENT_ID)
  private String documentId;

  public static final String SERIALIZED_NAME_PLATFORM_INVOICE_NUMBER = "platformInvoiceNumber";
  @SerializedName(SERIALIZED_NAME_PLATFORM_INVOICE_NUMBER)
  private String platformInvoiceNumber;

  public static final String SERIALIZED_NAME_INVOICE_AMOUNT_CENTS = "invoiceAmountCents";
  @SerializedName(SERIALIZED_NAME_INVOICE_AMOUNT_CENTS)
  private BigDecimal invoiceAmountCents;

  public static final String SERIALIZED_NAME_INVOICE_DUE_DATE = "invoiceDueDate";
  @SerializedName(SERIALIZED_NAME_INVOICE_DUE_DATE)
  private String invoiceDueDate;

  public static final String SERIALIZED_NAME_INVOICE_ISSUED_DATE = "invoiceIssuedDate";
  @SerializedName(SERIALIZED_NAME_INVOICE_ISSUED_DATE)
  private String invoiceIssuedDate;

  public static final String SERIALIZED_NAME_PAYOR_EMAIL = "payorEmail";
  @SerializedName(SERIALIZED_NAME_PAYOR_EMAIL)
  private String payorEmail;

  public static final String SERIALIZED_NAME_PAYOR_ADDRESS = "payorAddress";
  @SerializedName(SERIALIZED_NAME_PAYOR_ADDRESS)
  private Address payorAddress;

  /**
   * &#x60;INDIVIDUAL&#x60; if the payor is a person and &#x60;BUSINESS&#x60; if the payor is a company.
   */
  @JsonAdapter(PayorTypeEnum.Adapter.class)
  public enum PayorTypeEnum {
    BUSINESS("BUSINESS"),
    
    INDIVIDUAL("INDIVIDUAL");

    private String value;

    PayorTypeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static PayorTypeEnum fromValue(String value) {
      for (PayorTypeEnum b : PayorTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<PayorTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final PayorTypeEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public PayorTypeEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return PayorTypeEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      PayorTypeEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_PAYOR_TYPE = "payorType";
  @SerializedName(SERIALIZED_NAME_PAYOR_TYPE)
  private PayorTypeEnum payorType;

  public static final String SERIALIZED_NAME_PAYOR_BUSINESS_NAME = "payorBusinessName";
  @SerializedName(SERIALIZED_NAME_PAYOR_BUSINESS_NAME)
  private String payorBusinessName;

  public static final String SERIALIZED_NAME_PAYOR_FIRST_NAME = "payorFirstName";
  @SerializedName(SERIALIZED_NAME_PAYOR_FIRST_NAME)
  private String payorFirstName;

  public static final String SERIALIZED_NAME_PAYOR_MIDDLE_NAME = "payorMiddleName";
  @SerializedName(SERIALIZED_NAME_PAYOR_MIDDLE_NAME)
  private String payorMiddleName;

  public static final String SERIALIZED_NAME_PAYOR_LAST_NAME = "payorLastName";
  @SerializedName(SERIALIZED_NAME_PAYOR_LAST_NAME)
  private String payorLastName;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public SessionInvoiceWithInvoiceFile() {
  }

  public SessionInvoiceWithInvoiceFile platformInvoiceId(String platformInvoiceId) {
    this.platformInvoiceId = platformInvoiceId;
    return this;
  }

  /**
   * Your platform’s unique ID for the invoice.
   * @return platformInvoiceId
   */
  @javax.annotation.Nonnull
  public String getPlatformInvoiceId() {
    return platformInvoiceId;
  }

  public void setPlatformInvoiceId(String platformInvoiceId) {
    this.platformInvoiceId = platformInvoiceId;
  }


  public SessionInvoiceWithInvoiceFile documentId(String documentId) {
    this.documentId = documentId;
    return this;
  }

  /**
   * The UUID of the invoice document created in Kanmon.
   * @return documentId
   */
  @javax.annotation.Nonnull
  public String getDocumentId() {
    return documentId;
  }

  public void setDocumentId(String documentId) {
    this.documentId = documentId;
  }


  public SessionInvoiceWithInvoiceFile platformInvoiceNumber(String platformInvoiceNumber) {
    this.platformInvoiceNumber = platformInvoiceNumber;
    return this;
  }

  /**
   * Your user-facing identifier for the invoice. This does not need to be unique. This may or may not be the same as your &#x60;platformInvoiceId&#x60;.
   * @return platformInvoiceNumber
   */
  @javax.annotation.Nullable
  public String getPlatformInvoiceNumber() {
    return platformInvoiceNumber;
  }

  public void setPlatformInvoiceNumber(String platformInvoiceNumber) {
    this.platformInvoiceNumber = platformInvoiceNumber;
  }


  public SessionInvoiceWithInvoiceFile invoiceAmountCents(BigDecimal invoiceAmountCents) {
    this.invoiceAmountCents = invoiceAmountCents;
    return this;
  }

  /**
   * The invoice amount - in cents. This needs to be greater than or equal to 100.
   * @return invoiceAmountCents
   */
  @javax.annotation.Nullable
  public BigDecimal getInvoiceAmountCents() {
    return invoiceAmountCents;
  }

  public void setInvoiceAmountCents(BigDecimal invoiceAmountCents) {
    this.invoiceAmountCents = invoiceAmountCents;
  }


  public SessionInvoiceWithInvoiceFile invoiceDueDate(String invoiceDueDate) {
    this.invoiceDueDate = invoiceDueDate;
    return this;
  }

  /**
   * The date when the invoice will be paid by the payor. ISO 8601 date format. This date must be at least 7 days in the future and must be after the &#x60;invoiceIssuedDate&#x60;.
   * @return invoiceDueDate
   */
  @javax.annotation.Nullable
  public String getInvoiceDueDate() {
    return invoiceDueDate;
  }

  public void setInvoiceDueDate(String invoiceDueDate) {
    this.invoiceDueDate = invoiceDueDate;
  }


  public SessionInvoiceWithInvoiceFile invoiceIssuedDate(String invoiceIssuedDate) {
    this.invoiceIssuedDate = invoiceIssuedDate;
    return this;
  }

  /**
   * The date when the payee issued the invoice. ISO 8601 date format.
   * @return invoiceIssuedDate
   */
  @javax.annotation.Nullable
  public String getInvoiceIssuedDate() {
    return invoiceIssuedDate;
  }

  public void setInvoiceIssuedDate(String invoiceIssuedDate) {
    this.invoiceIssuedDate = invoiceIssuedDate;
  }


  public SessionInvoiceWithInvoiceFile payorEmail(String payorEmail) {
    this.payorEmail = payorEmail;
    return this;
  }

  /**
   * The email of the payor.
   * @return payorEmail
   */
  @javax.annotation.Nullable
  public String getPayorEmail() {
    return payorEmail;
  }

  public void setPayorEmail(String payorEmail) {
    this.payorEmail = payorEmail;
  }


  public SessionInvoiceWithInvoiceFile payorAddress(Address payorAddress) {
    this.payorAddress = payorAddress;
    return this;
  }

  /**
   * The address of the payor. The address is optional. If you provide the address, you need to provide all the required fields in the address. The address must be a street address, not a PO Box.
   * @return payorAddress
   */
  @javax.annotation.Nullable
  public Address getPayorAddress() {
    return payorAddress;
  }

  public void setPayorAddress(Address payorAddress) {
    this.payorAddress = payorAddress;
  }


  public SessionInvoiceWithInvoiceFile payorType(PayorTypeEnum payorType) {
    this.payorType = payorType;
    return this;
  }

  /**
   * &#x60;INDIVIDUAL&#x60; if the payor is a person and &#x60;BUSINESS&#x60; if the payor is a company.
   * @return payorType
   */
  @javax.annotation.Nullable
  public PayorTypeEnum getPayorType() {
    return payorType;
  }

  public void setPayorType(PayorTypeEnum payorType) {
    this.payorType = payorType;
  }


  public SessionInvoiceWithInvoiceFile payorBusinessName(String payorBusinessName) {
    this.payorBusinessName = payorBusinessName;
    return this;
  }

  /**
   * The registered name of the payor business when the payor is a business and not an individual.
   * @return payorBusinessName
   */
  @javax.annotation.Nullable
  public String getPayorBusinessName() {
    return payorBusinessName;
  }

  public void setPayorBusinessName(String payorBusinessName) {
    this.payorBusinessName = payorBusinessName;
  }


  public SessionInvoiceWithInvoiceFile payorFirstName(String payorFirstName) {
    this.payorFirstName = payorFirstName;
    return this;
  }

  /**
   * The first name of the payor when the payor is an individual and not a business.
   * @return payorFirstName
   */
  @javax.annotation.Nullable
  public String getPayorFirstName() {
    return payorFirstName;
  }

  public void setPayorFirstName(String payorFirstName) {
    this.payorFirstName = payorFirstName;
  }


  public SessionInvoiceWithInvoiceFile payorMiddleName(String payorMiddleName) {
    this.payorMiddleName = payorMiddleName;
    return this;
  }

  /**
   * The middle name of the payor when the payor is an individual and not a business.
   * @return payorMiddleName
   */
  @javax.annotation.Nullable
  public String getPayorMiddleName() {
    return payorMiddleName;
  }

  public void setPayorMiddleName(String payorMiddleName) {
    this.payorMiddleName = payorMiddleName;
  }


  public SessionInvoiceWithInvoiceFile payorLastName(String payorLastName) {
    this.payorLastName = payorLastName;
    return this;
  }

  /**
   * The last name of the payor when the payor is an individual and not a business.
   * @return payorLastName
   */
  @javax.annotation.Nullable
  public String getPayorLastName() {
    return payorLastName;
  }

  public void setPayorLastName(String payorLastName) {
    this.payorLastName = payorLastName;
  }


  public SessionInvoiceWithInvoiceFile description(String description) {
    this.description = description;
    return this;
  }

  /**
   * The description of the goods or services in the invoice.
   * @return description
   */
  @javax.annotation.Nullable
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SessionInvoiceWithInvoiceFile sessionInvoiceWithInvoiceFile = (SessionInvoiceWithInvoiceFile) o;
    return Objects.equals(this.platformInvoiceId, sessionInvoiceWithInvoiceFile.platformInvoiceId) &&
        Objects.equals(this.documentId, sessionInvoiceWithInvoiceFile.documentId) &&
        Objects.equals(this.platformInvoiceNumber, sessionInvoiceWithInvoiceFile.platformInvoiceNumber) &&
        Objects.equals(this.invoiceAmountCents, sessionInvoiceWithInvoiceFile.invoiceAmountCents) &&
        Objects.equals(this.invoiceDueDate, sessionInvoiceWithInvoiceFile.invoiceDueDate) &&
        Objects.equals(this.invoiceIssuedDate, sessionInvoiceWithInvoiceFile.invoiceIssuedDate) &&
        Objects.equals(this.payorEmail, sessionInvoiceWithInvoiceFile.payorEmail) &&
        Objects.equals(this.payorAddress, sessionInvoiceWithInvoiceFile.payorAddress) &&
        Objects.equals(this.payorType, sessionInvoiceWithInvoiceFile.payorType) &&
        Objects.equals(this.payorBusinessName, sessionInvoiceWithInvoiceFile.payorBusinessName) &&
        Objects.equals(this.payorFirstName, sessionInvoiceWithInvoiceFile.payorFirstName) &&
        Objects.equals(this.payorMiddleName, sessionInvoiceWithInvoiceFile.payorMiddleName) &&
        Objects.equals(this.payorLastName, sessionInvoiceWithInvoiceFile.payorLastName) &&
        Objects.equals(this.description, sessionInvoiceWithInvoiceFile.description);
  }

  @Override
  public int hashCode() {
    return Objects.hash(platformInvoiceId, documentId, platformInvoiceNumber, invoiceAmountCents, invoiceDueDate, invoiceIssuedDate, payorEmail, payorAddress, payorType, payorBusinessName, payorFirstName, payorMiddleName, payorLastName, description);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SessionInvoiceWithInvoiceFile {\n");
    sb.append("    platformInvoiceId: ").append(toIndentedString(platformInvoiceId)).append("\n");
    sb.append("    documentId: ").append(toIndentedString(documentId)).append("\n");
    sb.append("    platformInvoiceNumber: ").append(toIndentedString(platformInvoiceNumber)).append("\n");
    sb.append("    invoiceAmountCents: ").append(toIndentedString(invoiceAmountCents)).append("\n");
    sb.append("    invoiceDueDate: ").append(toIndentedString(invoiceDueDate)).append("\n");
    sb.append("    invoiceIssuedDate: ").append(toIndentedString(invoiceIssuedDate)).append("\n");
    sb.append("    payorEmail: ").append(toIndentedString(payorEmail)).append("\n");
    sb.append("    payorAddress: ").append(toIndentedString(payorAddress)).append("\n");
    sb.append("    payorType: ").append(toIndentedString(payorType)).append("\n");
    sb.append("    payorBusinessName: ").append(toIndentedString(payorBusinessName)).append("\n");
    sb.append("    payorFirstName: ").append(toIndentedString(payorFirstName)).append("\n");
    sb.append("    payorMiddleName: ").append(toIndentedString(payorMiddleName)).append("\n");
    sb.append("    payorLastName: ").append(toIndentedString(payorLastName)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
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
    openapiFields.add("platformInvoiceId");
    openapiFields.add("documentId");
    openapiFields.add("platformInvoiceNumber");
    openapiFields.add("invoiceAmountCents");
    openapiFields.add("invoiceDueDate");
    openapiFields.add("invoiceIssuedDate");
    openapiFields.add("payorEmail");
    openapiFields.add("payorAddress");
    openapiFields.add("payorType");
    openapiFields.add("payorBusinessName");
    openapiFields.add("payorFirstName");
    openapiFields.add("payorMiddleName");
    openapiFields.add("payorLastName");
    openapiFields.add("description");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("platformInvoiceId");
    openapiRequiredFields.add("documentId");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to SessionInvoiceWithInvoiceFile
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!SessionInvoiceWithInvoiceFile.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in SessionInvoiceWithInvoiceFile is not found in the empty JSON string", SessionInvoiceWithInvoiceFile.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!SessionInvoiceWithInvoiceFile.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `SessionInvoiceWithInvoiceFile` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : SessionInvoiceWithInvoiceFile.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("platformInvoiceId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `platformInvoiceId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("platformInvoiceId").toString()));
      }
      if (!jsonObj.get("documentId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `documentId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("documentId").toString()));
      }
      if ((jsonObj.get("platformInvoiceNumber") != null && !jsonObj.get("platformInvoiceNumber").isJsonNull()) && !jsonObj.get("platformInvoiceNumber").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `platformInvoiceNumber` to be a primitive type in the JSON string but got `%s`", jsonObj.get("platformInvoiceNumber").toString()));
      }
      if ((jsonObj.get("invoiceDueDate") != null && !jsonObj.get("invoiceDueDate").isJsonNull()) && !jsonObj.get("invoiceDueDate").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `invoiceDueDate` to be a primitive type in the JSON string but got `%s`", jsonObj.get("invoiceDueDate").toString()));
      }
      if ((jsonObj.get("invoiceIssuedDate") != null && !jsonObj.get("invoiceIssuedDate").isJsonNull()) && !jsonObj.get("invoiceIssuedDate").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `invoiceIssuedDate` to be a primitive type in the JSON string but got `%s`", jsonObj.get("invoiceIssuedDate").toString()));
      }
      if ((jsonObj.get("payorEmail") != null && !jsonObj.get("payorEmail").isJsonNull()) && !jsonObj.get("payorEmail").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `payorEmail` to be a primitive type in the JSON string but got `%s`", jsonObj.get("payorEmail").toString()));
      }
      // validate the optional field `payorAddress`
      if (jsonObj.get("payorAddress") != null && !jsonObj.get("payorAddress").isJsonNull()) {
        Address.validateJsonElement(jsonObj.get("payorAddress"));
      }
      if ((jsonObj.get("payorType") != null && !jsonObj.get("payorType").isJsonNull()) && !jsonObj.get("payorType").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `payorType` to be a primitive type in the JSON string but got `%s`", jsonObj.get("payorType").toString()));
      }
      // validate the optional field `payorType`
      if (jsonObj.get("payorType") != null && !jsonObj.get("payorType").isJsonNull()) {
        PayorTypeEnum.validateJsonElement(jsonObj.get("payorType"));
      }
      if ((jsonObj.get("payorBusinessName") != null && !jsonObj.get("payorBusinessName").isJsonNull()) && !jsonObj.get("payorBusinessName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `payorBusinessName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("payorBusinessName").toString()));
      }
      if ((jsonObj.get("payorFirstName") != null && !jsonObj.get("payorFirstName").isJsonNull()) && !jsonObj.get("payorFirstName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `payorFirstName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("payorFirstName").toString()));
      }
      if ((jsonObj.get("payorMiddleName") != null && !jsonObj.get("payorMiddleName").isJsonNull()) && !jsonObj.get("payorMiddleName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `payorMiddleName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("payorMiddleName").toString()));
      }
      if ((jsonObj.get("payorLastName") != null && !jsonObj.get("payorLastName").isJsonNull()) && !jsonObj.get("payorLastName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `payorLastName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("payorLastName").toString()));
      }
      if ((jsonObj.get("description") != null && !jsonObj.get("description").isJsonNull()) && !jsonObj.get("description").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `description` to be a primitive type in the JSON string but got `%s`", jsonObj.get("description").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!SessionInvoiceWithInvoiceFile.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'SessionInvoiceWithInvoiceFile' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<SessionInvoiceWithInvoiceFile> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(SessionInvoiceWithInvoiceFile.class));

       return (TypeAdapter<T>) new TypeAdapter<SessionInvoiceWithInvoiceFile>() {
           @Override
           public void write(JsonWriter out, SessionInvoiceWithInvoiceFile value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public SessionInvoiceWithInvoiceFile read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of SessionInvoiceWithInvoiceFile given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of SessionInvoiceWithInvoiceFile
   * @throws IOException if the JSON string is invalid with respect to SessionInvoiceWithInvoiceFile
   */
  public static SessionInvoiceWithInvoiceFile fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, SessionInvoiceWithInvoiceFile.class);
  }

  /**
   * Convert an instance of SessionInvoiceWithInvoiceFile to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

