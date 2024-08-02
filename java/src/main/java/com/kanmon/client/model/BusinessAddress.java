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
import java.io.IOException;
import java.util.Arrays;
import org.openapitools.jackson.nullable.JsonNullable;

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
 * The business’s address. The address is optional. If you provide the address, you need to provide all the required fields in the address.
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-08-02T16:25:47.631908-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class BusinessAddress {
  public static final String SERIALIZED_NAME_ADDRESS_LINE_ONE = "addressLineOne";
  @SerializedName(SERIALIZED_NAME_ADDRESS_LINE_ONE)
  private String addressLineOne;

  public static final String SERIALIZED_NAME_ADDRESS_LINE_TWO = "addressLineTwo";
  @SerializedName(SERIALIZED_NAME_ADDRESS_LINE_TWO)
  private String addressLineTwo;

  public static final String SERIALIZED_NAME_CITY = "city";
  @SerializedName(SERIALIZED_NAME_CITY)
  private String city;

  /**
   * The 2 character abbreviated state
   */
  @JsonAdapter(StateEnum.Adapter.class)
  public enum StateEnum {
    AL("AL"),
    
    KY("KY"),
    
    OH("OH"),
    
    AK("AK"),
    
    LA("LA"),
    
    OK("OK"),
    
    AZ("AZ"),
    
    ME("ME"),
    
    OR("OR"),
    
    AR("AR"),
    
    MD("MD"),
    
    PA("PA"),
    
    AS("AS"),
    
    MA("MA"),
    
    PR("PR"),
    
    CA("CA"),
    
    MI("MI"),
    
    RI("RI"),
    
    CO("CO"),
    
    MN("MN"),
    
    SC("SC"),
    
    CT("CT"),
    
    MS("MS"),
    
    SD("SD"),
    
    DE("DE"),
    
    MO("MO"),
    
    TN("TN"),
    
    DC("DC"),
    
    MT("MT"),
    
    TX("TX"),
    
    FL("FL"),
    
    NE("NE"),
    
    TT("TT"),
    
    GA("GA"),
    
    NV("NV"),
    
    UT("UT"),
    
    GU("GU"),
    
    NH("NH"),
    
    VT("VT"),
    
    HI("HI"),
    
    NJ("NJ"),
    
    VA("VA"),
    
    ID("ID"),
    
    NM("NM"),
    
    VI("VI"),
    
    IL("IL"),
    
    NY("NY"),
    
    WA("WA"),
    
    IN("IN"),
    
    NC("NC"),
    
    WV("WV"),
    
    IA("IA"),
    
    ND("ND"),
    
    WI("WI"),
    
    KS("KS"),
    
    MP("MP"),
    
    WY("WY");

    private String value;

    StateEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static StateEnum fromValue(String value) {
      for (StateEnum b : StateEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<StateEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final StateEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public StateEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return StateEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      StateEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_STATE = "state";
  @SerializedName(SERIALIZED_NAME_STATE)
  private StateEnum state;

  public static final String SERIALIZED_NAME_ZIPCODE = "zipcode";
  @SerializedName(SERIALIZED_NAME_ZIPCODE)
  private String zipcode;

  public static final String SERIALIZED_NAME_COUNTRY = "country";
  @SerializedName(SERIALIZED_NAME_COUNTRY)
  private String country;

  public BusinessAddress() {
  }

  public BusinessAddress addressLineOne(String addressLineOne) {
    this.addressLineOne = addressLineOne;
    return this;
  }

   /**
   * Get addressLineOne
   * @return addressLineOne
  **/
  @javax.annotation.Nonnull
  public String getAddressLineOne() {
    return addressLineOne;
  }

  public void setAddressLineOne(String addressLineOne) {
    this.addressLineOne = addressLineOne;
  }


  public BusinessAddress addressLineTwo(String addressLineTwo) {
    this.addressLineTwo = addressLineTwo;
    return this;
  }

   /**
   * Get addressLineTwo
   * @return addressLineTwo
  **/
  @javax.annotation.Nullable
  public String getAddressLineTwo() {
    return addressLineTwo;
  }

  public void setAddressLineTwo(String addressLineTwo) {
    this.addressLineTwo = addressLineTwo;
  }


  public BusinessAddress city(String city) {
    this.city = city;
    return this;
  }

   /**
   * Get city
   * @return city
  **/
  @javax.annotation.Nonnull
  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }


  public BusinessAddress state(StateEnum state) {
    this.state = state;
    return this;
  }

   /**
   * The 2 character abbreviated state
   * @return state
  **/
  @javax.annotation.Nonnull
  public StateEnum getState() {
    return state;
  }

  public void setState(StateEnum state) {
    this.state = state;
  }


  public BusinessAddress zipcode(String zipcode) {
    this.zipcode = zipcode;
    return this;
  }

   /**
   * Zip code can be 5 digits, 9 digits, or 5+4 including a hyphen or plus sign, e.g. 90210, 902101234, 90210-1234 or 90210+1234
   * @return zipcode
  **/
  @javax.annotation.Nonnull
  public String getZipcode() {
    return zipcode;
  }

  public void setZipcode(String zipcode) {
    this.zipcode = zipcode;
  }


  public BusinessAddress country(String country) {
    this.country = country;
    return this;
  }

   /**
   * USA
   * @return country
  **/
  @javax.annotation.Nonnull
  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BusinessAddress businessAddress = (BusinessAddress) o;
    return Objects.equals(this.addressLineOne, businessAddress.addressLineOne) &&
        Objects.equals(this.addressLineTwo, businessAddress.addressLineTwo) &&
        Objects.equals(this.city, businessAddress.city) &&
        Objects.equals(this.state, businessAddress.state) &&
        Objects.equals(this.zipcode, businessAddress.zipcode) &&
        Objects.equals(this.country, businessAddress.country);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(addressLineOne, addressLineTwo, city, state, zipcode, country);
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent() ? Arrays.deepHashCode(new Object[]{a.get()}) : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BusinessAddress {\n");
    sb.append("    addressLineOne: ").append(toIndentedString(addressLineOne)).append("\n");
    sb.append("    addressLineTwo: ").append(toIndentedString(addressLineTwo)).append("\n");
    sb.append("    city: ").append(toIndentedString(city)).append("\n");
    sb.append("    state: ").append(toIndentedString(state)).append("\n");
    sb.append("    zipcode: ").append(toIndentedString(zipcode)).append("\n");
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
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
    openapiFields.add("addressLineOne");
    openapiFields.add("addressLineTwo");
    openapiFields.add("city");
    openapiFields.add("state");
    openapiFields.add("zipcode");
    openapiFields.add("country");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("addressLineOne");
    openapiRequiredFields.add("city");
    openapiRequiredFields.add("state");
    openapiRequiredFields.add("zipcode");
    openapiRequiredFields.add("country");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to BusinessAddress
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!BusinessAddress.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in BusinessAddress is not found in the empty JSON string", BusinessAddress.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!BusinessAddress.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `BusinessAddress` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : BusinessAddress.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("addressLineOne").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `addressLineOne` to be a primitive type in the JSON string but got `%s`", jsonObj.get("addressLineOne").toString()));
      }
      if ((jsonObj.get("addressLineTwo") != null && !jsonObj.get("addressLineTwo").isJsonNull()) && !jsonObj.get("addressLineTwo").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `addressLineTwo` to be a primitive type in the JSON string but got `%s`", jsonObj.get("addressLineTwo").toString()));
      }
      if (!jsonObj.get("city").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `city` to be a primitive type in the JSON string but got `%s`", jsonObj.get("city").toString()));
      }
      if (!jsonObj.get("state").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `state` to be a primitive type in the JSON string but got `%s`", jsonObj.get("state").toString()));
      }
      // validate the required field `state`
      StateEnum.validateJsonElement(jsonObj.get("state"));
      if (!jsonObj.get("zipcode").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `zipcode` to be a primitive type in the JSON string but got `%s`", jsonObj.get("zipcode").toString()));
      }
      if (!jsonObj.get("country").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `country` to be a primitive type in the JSON string but got `%s`", jsonObj.get("country").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!BusinessAddress.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'BusinessAddress' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<BusinessAddress> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(BusinessAddress.class));

       return (TypeAdapter<T>) new TypeAdapter<BusinessAddress>() {
           @Override
           public void write(JsonWriter out, BusinessAddress value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public BusinessAddress read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of BusinessAddress given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of BusinessAddress
  * @throws IOException if the JSON string is invalid with respect to BusinessAddress
  */
  public static BusinessAddress fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, BusinessAddress.class);
  }

 /**
  * Convert an instance of BusinessAddress to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

