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
import com.kanmon.client.model.BusinessHasNoInvoiceFinancingProductException;
import com.kanmon.client.model.PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException;
import java.io.IOException;
import java.util.Arrays;



import java.io.IOException;
import java.lang.reflect.Type;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapter;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.JsonPrimitive;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonArray;
import com.google.gson.JsonParseException;

import com.kanmon.client.JSON;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-08-02T17:11:18.940267-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class CreateEmbeddedSession409Response extends AbstractOpenApiSchema {
    private static final Logger log = Logger.getLogger(CreateEmbeddedSession409Response.class.getName());

    public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
        @SuppressWarnings("unchecked")
        @Override
        public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
            if (!CreateEmbeddedSession409Response.class.isAssignableFrom(type.getRawType())) {
                return null; // this class only serializes 'CreateEmbeddedSession409Response' and its subtypes
            }
            final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
            final TypeAdapter<PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException> adapterPlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException = gson.getDelegateAdapter(this, TypeToken.get(PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException.class));
            final TypeAdapter<BusinessHasNoInvoiceFinancingProductException> adapterBusinessHasNoInvoiceFinancingProductException = gson.getDelegateAdapter(this, TypeToken.get(BusinessHasNoInvoiceFinancingProductException.class));

            return (TypeAdapter<T>) new TypeAdapter<CreateEmbeddedSession409Response>() {
                @Override
                public void write(JsonWriter out, CreateEmbeddedSession409Response value) throws IOException {
                    if (value == null || value.getActualInstance() == null) {
                        elementAdapter.write(out, null);
                        return;
                    }

                    // check if the actual instance is of the type `PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException`
                    if (value.getActualInstance() instanceof PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException) {
                        JsonElement element = adapterPlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException.toJsonTree((PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `BusinessHasNoInvoiceFinancingProductException`
                    if (value.getActualInstance() instanceof BusinessHasNoInvoiceFinancingProductException) {
                        JsonElement element = adapterBusinessHasNoInvoiceFinancingProductException.toJsonTree((BusinessHasNoInvoiceFinancingProductException)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    throw new IOException("Failed to serialize as the type doesn't match oneOf schemas: BusinessHasNoInvoiceFinancingProductException, PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException");
                }

                @Override
                public CreateEmbeddedSession409Response read(JsonReader in) throws IOException {
                    Object deserialized = null;
                    JsonElement jsonElement = elementAdapter.read(in);

                    int match = 0;
                    ArrayList<String> errorMessages = new ArrayList<>();
                    TypeAdapter actualAdapter = elementAdapter;

                    // deserialize PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException
                    try {
                        // validate the JSON object to see if any exception is thrown
                        PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException.validateJsonElement(jsonElement);
                        actualAdapter = adapterPlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException'", e);
                    }
                    // deserialize BusinessHasNoInvoiceFinancingProductException
                    try {
                        // validate the JSON object to see if any exception is thrown
                        BusinessHasNoInvoiceFinancingProductException.validateJsonElement(jsonElement);
                        actualAdapter = adapterBusinessHasNoInvoiceFinancingProductException;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'BusinessHasNoInvoiceFinancingProductException'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for BusinessHasNoInvoiceFinancingProductException failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'BusinessHasNoInvoiceFinancingProductException'", e);
                    }

                    if (match == 1) {
                        CreateEmbeddedSession409Response ret = new CreateEmbeddedSession409Response();
                        ret.setActualInstance(actualAdapter.fromJsonTree(jsonElement));
                        return ret;
                    }

                    throw new IOException(String.format("Failed deserialization for CreateEmbeddedSession409Response: %d classes match result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", match, errorMessages, jsonElement.toString()));
                }
            }.nullSafe();
        }
    }

    // store a list of schema names defined in oneOf
    public static final Map<String, Class<?>> schemas = new HashMap<String, Class<?>>();

    public CreateEmbeddedSession409Response() {
        super("oneOf", Boolean.FALSE);
    }

    public CreateEmbeddedSession409Response(BusinessHasNoInvoiceFinancingProductException o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    public CreateEmbeddedSession409Response(PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    static {
        schemas.put("PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException", PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException.class);
        schemas.put("BusinessHasNoInvoiceFinancingProductException", BusinessHasNoInvoiceFinancingProductException.class);
    }

    @Override
    public Map<String, Class<?>> getSchemas() {
        return CreateEmbeddedSession409Response.schemas;
    }

    /**
     * Set the instance that matches the oneOf child schema, check
     * the instance parameter is valid against the oneOf child schemas:
     * BusinessHasNoInvoiceFinancingProductException, PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException
     *
     * It could be an instance of the 'oneOf' schemas.
     */
    @Override
    public void setActualInstance(Object instance) {
        if (instance instanceof PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof BusinessHasNoInvoiceFinancingProductException) {
            super.setActualInstance(instance);
            return;
        }

        throw new RuntimeException("Invalid instance type. Must be BusinessHasNoInvoiceFinancingProductException, PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException");
    }

    /**
     * Get the actual instance, which can be the following:
     * BusinessHasNoInvoiceFinancingProductException, PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException
     *
     * @return The actual instance (BusinessHasNoInvoiceFinancingProductException, PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException)
     */
    @SuppressWarnings("unchecked")
    @Override
    public Object getActualInstance() {
        return super.getActualInstance();
    }

    /**
     * Get the actual instance of `PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException`. If the actual instance is not `PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException`
     * @throws ClassCastException if the instance is not `PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException`
     */
    public PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException getPlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException() throws ClassCastException {
        return (PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException)super.getActualInstance();
    }
    /**
     * Get the actual instance of `BusinessHasNoInvoiceFinancingProductException`. If the actual instance is not `BusinessHasNoInvoiceFinancingProductException`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `BusinessHasNoInvoiceFinancingProductException`
     * @throws ClassCastException if the instance is not `BusinessHasNoInvoiceFinancingProductException`
     */
    public BusinessHasNoInvoiceFinancingProductException getBusinessHasNoInvoiceFinancingProductException() throws ClassCastException {
        return (BusinessHasNoInvoiceFinancingProductException)super.getActualInstance();
    }

    /**
     * Validates the JSON Element and throws an exception if issues found
     *
     * @param jsonElement JSON Element
     * @throws IOException if the JSON Element is invalid with respect to CreateEmbeddedSession409Response
     */
    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
        // validate oneOf schemas one by one
        int validCount = 0;
        ArrayList<String> errorMessages = new ArrayList<>();
        // validate the json string with PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException
        try {
            PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with BusinessHasNoInvoiceFinancingProductException
        try {
            BusinessHasNoInvoiceFinancingProductException.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for BusinessHasNoInvoiceFinancingProductException failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        if (validCount != 1) {
            throw new IOException(String.format("The JSON string is invalid for CreateEmbeddedSession409Response with oneOf schemas: BusinessHasNoInvoiceFinancingProductException, PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException. %d class(es) match the result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", validCount, errorMessages, jsonElement.toString()));
        }
    }

    /**
     * Create an instance of CreateEmbeddedSession409Response given an JSON string
     *
     * @param jsonString JSON string
     * @return An instance of CreateEmbeddedSession409Response
     * @throws IOException if the JSON string is invalid with respect to CreateEmbeddedSession409Response
     */
    public static CreateEmbeddedSession409Response fromJson(String jsonString) throws IOException {
        return JSON.getGson().fromJson(jsonString, CreateEmbeddedSession409Response.class);
    }

    /**
     * Convert an instance of CreateEmbeddedSession409Response to an JSON string
     *
     * @return JSON string
     */
    public String toJson() {
        return JSON.getGson().toJson(this);
    }
}

