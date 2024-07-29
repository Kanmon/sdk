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
import com.kanmon.client.model.PaymentPlanRepaymentScheduleItem;
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
 * PaymentPlanRepaymentSchedule
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-07-26T19:00:57.767815-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class PaymentPlanRepaymentSchedule {
  public static final String SERIALIZED_NAME_SCHEDULE = "schedule";
  @SerializedName(SERIALIZED_NAME_SCHEDULE)
  private List<PaymentPlanRepaymentScheduleItem> schedule = new ArrayList<>();

  public PaymentPlanRepaymentSchedule() {
  }

  public PaymentPlanRepaymentSchedule schedule(List<PaymentPlanRepaymentScheduleItem> schedule) {
    this.schedule = schedule;
    return this;
  }

  public PaymentPlanRepaymentSchedule addScheduleItem(PaymentPlanRepaymentScheduleItem scheduleItem) {
    if (this.schedule == null) {
      this.schedule = new ArrayList<>();
    }
    this.schedule.add(scheduleItem);
    return this;
  }

   /**
   * An array of repayment schedule items that represents how the invoice will be paid back over multiple repayments.
   * @return schedule
  **/
  @javax.annotation.Nonnull
  public List<PaymentPlanRepaymentScheduleItem> getSchedule() {
    return schedule;
  }

  public void setSchedule(List<PaymentPlanRepaymentScheduleItem> schedule) {
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
    PaymentPlanRepaymentSchedule paymentPlanRepaymentSchedule = (PaymentPlanRepaymentSchedule) o;
    return Objects.equals(this.schedule, paymentPlanRepaymentSchedule.schedule);
  }

  @Override
  public int hashCode() {
    return Objects.hash(schedule);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentPlanRepaymentSchedule {\n");
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
  * @throws IOException if the JSON Element is invalid with respect to PaymentPlanRepaymentSchedule
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!PaymentPlanRepaymentSchedule.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in PaymentPlanRepaymentSchedule is not found in the empty JSON string", PaymentPlanRepaymentSchedule.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!PaymentPlanRepaymentSchedule.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `PaymentPlanRepaymentSchedule` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : PaymentPlanRepaymentSchedule.openapiRequiredFields) {
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
        PaymentPlanRepaymentScheduleItem.validateJsonElement(jsonArrayschedule.get(i));
      };
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!PaymentPlanRepaymentSchedule.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'PaymentPlanRepaymentSchedule' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<PaymentPlanRepaymentSchedule> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(PaymentPlanRepaymentSchedule.class));

       return (TypeAdapter<T>) new TypeAdapter<PaymentPlanRepaymentSchedule>() {
           @Override
           public void write(JsonWriter out, PaymentPlanRepaymentSchedule value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public PaymentPlanRepaymentSchedule read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of PaymentPlanRepaymentSchedule given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of PaymentPlanRepaymentSchedule
  * @throws IOException if the JSON string is invalid with respect to PaymentPlanRepaymentSchedule
  */
  public static PaymentPlanRepaymentSchedule fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, PaymentPlanRepaymentSchedule.class);
  }

 /**
  * Convert an instance of PaymentPlanRepaymentSchedule to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

