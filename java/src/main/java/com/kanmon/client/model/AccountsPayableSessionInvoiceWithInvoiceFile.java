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
 * AccountsPayableSessionInvoiceWithInvoiceFile
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
public class AccountsPayableSessionInvoiceWithInvoiceFile {
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

  public static final String SERIALIZED_NAME_PAYEE_EMAIL = "payeeEmail";
  @SerializedName(SERIALIZED_NAME_PAYEE_EMAIL)
  private String payeeEmail;

  public static final String SERIALIZED_NAME_PAYEE_ADDRESS = "payeeAddress";
  @SerializedName(SERIALIZED_NAME_PAYEE_ADDRESS)
  private Address payeeAddress;

  /**
   * &#x60;INDIVIDUAL&#x60; if the payee is a person and &#x60;BUSINESS&#x60; if the payee is a company.
   */
  @JsonAdapter(PayeeTypeEnum.Adapter.class)
  public enum PayeeTypeEnum {
    BUSINESS("BUSINESS"),
    
    INDIVIDUAL("INDIVIDUAL");

    private String value;

    PayeeTypeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static PayeeTypeEnum fromValue(String value) {
      for (PayeeTypeEnum b : PayeeTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<PayeeTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final PayeeTypeEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public PayeeTypeEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return PayeeTypeEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      PayeeTypeEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_PAYEE_TYPE = "payeeType";
  @SerializedName(SERIALIZED_NAME_PAYEE_TYPE)
  private PayeeTypeEnum payeeType;

  public static final String SERIALIZED_NAME_PAYEE_BUSINESS_NAME = "payeeBusinessName";
  @SerializedName(SERIALIZED_NAME_PAYEE_BUSINESS_NAME)
  private String payeeBusinessName;

  public static final String SERIALIZED_NAME_PAYEE_FIRST_NAME = "payeeFirstName";
  @SerializedName(SERIALIZED_NAME_PAYEE_FIRST_NAME)
  private String payeeFirstName;

  public static final String SERIALIZED_NAME_PAYEE_MIDDLE_NAME = "payeeMiddleName";
  @SerializedName(SERIALIZED_NAME_PAYEE_MIDDLE_NAME)
  private String payeeMiddleName;

  public static final String SERIALIZED_NAME_PAYEE_LAST_NAME = "payeeLastName";
  @SerializedName(SERIALIZED_NAME_PAYEE_LAST_NAME)
  private String payeeLastName;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public AccountsPayableSessionInvoiceWithInvoiceFile() {
  }

  public AccountsPayableSessionInvoiceWithInvoiceFile platformInvoiceId(String platformInvoiceId) {
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


  public AccountsPayableSessionInvoiceWithInvoiceFile documentId(String documentId) {
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


  public AccountsPayableSessionInvoiceWithInvoiceFile platformInvoiceNumber(String platformInvoiceNumber) {
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


  public AccountsPayableSessionInvoiceWithInvoiceFile invoiceAmountCents(BigDecimal invoiceAmountCents) {
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


  public AccountsPayableSessionInvoiceWithInvoiceFile invoiceDueDate(String invoiceDueDate) {
    this.invoiceDueDate = invoiceDueDate;
    return this;
  }

  /**
   * The date when the invoice will be paid by the payor. ISO 8601 date format. This date must be no more than 5 days in the past. If &#x60;invoiceIssuedDate&#x60; is provided, then it must be after &#x60;invoiceIssuedDate&#x60;.
   * @return invoiceDueDate
   */
  @javax.annotation.Nullable
  public String getInvoiceDueDate() {
    return invoiceDueDate;
  }

  public void setInvoiceDueDate(String invoiceDueDate) {
    this.invoiceDueDate = invoiceDueDate;
  }


  public AccountsPayableSessionInvoiceWithInvoiceFile invoiceIssuedDate(String invoiceIssuedDate) {
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


  public AccountsPayableSessionInvoiceWithInvoiceFile payeeEmail(String payeeEmail) {
    this.payeeEmail = payeeEmail;
    return this;
  }

  /**
   * The email of the payee.
   * @return payeeEmail
   */
  @javax.annotation.Nullable
  public String getPayeeEmail() {
    return payeeEmail;
  }

  public void setPayeeEmail(String payeeEmail) {
    this.payeeEmail = payeeEmail;
  }


  public AccountsPayableSessionInvoiceWithInvoiceFile payeeAddress(Address payeeAddress) {
    this.payeeAddress = payeeAddress;
    return this;
  }

  /**
   * The address of the payee. The address is optional. If you provide the address, you need to provide all the required fields in the address.
   * @return payeeAddress
   */
  @javax.annotation.Nullable
  public Address getPayeeAddress() {
    return payeeAddress;
  }

  public void setPayeeAddress(Address payeeAddress) {
    this.payeeAddress = payeeAddress;
  }


  public AccountsPayableSessionInvoiceWithInvoiceFile payeeType(PayeeTypeEnum payeeType) {
    this.payeeType = payeeType;
    return this;
  }

  /**
   * &#x60;INDIVIDUAL&#x60; if the payee is a person and &#x60;BUSINESS&#x60; if the payee is a company.
   * @return payeeType
   */
  @javax.annotation.Nullable
  public PayeeTypeEnum getPayeeType() {
    return payeeType;
  }

  public void setPayeeType(PayeeTypeEnum payeeType) {
    this.payeeType = payeeType;
  }


  public AccountsPayableSessionInvoiceWithInvoiceFile payeeBusinessName(String payeeBusinessName) {
    this.payeeBusinessName = payeeBusinessName;
    return this;
  }

  /**
   * The registered name of the payee business when the payee is a business and not an individual.
   * @return payeeBusinessName
   */
  @javax.annotation.Nullable
  public String getPayeeBusinessName() {
    return payeeBusinessName;
  }

  public void setPayeeBusinessName(String payeeBusinessName) {
    this.payeeBusinessName = payeeBusinessName;
  }


  public AccountsPayableSessionInvoiceWithInvoiceFile payeeFirstName(String payeeFirstName) {
    this.payeeFirstName = payeeFirstName;
    return this;
  }

  /**
   * The first name of the payee when the payee is an individual and not a business.
   * @return payeeFirstName
   */
  @javax.annotation.Nullable
  public String getPayeeFirstName() {
    return payeeFirstName;
  }

  public void setPayeeFirstName(String payeeFirstName) {
    this.payeeFirstName = payeeFirstName;
  }


  public AccountsPayableSessionInvoiceWithInvoiceFile payeeMiddleName(String payeeMiddleName) {
    this.payeeMiddleName = payeeMiddleName;
    return this;
  }

  /**
   * The middle name of the payee when the payee is an individual and not a business.
   * @return payeeMiddleName
   */
  @javax.annotation.Nullable
  public String getPayeeMiddleName() {
    return payeeMiddleName;
  }

  public void setPayeeMiddleName(String payeeMiddleName) {
    this.payeeMiddleName = payeeMiddleName;
  }


  public AccountsPayableSessionInvoiceWithInvoiceFile payeeLastName(String payeeLastName) {
    this.payeeLastName = payeeLastName;
    return this;
  }

  /**
   * The last name of the payee when the payee is an individual and not a business.
   * @return payeeLastName
   */
  @javax.annotation.Nullable
  public String getPayeeLastName() {
    return payeeLastName;
  }

  public void setPayeeLastName(String payeeLastName) {
    this.payeeLastName = payeeLastName;
  }


  public AccountsPayableSessionInvoiceWithInvoiceFile description(String description) {
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
    AccountsPayableSessionInvoiceWithInvoiceFile accountsPayableSessionInvoiceWithInvoiceFile = (AccountsPayableSessionInvoiceWithInvoiceFile) o;
    return Objects.equals(this.platformInvoiceId, accountsPayableSessionInvoiceWithInvoiceFile.platformInvoiceId) &&
        Objects.equals(this.documentId, accountsPayableSessionInvoiceWithInvoiceFile.documentId) &&
        Objects.equals(this.platformInvoiceNumber, accountsPayableSessionInvoiceWithInvoiceFile.platformInvoiceNumber) &&
        Objects.equals(this.invoiceAmountCents, accountsPayableSessionInvoiceWithInvoiceFile.invoiceAmountCents) &&
        Objects.equals(this.invoiceDueDate, accountsPayableSessionInvoiceWithInvoiceFile.invoiceDueDate) &&
        Objects.equals(this.invoiceIssuedDate, accountsPayableSessionInvoiceWithInvoiceFile.invoiceIssuedDate) &&
        Objects.equals(this.payeeEmail, accountsPayableSessionInvoiceWithInvoiceFile.payeeEmail) &&
        Objects.equals(this.payeeAddress, accountsPayableSessionInvoiceWithInvoiceFile.payeeAddress) &&
        Objects.equals(this.payeeType, accountsPayableSessionInvoiceWithInvoiceFile.payeeType) &&
        Objects.equals(this.payeeBusinessName, accountsPayableSessionInvoiceWithInvoiceFile.payeeBusinessName) &&
        Objects.equals(this.payeeFirstName, accountsPayableSessionInvoiceWithInvoiceFile.payeeFirstName) &&
        Objects.equals(this.payeeMiddleName, accountsPayableSessionInvoiceWithInvoiceFile.payeeMiddleName) &&
        Objects.equals(this.payeeLastName, accountsPayableSessionInvoiceWithInvoiceFile.payeeLastName) &&
        Objects.equals(this.description, accountsPayableSessionInvoiceWithInvoiceFile.description);
  }

  @Override
  public int hashCode() {
    return Objects.hash(platformInvoiceId, documentId, platformInvoiceNumber, invoiceAmountCents, invoiceDueDate, invoiceIssuedDate, payeeEmail, payeeAddress, payeeType, payeeBusinessName, payeeFirstName, payeeMiddleName, payeeLastName, description);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountsPayableSessionInvoiceWithInvoiceFile {\n");
    sb.append("    platformInvoiceId: ").append(toIndentedString(platformInvoiceId)).append("\n");
    sb.append("    documentId: ").append(toIndentedString(documentId)).append("\n");
    sb.append("    platformInvoiceNumber: ").append(toIndentedString(platformInvoiceNumber)).append("\n");
    sb.append("    invoiceAmountCents: ").append(toIndentedString(invoiceAmountCents)).append("\n");
    sb.append("    invoiceDueDate: ").append(toIndentedString(invoiceDueDate)).append("\n");
    sb.append("    invoiceIssuedDate: ").append(toIndentedString(invoiceIssuedDate)).append("\n");
    sb.append("    payeeEmail: ").append(toIndentedString(payeeEmail)).append("\n");
    sb.append("    payeeAddress: ").append(toIndentedString(payeeAddress)).append("\n");
    sb.append("    payeeType: ").append(toIndentedString(payeeType)).append("\n");
    sb.append("    payeeBusinessName: ").append(toIndentedString(payeeBusinessName)).append("\n");
    sb.append("    payeeFirstName: ").append(toIndentedString(payeeFirstName)).append("\n");
    sb.append("    payeeMiddleName: ").append(toIndentedString(payeeMiddleName)).append("\n");
    sb.append("    payeeLastName: ").append(toIndentedString(payeeLastName)).append("\n");
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
    openapiFields.add("payeeEmail");
    openapiFields.add("payeeAddress");
    openapiFields.add("payeeType");
    openapiFields.add("payeeBusinessName");
    openapiFields.add("payeeFirstName");
    openapiFields.add("payeeMiddleName");
    openapiFields.add("payeeLastName");
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
   * @throws IOException if the JSON Element is invalid with respect to AccountsPayableSessionInvoiceWithInvoiceFile
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!AccountsPayableSessionInvoiceWithInvoiceFile.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in AccountsPayableSessionInvoiceWithInvoiceFile is not found in the empty JSON string", AccountsPayableSessionInvoiceWithInvoiceFile.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!AccountsPayableSessionInvoiceWithInvoiceFile.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `AccountsPayableSessionInvoiceWithInvoiceFile` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : AccountsPayableSessionInvoiceWithInvoiceFile.openapiRequiredFields) {
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
      if ((jsonObj.get("payeeEmail") != null && !jsonObj.get("payeeEmail").isJsonNull()) && !jsonObj.get("payeeEmail").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `payeeEmail` to be a primitive type in the JSON string but got `%s`", jsonObj.get("payeeEmail").toString()));
      }
      // validate the optional field `payeeAddress`
      if (jsonObj.get("payeeAddress") != null && !jsonObj.get("payeeAddress").isJsonNull()) {
        Address.validateJsonElement(jsonObj.get("payeeAddress"));
      }
      if ((jsonObj.get("payeeType") != null && !jsonObj.get("payeeType").isJsonNull()) && !jsonObj.get("payeeType").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `payeeType` to be a primitive type in the JSON string but got `%s`", jsonObj.get("payeeType").toString()));
      }
      // validate the optional field `payeeType`
      if (jsonObj.get("payeeType") != null && !jsonObj.get("payeeType").isJsonNull()) {
        PayeeTypeEnum.validateJsonElement(jsonObj.get("payeeType"));
      }
      if ((jsonObj.get("payeeBusinessName") != null && !jsonObj.get("payeeBusinessName").isJsonNull()) && !jsonObj.get("payeeBusinessName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `payeeBusinessName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("payeeBusinessName").toString()));
      }
      if ((jsonObj.get("payeeFirstName") != null && !jsonObj.get("payeeFirstName").isJsonNull()) && !jsonObj.get("payeeFirstName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `payeeFirstName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("payeeFirstName").toString()));
      }
      if ((jsonObj.get("payeeMiddleName") != null && !jsonObj.get("payeeMiddleName").isJsonNull()) && !jsonObj.get("payeeMiddleName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `payeeMiddleName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("payeeMiddleName").toString()));
      }
      if ((jsonObj.get("payeeLastName") != null && !jsonObj.get("payeeLastName").isJsonNull()) && !jsonObj.get("payeeLastName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `payeeLastName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("payeeLastName").toString()));
      }
      if ((jsonObj.get("description") != null && !jsonObj.get("description").isJsonNull()) && !jsonObj.get("description").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `description` to be a primitive type in the JSON string but got `%s`", jsonObj.get("description").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!AccountsPayableSessionInvoiceWithInvoiceFile.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'AccountsPayableSessionInvoiceWithInvoiceFile' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<AccountsPayableSessionInvoiceWithInvoiceFile> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(AccountsPayableSessionInvoiceWithInvoiceFile.class));

       return (TypeAdapter<T>) new TypeAdapter<AccountsPayableSessionInvoiceWithInvoiceFile>() {
           @Override
           public void write(JsonWriter out, AccountsPayableSessionInvoiceWithInvoiceFile value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public AccountsPayableSessionInvoiceWithInvoiceFile read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of AccountsPayableSessionInvoiceWithInvoiceFile given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of AccountsPayableSessionInvoiceWithInvoiceFile
   * @throws IOException if the JSON string is invalid with respect to AccountsPayableSessionInvoiceWithInvoiceFile
   */
  public static AccountsPayableSessionInvoiceWithInvoiceFile fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, AccountsPayableSessionInvoiceWithInvoiceFile.class);
  }

  /**
   * Convert an instance of AccountsPayableSessionInvoiceWithInvoiceFile to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

