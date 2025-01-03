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
import com.kanmon.client.model.AccountsPayableInvoiceFlowSessionTokenData;
import com.kanmon.client.model.AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData;
import com.kanmon.client.model.AccountsPayableSessionInvoiceWithInvoiceFile;
import com.kanmon.client.model.InvoiceFlowSessionTokenData;
import com.kanmon.client.model.InvoiceFlowWithInvoiceFileSessionTokenData;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;



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

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
public class CreateSessionTokenRequestBodyData extends AbstractOpenApiSchema {
    private static final Logger log = Logger.getLogger(CreateSessionTokenRequestBodyData.class.getName());

    public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
        @SuppressWarnings("unchecked")
        @Override
        public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
            if (!CreateSessionTokenRequestBodyData.class.isAssignableFrom(type.getRawType())) {
                return null; // this class only serializes 'CreateSessionTokenRequestBodyData' and its subtypes
            }
            final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
            final TypeAdapter<InvoiceFlowSessionTokenData> adapterInvoiceFlowSessionTokenData = gson.getDelegateAdapter(this, TypeToken.get(InvoiceFlowSessionTokenData.class));
            final TypeAdapter<InvoiceFlowWithInvoiceFileSessionTokenData> adapterInvoiceFlowWithInvoiceFileSessionTokenData = gson.getDelegateAdapter(this, TypeToken.get(InvoiceFlowWithInvoiceFileSessionTokenData.class));
            final TypeAdapter<AccountsPayableInvoiceFlowSessionTokenData> adapterAccountsPayableInvoiceFlowSessionTokenData = gson.getDelegateAdapter(this, TypeToken.get(AccountsPayableInvoiceFlowSessionTokenData.class));
            final TypeAdapter<AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData> adapterAccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData = gson.getDelegateAdapter(this, TypeToken.get(AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData.class));

            return (TypeAdapter<T>) new TypeAdapter<CreateSessionTokenRequestBodyData>() {
                @Override
                public void write(JsonWriter out, CreateSessionTokenRequestBodyData value) throws IOException {
                    if (value == null || value.getActualInstance() == null) {
                        elementAdapter.write(out, null);
                        return;
                    }

                    // check if the actual instance is of the type `InvoiceFlowSessionTokenData`
                    if (value.getActualInstance() instanceof InvoiceFlowSessionTokenData) {
                        JsonElement element = adapterInvoiceFlowSessionTokenData.toJsonTree((InvoiceFlowSessionTokenData)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `InvoiceFlowWithInvoiceFileSessionTokenData`
                    if (value.getActualInstance() instanceof InvoiceFlowWithInvoiceFileSessionTokenData) {
                        JsonElement element = adapterInvoiceFlowWithInvoiceFileSessionTokenData.toJsonTree((InvoiceFlowWithInvoiceFileSessionTokenData)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `AccountsPayableInvoiceFlowSessionTokenData`
                    if (value.getActualInstance() instanceof AccountsPayableInvoiceFlowSessionTokenData) {
                        JsonElement element = adapterAccountsPayableInvoiceFlowSessionTokenData.toJsonTree((AccountsPayableInvoiceFlowSessionTokenData)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData`
                    if (value.getActualInstance() instanceof AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData) {
                        JsonElement element = adapterAccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData.toJsonTree((AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    throw new IOException("Failed to serialize as the type doesn't match oneOf schemas: AccountsPayableInvoiceFlowSessionTokenData, AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData, InvoiceFlowSessionTokenData, InvoiceFlowWithInvoiceFileSessionTokenData");
                }

                @Override
                public CreateSessionTokenRequestBodyData read(JsonReader in) throws IOException {
                    Object deserialized = null;
                    JsonElement jsonElement = elementAdapter.read(in);

                    int match = 0;
                    ArrayList<String> errorMessages = new ArrayList<>();
                    TypeAdapter actualAdapter = elementAdapter;

                    // deserialize InvoiceFlowSessionTokenData
                    try {
                        // validate the JSON object to see if any exception is thrown
                        InvoiceFlowSessionTokenData.validateJsonElement(jsonElement);
                        actualAdapter = adapterInvoiceFlowSessionTokenData;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'InvoiceFlowSessionTokenData'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for InvoiceFlowSessionTokenData failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'InvoiceFlowSessionTokenData'", e);
                    }
                    // deserialize InvoiceFlowWithInvoiceFileSessionTokenData
                    try {
                        // validate the JSON object to see if any exception is thrown
                        InvoiceFlowWithInvoiceFileSessionTokenData.validateJsonElement(jsonElement);
                        actualAdapter = adapterInvoiceFlowWithInvoiceFileSessionTokenData;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'InvoiceFlowWithInvoiceFileSessionTokenData'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for InvoiceFlowWithInvoiceFileSessionTokenData failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'InvoiceFlowWithInvoiceFileSessionTokenData'", e);
                    }
                    // deserialize AccountsPayableInvoiceFlowSessionTokenData
                    try {
                        // validate the JSON object to see if any exception is thrown
                        AccountsPayableInvoiceFlowSessionTokenData.validateJsonElement(jsonElement);
                        actualAdapter = adapterAccountsPayableInvoiceFlowSessionTokenData;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'AccountsPayableInvoiceFlowSessionTokenData'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for AccountsPayableInvoiceFlowSessionTokenData failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'AccountsPayableInvoiceFlowSessionTokenData'", e);
                    }
                    // deserialize AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData
                    try {
                        // validate the JSON object to see if any exception is thrown
                        AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData.validateJsonElement(jsonElement);
                        actualAdapter = adapterAccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData'", e);
                    }

                    if (match == 1) {
                        CreateSessionTokenRequestBodyData ret = new CreateSessionTokenRequestBodyData();
                        ret.setActualInstance(actualAdapter.fromJsonTree(jsonElement));
                        return ret;
                    }

                    throw new IOException(String.format("Failed deserialization for CreateSessionTokenRequestBodyData: %d classes match result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", match, errorMessages, jsonElement.toString()));
                }
            }.nullSafe();
        }
    }

    // store a list of schema names defined in oneOf
    public static final Map<String, Class<?>> schemas = new HashMap<String, Class<?>>();

    public CreateSessionTokenRequestBodyData() {
        super("oneOf", Boolean.FALSE);
    }

    public CreateSessionTokenRequestBodyData(Object o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    static {
        schemas.put("InvoiceFlowSessionTokenData", InvoiceFlowSessionTokenData.class);
        schemas.put("InvoiceFlowWithInvoiceFileSessionTokenData", InvoiceFlowWithInvoiceFileSessionTokenData.class);
        schemas.put("AccountsPayableInvoiceFlowSessionTokenData", AccountsPayableInvoiceFlowSessionTokenData.class);
        schemas.put("AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData", AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData.class);
    }

    @Override
    public Map<String, Class<?>> getSchemas() {
        return CreateSessionTokenRequestBodyData.schemas;
    }

    /**
     * Set the instance that matches the oneOf child schema, check
     * the instance parameter is valid against the oneOf child schemas:
     * AccountsPayableInvoiceFlowSessionTokenData, AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData, InvoiceFlowSessionTokenData, InvoiceFlowWithInvoiceFileSessionTokenData
     *
     * It could be an instance of the 'oneOf' schemas.
     */
    @Override
    public void setActualInstance(Object instance) {
        if (instance instanceof InvoiceFlowSessionTokenData) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof InvoiceFlowWithInvoiceFileSessionTokenData) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof AccountsPayableInvoiceFlowSessionTokenData) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData) {
            super.setActualInstance(instance);
            return;
        }

        throw new RuntimeException("Invalid instance type. Must be AccountsPayableInvoiceFlowSessionTokenData, AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData, InvoiceFlowSessionTokenData, InvoiceFlowWithInvoiceFileSessionTokenData");
    }

    /**
     * Get the actual instance, which can be the following:
     * AccountsPayableInvoiceFlowSessionTokenData, AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData, InvoiceFlowSessionTokenData, InvoiceFlowWithInvoiceFileSessionTokenData
     *
     * @return The actual instance (AccountsPayableInvoiceFlowSessionTokenData, AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData, InvoiceFlowSessionTokenData, InvoiceFlowWithInvoiceFileSessionTokenData)
     */
    @SuppressWarnings("unchecked")
    @Override
    public Object getActualInstance() {
        return super.getActualInstance();
    }

    /**
     * Get the actual instance of `InvoiceFlowSessionTokenData`. If the actual instance is not `InvoiceFlowSessionTokenData`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `InvoiceFlowSessionTokenData`
     * @throws ClassCastException if the instance is not `InvoiceFlowSessionTokenData`
     */
    public InvoiceFlowSessionTokenData getInvoiceFlowSessionTokenData() throws ClassCastException {
        return (InvoiceFlowSessionTokenData)super.getActualInstance();
    }
    /**
     * Get the actual instance of `InvoiceFlowWithInvoiceFileSessionTokenData`. If the actual instance is not `InvoiceFlowWithInvoiceFileSessionTokenData`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `InvoiceFlowWithInvoiceFileSessionTokenData`
     * @throws ClassCastException if the instance is not `InvoiceFlowWithInvoiceFileSessionTokenData`
     */
    public InvoiceFlowWithInvoiceFileSessionTokenData getInvoiceFlowWithInvoiceFileSessionTokenData() throws ClassCastException {
        return (InvoiceFlowWithInvoiceFileSessionTokenData)super.getActualInstance();
    }
    /**
     * Get the actual instance of `AccountsPayableInvoiceFlowSessionTokenData`. If the actual instance is not `AccountsPayableInvoiceFlowSessionTokenData`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `AccountsPayableInvoiceFlowSessionTokenData`
     * @throws ClassCastException if the instance is not `AccountsPayableInvoiceFlowSessionTokenData`
     */
    public AccountsPayableInvoiceFlowSessionTokenData getAccountsPayableInvoiceFlowSessionTokenData() throws ClassCastException {
        return (AccountsPayableInvoiceFlowSessionTokenData)super.getActualInstance();
    }
    /**
     * Get the actual instance of `AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData`. If the actual instance is not `AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData`
     * @throws ClassCastException if the instance is not `AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData`
     */
    public AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData getAccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData() throws ClassCastException {
        return (AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData)super.getActualInstance();
    }

    /**
     * Validates the JSON Element and throws an exception if issues found
     *
     * @param jsonElement JSON Element
     * @throws IOException if the JSON Element is invalid with respect to CreateSessionTokenRequestBodyData
     */
    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
        // validate oneOf schemas one by one
        int validCount = 0;
        ArrayList<String> errorMessages = new ArrayList<>();
        // validate the json string with InvoiceFlowSessionTokenData
        try {
            InvoiceFlowSessionTokenData.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for InvoiceFlowSessionTokenData failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with InvoiceFlowWithInvoiceFileSessionTokenData
        try {
            InvoiceFlowWithInvoiceFileSessionTokenData.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for InvoiceFlowWithInvoiceFileSessionTokenData failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with AccountsPayableInvoiceFlowSessionTokenData
        try {
            AccountsPayableInvoiceFlowSessionTokenData.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for AccountsPayableInvoiceFlowSessionTokenData failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData
        try {
            AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        if (validCount != 1) {
            throw new IOException(String.format("The JSON string is invalid for CreateSessionTokenRequestBodyData with oneOf schemas: AccountsPayableInvoiceFlowSessionTokenData, AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData, InvoiceFlowSessionTokenData, InvoiceFlowWithInvoiceFileSessionTokenData. %d class(es) match the result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", validCount, errorMessages, jsonElement.toString()));
        }
    }

    /**
     * Create an instance of CreateSessionTokenRequestBodyData given an JSON string
     *
     * @param jsonString JSON string
     * @return An instance of CreateSessionTokenRequestBodyData
     * @throws IOException if the JSON string is invalid with respect to CreateSessionTokenRequestBodyData
     */
    public static CreateSessionTokenRequestBodyData fromJson(String jsonString) throws IOException {
        return JSON.getGson().fromJson(jsonString, CreateSessionTokenRequestBodyData.class);
    }

    /**
     * Convert an instance of CreateSessionTokenRequestBodyData to an JSON string
     *
     * @return JSON string
     */
    public String toJson() {
        return JSON.getGson().toJson(this);
    }
}

