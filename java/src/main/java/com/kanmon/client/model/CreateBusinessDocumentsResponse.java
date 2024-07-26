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
import com.kanmon.client.model.BusinessDocument;
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
 * CreateBusinessDocumentsResponse
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-07-26T14:34:18.978357-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class CreateBusinessDocumentsResponse {
  public static final String SERIALIZED_NAME_DOCUMENTS = "documents";
  @SerializedName(SERIALIZED_NAME_DOCUMENTS)
  private List<BusinessDocument> documents = new ArrayList<>();

  public CreateBusinessDocumentsResponse() {
  }

  public CreateBusinessDocumentsResponse documents(List<BusinessDocument> documents) {
    this.documents = documents;
    return this;
  }

  public CreateBusinessDocumentsResponse addDocumentsItem(BusinessDocument documentsItem) {
    if (this.documents == null) {
      this.documents = new ArrayList<>();
    }
    this.documents.add(documentsItem);
    return this;
  }

   /**
   * The documents that were uploaded.
   * @return documents
  **/
  @javax.annotation.Nonnull
  public List<BusinessDocument> getDocuments() {
    return documents;
  }

  public void setDocuments(List<BusinessDocument> documents) {
    this.documents = documents;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateBusinessDocumentsResponse createBusinessDocumentsResponse = (CreateBusinessDocumentsResponse) o;
    return Objects.equals(this.documents, createBusinessDocumentsResponse.documents);
  }

  @Override
  public int hashCode() {
    return Objects.hash(documents);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateBusinessDocumentsResponse {\n");
    sb.append("    documents: ").append(toIndentedString(documents)).append("\n");
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
    openapiFields.add("documents");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("documents");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to CreateBusinessDocumentsResponse
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!CreateBusinessDocumentsResponse.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in CreateBusinessDocumentsResponse is not found in the empty JSON string", CreateBusinessDocumentsResponse.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!CreateBusinessDocumentsResponse.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `CreateBusinessDocumentsResponse` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : CreateBusinessDocumentsResponse.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the json data is an array
      if (!jsonObj.get("documents").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `documents` to be an array in the JSON string but got `%s`", jsonObj.get("documents").toString()));
      }

      JsonArray jsonArraydocuments = jsonObj.getAsJsonArray("documents");
      // validate the required field `documents` (array)
      for (int i = 0; i < jsonArraydocuments.size(); i++) {
        BusinessDocument.validateJsonElement(jsonArraydocuments.get(i));
      };
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!CreateBusinessDocumentsResponse.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'CreateBusinessDocumentsResponse' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<CreateBusinessDocumentsResponse> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(CreateBusinessDocumentsResponse.class));

       return (TypeAdapter<T>) new TypeAdapter<CreateBusinessDocumentsResponse>() {
           @Override
           public void write(JsonWriter out, CreateBusinessDocumentsResponse value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public CreateBusinessDocumentsResponse read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of CreateBusinessDocumentsResponse given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of CreateBusinessDocumentsResponse
  * @throws IOException if the JSON string is invalid with respect to CreateBusinessDocumentsResponse
  */
  public static CreateBusinessDocumentsResponse fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, CreateBusinessDocumentsResponse.class);
  }

 /**
  * Convert an instance of CreateBusinessDocumentsResponse to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

