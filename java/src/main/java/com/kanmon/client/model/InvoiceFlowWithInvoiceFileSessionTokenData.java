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
import com.kanmon.client.model.SessionInvoiceWithInvoiceFile;
import java.io.IOException;
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

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.kanmon.client.JSON;

/**
 * InvoiceFlowWithInvoiceFileSessionTokenData
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-08-02T17:11:18.940267-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class InvoiceFlowWithInvoiceFileSessionTokenData {
  /**
   * Generates a session token for the invoice confirmation flow. This option can be used if you do not have all the required invoice data for the SESSION_INVOICE_FLOW option. Optional data that is not provided may be collected from the user. An invoice PDF must be provided.&#x60;
   */
  @JsonAdapter(ComponentEnum.Adapter.class)
  public enum ComponentEnum {
    SESSION_INVOICE_FLOW_WITH_INVOICE_FILE("SESSION_INVOICE_FLOW_WITH_INVOICE_FILE");

    private String value;

    ComponentEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static ComponentEnum fromValue(String value) {
      for (ComponentEnum b : ComponentEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<ComponentEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ComponentEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public ComponentEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return ComponentEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      ComponentEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_COMPONENT = "component";
  @SerializedName(SERIALIZED_NAME_COMPONENT)
  private ComponentEnum component;

  public static final String SERIALIZED_NAME_INVOICES = "invoices";
  @SerializedName(SERIALIZED_NAME_INVOICES)
  private List<SessionInvoiceWithInvoiceFile> invoices = new ArrayList<>();

  public InvoiceFlowWithInvoiceFileSessionTokenData() {
  }

  public InvoiceFlowWithInvoiceFileSessionTokenData component(ComponentEnum component) {
    this.component = component;
    return this;
  }

   /**
   * Generates a session token for the invoice confirmation flow. This option can be used if you do not have all the required invoice data for the SESSION_INVOICE_FLOW option. Optional data that is not provided may be collected from the user. An invoice PDF must be provided.&#x60;
   * @return component
  **/
  @javax.annotation.Nonnull
  public ComponentEnum getComponent() {
    return component;
  }

  public void setComponent(ComponentEnum component) {
    this.component = component;
  }


  public InvoiceFlowWithInvoiceFileSessionTokenData invoices(List<SessionInvoiceWithInvoiceFile> invoices) {
    this.invoices = invoices;
    return this;
  }

  public InvoiceFlowWithInvoiceFileSessionTokenData addInvoicesItem(SessionInvoiceWithInvoiceFile invoicesItem) {
    if (this.invoices == null) {
      this.invoices = new ArrayList<>();
    }
    this.invoices.add(invoicesItem);
    return this;
  }

   /**
   * Details about the list of invoices which are to be created.
   * @return invoices
  **/
  @javax.annotation.Nonnull
  public List<SessionInvoiceWithInvoiceFile> getInvoices() {
    return invoices;
  }

  public void setInvoices(List<SessionInvoiceWithInvoiceFile> invoices) {
    this.invoices = invoices;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InvoiceFlowWithInvoiceFileSessionTokenData invoiceFlowWithInvoiceFileSessionTokenData = (InvoiceFlowWithInvoiceFileSessionTokenData) o;
    return Objects.equals(this.component, invoiceFlowWithInvoiceFileSessionTokenData.component) &&
        Objects.equals(this.invoices, invoiceFlowWithInvoiceFileSessionTokenData.invoices);
  }

  @Override
  public int hashCode() {
    return Objects.hash(component, invoices);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InvoiceFlowWithInvoiceFileSessionTokenData {\n");
    sb.append("    component: ").append(toIndentedString(component)).append("\n");
    sb.append("    invoices: ").append(toIndentedString(invoices)).append("\n");
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
    openapiFields.add("component");
    openapiFields.add("invoices");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("component");
    openapiRequiredFields.add("invoices");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to InvoiceFlowWithInvoiceFileSessionTokenData
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!InvoiceFlowWithInvoiceFileSessionTokenData.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in InvoiceFlowWithInvoiceFileSessionTokenData is not found in the empty JSON string", InvoiceFlowWithInvoiceFileSessionTokenData.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!InvoiceFlowWithInvoiceFileSessionTokenData.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `InvoiceFlowWithInvoiceFileSessionTokenData` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : InvoiceFlowWithInvoiceFileSessionTokenData.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("component").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `component` to be a primitive type in the JSON string but got `%s`", jsonObj.get("component").toString()));
      }
      // validate the required field `component`
      ComponentEnum.validateJsonElement(jsonObj.get("component"));
      // ensure the json data is an array
      if (!jsonObj.get("invoices").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `invoices` to be an array in the JSON string but got `%s`", jsonObj.get("invoices").toString()));
      }

      JsonArray jsonArrayinvoices = jsonObj.getAsJsonArray("invoices");
      // validate the required field `invoices` (array)
      for (int i = 0; i < jsonArrayinvoices.size(); i++) {
        SessionInvoiceWithInvoiceFile.validateJsonElement(jsonArrayinvoices.get(i));
      };
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!InvoiceFlowWithInvoiceFileSessionTokenData.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'InvoiceFlowWithInvoiceFileSessionTokenData' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<InvoiceFlowWithInvoiceFileSessionTokenData> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(InvoiceFlowWithInvoiceFileSessionTokenData.class));

       return (TypeAdapter<T>) new TypeAdapter<InvoiceFlowWithInvoiceFileSessionTokenData>() {
           @Override
           public void write(JsonWriter out, InvoiceFlowWithInvoiceFileSessionTokenData value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public InvoiceFlowWithInvoiceFileSessionTokenData read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of InvoiceFlowWithInvoiceFileSessionTokenData given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of InvoiceFlowWithInvoiceFileSessionTokenData
  * @throws IOException if the JSON string is invalid with respect to InvoiceFlowWithInvoiceFileSessionTokenData
  */
  public static InvoiceFlowWithInvoiceFileSessionTokenData fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, InvoiceFlowWithInvoiceFileSessionTokenData.class);
  }

 /**
  * Convert an instance of InvoiceFlowWithInvoiceFileSessionTokenData to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

