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
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.JsonElement;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * The type of document that is uploaded.
 */
@JsonAdapter(BusinessDocumentType.Adapter.class)
public enum BusinessDocumentType {
  
  INVOICE("INVOICE");

  private String value;

  BusinessDocumentType(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static BusinessDocumentType fromValue(String value) {
    for (BusinessDocumentType b : BusinessDocumentType.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<BusinessDocumentType> {
    @Override
    public void write(final JsonWriter jsonWriter, final BusinessDocumentType enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public BusinessDocumentType read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return BusinessDocumentType.fromValue(value);
    }
  }

  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
    String value = jsonElement.getAsString();
    BusinessDocumentType.fromValue(value);
  }
}

