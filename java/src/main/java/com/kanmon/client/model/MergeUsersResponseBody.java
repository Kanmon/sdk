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
import com.kanmon.client.model.User;
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
 * MergeUsersResponseBody
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-08-02T17:11:18.940267-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class MergeUsersResponseBody {
  public static final String SERIALIZED_NAME_MERGED_USERS = "mergedUsers";
  @SerializedName(SERIALIZED_NAME_MERGED_USERS)
  private List<User> mergedUsers = new ArrayList<>();

  public MergeUsersResponseBody() {
  }

  public MergeUsersResponseBody mergedUsers(List<User> mergedUsers) {
    this.mergedUsers = mergedUsers;
    return this;
  }

  public MergeUsersResponseBody addMergedUsersItem(User mergedUsersItem) {
    if (this.mergedUsers == null) {
      this.mergedUsers = new ArrayList<>();
    }
    this.mergedUsers.add(mergedUsersItem);
    return this;
  }

   /**
   * An array of users that were merged into the target business.
   * @return mergedUsers
  **/
  @javax.annotation.Nonnull
  public List<User> getMergedUsers() {
    return mergedUsers;
  }

  public void setMergedUsers(List<User> mergedUsers) {
    this.mergedUsers = mergedUsers;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MergeUsersResponseBody mergeUsersResponseBody = (MergeUsersResponseBody) o;
    return Objects.equals(this.mergedUsers, mergeUsersResponseBody.mergedUsers);
  }

  @Override
  public int hashCode() {
    return Objects.hash(mergedUsers);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MergeUsersResponseBody {\n");
    sb.append("    mergedUsers: ").append(toIndentedString(mergedUsers)).append("\n");
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
    openapiFields.add("mergedUsers");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("mergedUsers");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to MergeUsersResponseBody
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!MergeUsersResponseBody.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in MergeUsersResponseBody is not found in the empty JSON string", MergeUsersResponseBody.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!MergeUsersResponseBody.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `MergeUsersResponseBody` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : MergeUsersResponseBody.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the json data is an array
      if (!jsonObj.get("mergedUsers").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `mergedUsers` to be an array in the JSON string but got `%s`", jsonObj.get("mergedUsers").toString()));
      }

      JsonArray jsonArraymergedUsers = jsonObj.getAsJsonArray("mergedUsers");
      // validate the required field `mergedUsers` (array)
      for (int i = 0; i < jsonArraymergedUsers.size(); i++) {
        User.validateJsonElement(jsonArraymergedUsers.get(i));
      };
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!MergeUsersResponseBody.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'MergeUsersResponseBody' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<MergeUsersResponseBody> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(MergeUsersResponseBody.class));

       return (TypeAdapter<T>) new TypeAdapter<MergeUsersResponseBody>() {
           @Override
           public void write(JsonWriter out, MergeUsersResponseBody value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public MergeUsersResponseBody read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of MergeUsersResponseBody given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of MergeUsersResponseBody
  * @throws IOException if the JSON string is invalid with respect to MergeUsersResponseBody
  */
  public static MergeUsersResponseBody fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, MergeUsersResponseBody.class);
  }

 /**
  * Convert an instance of MergeUsersResponseBody to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

