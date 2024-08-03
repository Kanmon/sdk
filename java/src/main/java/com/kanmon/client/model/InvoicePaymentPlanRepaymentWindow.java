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
import com.kanmon.client.model.FixedDateInvoiceRepaymentWindow;
import com.kanmon.client.model.FixedDurationInvoiceRepaymentWindow;
import com.kanmon.client.model.MultipleDurationInvoiceRepaymentWindow;
import com.kanmon.client.model.PaymentPlanRepaymentSchedule;
import java.io.IOException;
import java.math.BigDecimal;
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
public class InvoicePaymentPlanRepaymentWindow extends AbstractOpenApiSchema {
    private static final Logger log = Logger.getLogger(InvoicePaymentPlanRepaymentWindow.class.getName());

    public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
        @SuppressWarnings("unchecked")
        @Override
        public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
            if (!InvoicePaymentPlanRepaymentWindow.class.isAssignableFrom(type.getRawType())) {
                return null; // this class only serializes 'InvoicePaymentPlanRepaymentWindow' and its subtypes
            }
            final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
            final TypeAdapter<FixedDateInvoiceRepaymentWindow> adapterFixedDateInvoiceRepaymentWindow = gson.getDelegateAdapter(this, TypeToken.get(FixedDateInvoiceRepaymentWindow.class));
            final TypeAdapter<FixedDurationInvoiceRepaymentWindow> adapterFixedDurationInvoiceRepaymentWindow = gson.getDelegateAdapter(this, TypeToken.get(FixedDurationInvoiceRepaymentWindow.class));
            final TypeAdapter<MultipleDurationInvoiceRepaymentWindow> adapterMultipleDurationInvoiceRepaymentWindow = gson.getDelegateAdapter(this, TypeToken.get(MultipleDurationInvoiceRepaymentWindow.class));

            return (TypeAdapter<T>) new TypeAdapter<InvoicePaymentPlanRepaymentWindow>() {
                @Override
                public void write(JsonWriter out, InvoicePaymentPlanRepaymentWindow value) throws IOException {
                    if (value == null || value.getActualInstance() == null) {
                        elementAdapter.write(out, null);
                        return;
                    }

                    // check if the actual instance is of the type `FixedDateInvoiceRepaymentWindow`
                    if (value.getActualInstance() instanceof FixedDateInvoiceRepaymentWindow) {
                        JsonElement element = adapterFixedDateInvoiceRepaymentWindow.toJsonTree((FixedDateInvoiceRepaymentWindow)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `FixedDurationInvoiceRepaymentWindow`
                    if (value.getActualInstance() instanceof FixedDurationInvoiceRepaymentWindow) {
                        JsonElement element = adapterFixedDurationInvoiceRepaymentWindow.toJsonTree((FixedDurationInvoiceRepaymentWindow)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `MultipleDurationInvoiceRepaymentWindow`
                    if (value.getActualInstance() instanceof MultipleDurationInvoiceRepaymentWindow) {
                        JsonElement element = adapterMultipleDurationInvoiceRepaymentWindow.toJsonTree((MultipleDurationInvoiceRepaymentWindow)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    throw new IOException("Failed to serialize as the type doesn't match oneOf schemas: FixedDateInvoiceRepaymentWindow, FixedDurationInvoiceRepaymentWindow, MultipleDurationInvoiceRepaymentWindow");
                }

                @Override
                public InvoicePaymentPlanRepaymentWindow read(JsonReader in) throws IOException {
                    Object deserialized = null;
                    JsonElement jsonElement = elementAdapter.read(in);

                    int match = 0;
                    ArrayList<String> errorMessages = new ArrayList<>();
                    TypeAdapter actualAdapter = elementAdapter;

                    // deserialize FixedDateInvoiceRepaymentWindow
                    try {
                        // validate the JSON object to see if any exception is thrown
                        FixedDateInvoiceRepaymentWindow.validateJsonElement(jsonElement);
                        actualAdapter = adapterFixedDateInvoiceRepaymentWindow;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'FixedDateInvoiceRepaymentWindow'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for FixedDateInvoiceRepaymentWindow failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'FixedDateInvoiceRepaymentWindow'", e);
                    }
                    // deserialize FixedDurationInvoiceRepaymentWindow
                    try {
                        // validate the JSON object to see if any exception is thrown
                        FixedDurationInvoiceRepaymentWindow.validateJsonElement(jsonElement);
                        actualAdapter = adapterFixedDurationInvoiceRepaymentWindow;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'FixedDurationInvoiceRepaymentWindow'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for FixedDurationInvoiceRepaymentWindow failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'FixedDurationInvoiceRepaymentWindow'", e);
                    }
                    // deserialize MultipleDurationInvoiceRepaymentWindow
                    try {
                        // validate the JSON object to see if any exception is thrown
                        MultipleDurationInvoiceRepaymentWindow.validateJsonElement(jsonElement);
                        actualAdapter = adapterMultipleDurationInvoiceRepaymentWindow;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'MultipleDurationInvoiceRepaymentWindow'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for MultipleDurationInvoiceRepaymentWindow failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'MultipleDurationInvoiceRepaymentWindow'", e);
                    }

                    if (match == 1) {
                        InvoicePaymentPlanRepaymentWindow ret = new InvoicePaymentPlanRepaymentWindow();
                        ret.setActualInstance(actualAdapter.fromJsonTree(jsonElement));
                        return ret;
                    }

                    throw new IOException(String.format("Failed deserialization for InvoicePaymentPlanRepaymentWindow: %d classes match result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", match, errorMessages, jsonElement.toString()));
                }
            }.nullSafe();
        }
    }

    // store a list of schema names defined in oneOf
    public static final Map<String, Class<?>> schemas = new HashMap<String, Class<?>>();

    public InvoicePaymentPlanRepaymentWindow() {
        super("oneOf", Boolean.FALSE);
    }

    public InvoicePaymentPlanRepaymentWindow(FixedDateInvoiceRepaymentWindow o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    public InvoicePaymentPlanRepaymentWindow(FixedDurationInvoiceRepaymentWindow o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    public InvoicePaymentPlanRepaymentWindow(MultipleDurationInvoiceRepaymentWindow o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    static {
        schemas.put("FixedDateInvoiceRepaymentWindow", FixedDateInvoiceRepaymentWindow.class);
        schemas.put("FixedDurationInvoiceRepaymentWindow", FixedDurationInvoiceRepaymentWindow.class);
        schemas.put("MultipleDurationInvoiceRepaymentWindow", MultipleDurationInvoiceRepaymentWindow.class);
    }

    @Override
    public Map<String, Class<?>> getSchemas() {
        return InvoicePaymentPlanRepaymentWindow.schemas;
    }

    /**
     * Set the instance that matches the oneOf child schema, check
     * the instance parameter is valid against the oneOf child schemas:
     * FixedDateInvoiceRepaymentWindow, FixedDurationInvoiceRepaymentWindow, MultipleDurationInvoiceRepaymentWindow
     *
     * It could be an instance of the 'oneOf' schemas.
     */
    @Override
    public void setActualInstance(Object instance) {
        if (instance instanceof FixedDateInvoiceRepaymentWindow) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof FixedDurationInvoiceRepaymentWindow) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof MultipleDurationInvoiceRepaymentWindow) {
            super.setActualInstance(instance);
            return;
        }

        throw new RuntimeException("Invalid instance type. Must be FixedDateInvoiceRepaymentWindow, FixedDurationInvoiceRepaymentWindow, MultipleDurationInvoiceRepaymentWindow");
    }

    /**
     * Get the actual instance, which can be the following:
     * FixedDateInvoiceRepaymentWindow, FixedDurationInvoiceRepaymentWindow, MultipleDurationInvoiceRepaymentWindow
     *
     * @return The actual instance (FixedDateInvoiceRepaymentWindow, FixedDurationInvoiceRepaymentWindow, MultipleDurationInvoiceRepaymentWindow)
     */
    @SuppressWarnings("unchecked")
    @Override
    public Object getActualInstance() {
        return super.getActualInstance();
    }

    /**
     * Get the actual instance of `FixedDateInvoiceRepaymentWindow`. If the actual instance is not `FixedDateInvoiceRepaymentWindow`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `FixedDateInvoiceRepaymentWindow`
     * @throws ClassCastException if the instance is not `FixedDateInvoiceRepaymentWindow`
     */
    public FixedDateInvoiceRepaymentWindow getFixedDateInvoiceRepaymentWindow() throws ClassCastException {
        return (FixedDateInvoiceRepaymentWindow)super.getActualInstance();
    }
    /**
     * Get the actual instance of `FixedDurationInvoiceRepaymentWindow`. If the actual instance is not `FixedDurationInvoiceRepaymentWindow`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `FixedDurationInvoiceRepaymentWindow`
     * @throws ClassCastException if the instance is not `FixedDurationInvoiceRepaymentWindow`
     */
    public FixedDurationInvoiceRepaymentWindow getFixedDurationInvoiceRepaymentWindow() throws ClassCastException {
        return (FixedDurationInvoiceRepaymentWindow)super.getActualInstance();
    }
    /**
     * Get the actual instance of `MultipleDurationInvoiceRepaymentWindow`. If the actual instance is not `MultipleDurationInvoiceRepaymentWindow`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `MultipleDurationInvoiceRepaymentWindow`
     * @throws ClassCastException if the instance is not `MultipleDurationInvoiceRepaymentWindow`
     */
    public MultipleDurationInvoiceRepaymentWindow getMultipleDurationInvoiceRepaymentWindow() throws ClassCastException {
        return (MultipleDurationInvoiceRepaymentWindow)super.getActualInstance();
    }

    /**
     * Validates the JSON Element and throws an exception if issues found
     *
     * @param jsonElement JSON Element
     * @throws IOException if the JSON Element is invalid with respect to InvoicePaymentPlanRepaymentWindow
     */
    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
        // validate oneOf schemas one by one
        int validCount = 0;
        ArrayList<String> errorMessages = new ArrayList<>();
        // validate the json string with FixedDateInvoiceRepaymentWindow
        try {
            FixedDateInvoiceRepaymentWindow.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for FixedDateInvoiceRepaymentWindow failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with FixedDurationInvoiceRepaymentWindow
        try {
            FixedDurationInvoiceRepaymentWindow.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for FixedDurationInvoiceRepaymentWindow failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with MultipleDurationInvoiceRepaymentWindow
        try {
            MultipleDurationInvoiceRepaymentWindow.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for MultipleDurationInvoiceRepaymentWindow failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        if (validCount != 1) {
            throw new IOException(String.format("The JSON string is invalid for InvoicePaymentPlanRepaymentWindow with oneOf schemas: FixedDateInvoiceRepaymentWindow, FixedDurationInvoiceRepaymentWindow, MultipleDurationInvoiceRepaymentWindow. %d class(es) match the result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", validCount, errorMessages, jsonElement.toString()));
        }
    }

    /**
     * Create an instance of InvoicePaymentPlanRepaymentWindow given an JSON string
     *
     * @param jsonString JSON string
     * @return An instance of InvoicePaymentPlanRepaymentWindow
     * @throws IOException if the JSON string is invalid with respect to InvoicePaymentPlanRepaymentWindow
     */
    public static InvoicePaymentPlanRepaymentWindow fromJson(String jsonString) throws IOException {
        return JSON.getGson().fromJson(jsonString, InvoicePaymentPlanRepaymentWindow.class);
    }

    /**
     * Convert an instance of InvoicePaymentPlanRepaymentWindow to an JSON string
     *
     * @return JSON string
     */
    public String toJson() {
        return JSON.getGson().toJson(this);
    }
}

