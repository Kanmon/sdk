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
import com.kanmon.client.model.InvoiceRepaymentScheduleItem;
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

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.kanmon.client.JSON;

/**
 * InvoiceRepaymentSchedule
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
public class InvoiceRepaymentSchedule {
  public static final String SERIALIZED_NAME_SCHEDULE = "schedule";
  @SerializedName(SERIALIZED_NAME_SCHEDULE)
  private List<InvoiceRepaymentScheduleItem> schedule = new ArrayList<>();

  public InvoiceRepaymentSchedule() {
  }

  public InvoiceRepaymentSchedule schedule(List<InvoiceRepaymentScheduleItem> schedule) {
    this.schedule = schedule;
    return this;
  }

  public InvoiceRepaymentSchedule addScheduleItem(InvoiceRepaymentScheduleItem scheduleItem) {
    if (this.schedule == null) {
      this.schedule = new ArrayList<>();
    }
    this.schedule.add(scheduleItem);
    return this;
  }

  /**
   * The invoice repayment schedule items.
   * @return schedule
   */
  @javax.annotation.Nonnull
  public List<InvoiceRepaymentScheduleItem> getSchedule() {
    return schedule;
  }

  public void setSchedule(List<InvoiceRepaymentScheduleItem> schedule) {
    this.schedule = schedule;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InvoiceRepaymentSchedule invoiceRepaymentSchedule = (InvoiceRepaymentSchedule) o;
    return Objects.equals(this.schedule, invoiceRepaymentSchedule.schedule);
  }

  @Override
  public int hashCode() {
    return Objects.hash(schedule);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InvoiceRepaymentSchedule {\n");
    sb.append("    schedule: ").append(toIndentedString(schedule)).append("\n");
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
    openapiFields.add("schedule");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("schedule");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to InvoiceRepaymentSchedule
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!InvoiceRepaymentSchedule.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in InvoiceRepaymentSchedule is not found in the empty JSON string", InvoiceRepaymentSchedule.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!InvoiceRepaymentSchedule.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `InvoiceRepaymentSchedule` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : InvoiceRepaymentSchedule.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the json data is an array
      if (!jsonObj.get("schedule").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `schedule` to be an array in the JSON string but got `%s`", jsonObj.get("schedule").toString()));
      }

      JsonArray jsonArrayschedule = jsonObj.getAsJsonArray("schedule");
      // validate the required field `schedule` (array)
      for (int i = 0; i < jsonArrayschedule.size(); i++) {
        InvoiceRepaymentScheduleItem.validateJsonElement(jsonArrayschedule.get(i));
      };
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!InvoiceRepaymentSchedule.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'InvoiceRepaymentSchedule' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<InvoiceRepaymentSchedule> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(InvoiceRepaymentSchedule.class));

       return (TypeAdapter<T>) new TypeAdapter<InvoiceRepaymentSchedule>() {
           @Override
           public void write(JsonWriter out, InvoiceRepaymentSchedule value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public InvoiceRepaymentSchedule read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of InvoiceRepaymentSchedule given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of InvoiceRepaymentSchedule
   * @throws IOException if the JSON string is invalid with respect to InvoiceRepaymentSchedule
   */
  public static InvoiceRepaymentSchedule fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, InvoiceRepaymentSchedule.class);
  }

  /**
   * Convert an instance of InvoiceRepaymentSchedule to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

