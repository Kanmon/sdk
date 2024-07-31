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
import com.kanmon.client.model.PaymentPlanRepaymentSchedule;
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
 * MultipleDurationInvoiceRepaymentWindow
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-07-31T15:58:38.669848-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class MultipleDurationInvoiceRepaymentWindow {
  /**
   * Gets or Sets repaymentType
   */
  @JsonAdapter(RepaymentTypeEnum.Adapter.class)
  public enum RepaymentTypeEnum {
    MULTIPLE_DURATION("MULTIPLE_DURATION");

    private String value;

    RepaymentTypeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static RepaymentTypeEnum fromValue(String value) {
      for (RepaymentTypeEnum b : RepaymentTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<RepaymentTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final RepaymentTypeEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public RepaymentTypeEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return RepaymentTypeEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      RepaymentTypeEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_REPAYMENT_TYPE = "repaymentType";
  @SerializedName(SERIALIZED_NAME_REPAYMENT_TYPE)
  private RepaymentTypeEnum repaymentType;

  public static final String SERIALIZED_NAME_REPAYMENT_SCHEDULE = "repaymentSchedule";
  @SerializedName(SERIALIZED_NAME_REPAYMENT_SCHEDULE)
  private PaymentPlanRepaymentSchedule repaymentSchedule;

  public MultipleDurationInvoiceRepaymentWindow() {
  }

  public MultipleDurationInvoiceRepaymentWindow repaymentType(RepaymentTypeEnum repaymentType) {
    this.repaymentType = repaymentType;
    return this;
  }

   /**
   * Get repaymentType
   * @return repaymentType
  **/
  @javax.annotation.Nonnull
  public RepaymentTypeEnum getRepaymentType() {
    return repaymentType;
  }

  public void setRepaymentType(RepaymentTypeEnum repaymentType) {
    this.repaymentType = repaymentType;
  }


  public MultipleDurationInvoiceRepaymentWindow repaymentSchedule(PaymentPlanRepaymentSchedule repaymentSchedule) {
    this.repaymentSchedule = repaymentSchedule;
    return this;
  }

   /**
   * Get repaymentSchedule
   * @return repaymentSchedule
  **/
  @javax.annotation.Nonnull
  public PaymentPlanRepaymentSchedule getRepaymentSchedule() {
    return repaymentSchedule;
  }

  public void setRepaymentSchedule(PaymentPlanRepaymentSchedule repaymentSchedule) {
    this.repaymentSchedule = repaymentSchedule;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MultipleDurationInvoiceRepaymentWindow multipleDurationInvoiceRepaymentWindow = (MultipleDurationInvoiceRepaymentWindow) o;
    return Objects.equals(this.repaymentType, multipleDurationInvoiceRepaymentWindow.repaymentType) &&
        Objects.equals(this.repaymentSchedule, multipleDurationInvoiceRepaymentWindow.repaymentSchedule);
  }

  @Override
  public int hashCode() {
    return Objects.hash(repaymentType, repaymentSchedule);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MultipleDurationInvoiceRepaymentWindow {\n");
    sb.append("    repaymentType: ").append(toIndentedString(repaymentType)).append("\n");
    sb.append("    repaymentSchedule: ").append(toIndentedString(repaymentSchedule)).append("\n");
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
    openapiFields.add("repaymentType");
    openapiFields.add("repaymentSchedule");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("repaymentType");
    openapiRequiredFields.add("repaymentSchedule");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to MultipleDurationInvoiceRepaymentWindow
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!MultipleDurationInvoiceRepaymentWindow.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in MultipleDurationInvoiceRepaymentWindow is not found in the empty JSON string", MultipleDurationInvoiceRepaymentWindow.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!MultipleDurationInvoiceRepaymentWindow.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `MultipleDurationInvoiceRepaymentWindow` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : MultipleDurationInvoiceRepaymentWindow.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("repaymentType").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `repaymentType` to be a primitive type in the JSON string but got `%s`", jsonObj.get("repaymentType").toString()));
      }
      // validate the required field `repaymentType`
      RepaymentTypeEnum.validateJsonElement(jsonObj.get("repaymentType"));
      // validate the required field `repaymentSchedule`
      PaymentPlanRepaymentSchedule.validateJsonElement(jsonObj.get("repaymentSchedule"));
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!MultipleDurationInvoiceRepaymentWindow.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'MultipleDurationInvoiceRepaymentWindow' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<MultipleDurationInvoiceRepaymentWindow> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(MultipleDurationInvoiceRepaymentWindow.class));

       return (TypeAdapter<T>) new TypeAdapter<MultipleDurationInvoiceRepaymentWindow>() {
           @Override
           public void write(JsonWriter out, MultipleDurationInvoiceRepaymentWindow value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public MultipleDurationInvoiceRepaymentWindow read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of MultipleDurationInvoiceRepaymentWindow given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of MultipleDurationInvoiceRepaymentWindow
  * @throws IOException if the JSON string is invalid with respect to MultipleDurationInvoiceRepaymentWindow
  */
  public static MultipleDurationInvoiceRepaymentWindow fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, MultipleDurationInvoiceRepaymentWindow.class);
  }

 /**
  * Convert an instance of MultipleDurationInvoiceRepaymentWindow to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

