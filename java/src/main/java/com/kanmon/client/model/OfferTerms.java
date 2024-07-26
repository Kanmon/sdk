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
import com.kanmon.client.model.InvoiceFinancingOfferTerms;
import com.kanmon.client.model.InvoicePaymentPlan;
import com.kanmon.client.model.LineOfCreditOfferTerms;
import com.kanmon.client.model.McaOfferTerms;
import com.kanmon.client.model.ProductType;
import com.kanmon.client.model.TermLoanOfferTerms;
import java.io.IOException;
import java.math.BigDecimal;
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

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-07-26T14:34:18.978357-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class OfferTerms extends AbstractOpenApiSchema {
    private static final Logger log = Logger.getLogger(OfferTerms.class.getName());

    public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
        @SuppressWarnings("unchecked")
        @Override
        public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
            if (!OfferTerms.class.isAssignableFrom(type.getRawType())) {
                return null; // this class only serializes 'OfferTerms' and its subtypes
            }
            final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
            final TypeAdapter<TermLoanOfferTerms> adapterTermLoanOfferTerms = gson.getDelegateAdapter(this, TypeToken.get(TermLoanOfferTerms.class));
            final TypeAdapter<InvoiceFinancingOfferTerms> adapterInvoiceFinancingOfferTerms = gson.getDelegateAdapter(this, TypeToken.get(InvoiceFinancingOfferTerms.class));
            final TypeAdapter<McaOfferTerms> adapterMcaOfferTerms = gson.getDelegateAdapter(this, TypeToken.get(McaOfferTerms.class));
            final TypeAdapter<LineOfCreditOfferTerms> adapterLineOfCreditOfferTerms = gson.getDelegateAdapter(this, TypeToken.get(LineOfCreditOfferTerms.class));

            return (TypeAdapter<T>) new TypeAdapter<OfferTerms>() {
                @Override
                public void write(JsonWriter out, OfferTerms value) throws IOException {
                    if (value == null || value.getActualInstance() == null) {
                        elementAdapter.write(out, null);
                        return;
                    }

                    // check if the actual instance is of the type `TermLoanOfferTerms`
                    if (value.getActualInstance() instanceof TermLoanOfferTerms) {
                        JsonElement element = adapterTermLoanOfferTerms.toJsonTree((TermLoanOfferTerms)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `InvoiceFinancingOfferTerms`
                    if (value.getActualInstance() instanceof InvoiceFinancingOfferTerms) {
                        JsonElement element = adapterInvoiceFinancingOfferTerms.toJsonTree((InvoiceFinancingOfferTerms)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `McaOfferTerms`
                    if (value.getActualInstance() instanceof McaOfferTerms) {
                        JsonElement element = adapterMcaOfferTerms.toJsonTree((McaOfferTerms)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `LineOfCreditOfferTerms`
                    if (value.getActualInstance() instanceof LineOfCreditOfferTerms) {
                        JsonElement element = adapterLineOfCreditOfferTerms.toJsonTree((LineOfCreditOfferTerms)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    throw new IOException("Failed to serialize as the type doesn't match oneOf schemas: InvoiceFinancingOfferTerms, LineOfCreditOfferTerms, McaOfferTerms, TermLoanOfferTerms");
                }

                @Override
                public OfferTerms read(JsonReader in) throws IOException {
                    Object deserialized = null;
                    JsonElement jsonElement = elementAdapter.read(in);

                    int match = 0;
                    ArrayList<String> errorMessages = new ArrayList<>();
                    TypeAdapter actualAdapter = elementAdapter;

                    // deserialize TermLoanOfferTerms
                    try {
                        // validate the JSON object to see if any exception is thrown
                        TermLoanOfferTerms.validateJsonElement(jsonElement);
                        actualAdapter = adapterTermLoanOfferTerms;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'TermLoanOfferTerms'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for TermLoanOfferTerms failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'TermLoanOfferTerms'", e);
                    }
                    // deserialize InvoiceFinancingOfferTerms
                    try {
                        // validate the JSON object to see if any exception is thrown
                        InvoiceFinancingOfferTerms.validateJsonElement(jsonElement);
                        actualAdapter = adapterInvoiceFinancingOfferTerms;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'InvoiceFinancingOfferTerms'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for InvoiceFinancingOfferTerms failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'InvoiceFinancingOfferTerms'", e);
                    }
                    // deserialize McaOfferTerms
                    try {
                        // validate the JSON object to see if any exception is thrown
                        McaOfferTerms.validateJsonElement(jsonElement);
                        actualAdapter = adapterMcaOfferTerms;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'McaOfferTerms'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for McaOfferTerms failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'McaOfferTerms'", e);
                    }
                    // deserialize LineOfCreditOfferTerms
                    try {
                        // validate the JSON object to see if any exception is thrown
                        LineOfCreditOfferTerms.validateJsonElement(jsonElement);
                        actualAdapter = adapterLineOfCreditOfferTerms;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'LineOfCreditOfferTerms'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for LineOfCreditOfferTerms failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'LineOfCreditOfferTerms'", e);
                    }

                    if (match == 1) {
                        OfferTerms ret = new OfferTerms();
                        ret.setActualInstance(actualAdapter.fromJsonTree(jsonElement));
                        return ret;
                    }

                    throw new IOException(String.format("Failed deserialization for OfferTerms: %d classes match result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", match, errorMessages, jsonElement.toString()));
                }
            }.nullSafe();
        }
    }

    // store a list of schema names defined in oneOf
    public static final Map<String, Class<?>> schemas = new HashMap<String, Class<?>>();

    public OfferTerms() {
        super("oneOf", Boolean.FALSE);
    }

    public OfferTerms(InvoiceFinancingOfferTerms o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    public OfferTerms(LineOfCreditOfferTerms o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    public OfferTerms(McaOfferTerms o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    public OfferTerms(TermLoanOfferTerms o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    static {
        schemas.put("TermLoanOfferTerms", TermLoanOfferTerms.class);
        schemas.put("InvoiceFinancingOfferTerms", InvoiceFinancingOfferTerms.class);
        schemas.put("McaOfferTerms", McaOfferTerms.class);
        schemas.put("LineOfCreditOfferTerms", LineOfCreditOfferTerms.class);
    }

    @Override
    public Map<String, Class<?>> getSchemas() {
        return OfferTerms.schemas;
    }

    /**
     * Set the instance that matches the oneOf child schema, check
     * the instance parameter is valid against the oneOf child schemas:
     * InvoiceFinancingOfferTerms, LineOfCreditOfferTerms, McaOfferTerms, TermLoanOfferTerms
     *
     * It could be an instance of the 'oneOf' schemas.
     */
    @Override
    public void setActualInstance(Object instance) {
        if (instance instanceof TermLoanOfferTerms) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof InvoiceFinancingOfferTerms) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof McaOfferTerms) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof LineOfCreditOfferTerms) {
            super.setActualInstance(instance);
            return;
        }

        throw new RuntimeException("Invalid instance type. Must be InvoiceFinancingOfferTerms, LineOfCreditOfferTerms, McaOfferTerms, TermLoanOfferTerms");
    }

    /**
     * Get the actual instance, which can be the following:
     * InvoiceFinancingOfferTerms, LineOfCreditOfferTerms, McaOfferTerms, TermLoanOfferTerms
     *
     * @return The actual instance (InvoiceFinancingOfferTerms, LineOfCreditOfferTerms, McaOfferTerms, TermLoanOfferTerms)
     */
    @SuppressWarnings("unchecked")
    @Override
    public Object getActualInstance() {
        return super.getActualInstance();
    }

    /**
     * Get the actual instance of `TermLoanOfferTerms`. If the actual instance is not `TermLoanOfferTerms`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `TermLoanOfferTerms`
     * @throws ClassCastException if the instance is not `TermLoanOfferTerms`
     */
    public TermLoanOfferTerms getTermLoanOfferTerms() throws ClassCastException {
        return (TermLoanOfferTerms)super.getActualInstance();
    }
    /**
     * Get the actual instance of `InvoiceFinancingOfferTerms`. If the actual instance is not `InvoiceFinancingOfferTerms`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `InvoiceFinancingOfferTerms`
     * @throws ClassCastException if the instance is not `InvoiceFinancingOfferTerms`
     */
    public InvoiceFinancingOfferTerms getInvoiceFinancingOfferTerms() throws ClassCastException {
        return (InvoiceFinancingOfferTerms)super.getActualInstance();
    }
    /**
     * Get the actual instance of `McaOfferTerms`. If the actual instance is not `McaOfferTerms`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `McaOfferTerms`
     * @throws ClassCastException if the instance is not `McaOfferTerms`
     */
    public McaOfferTerms getMcaOfferTerms() throws ClassCastException {
        return (McaOfferTerms)super.getActualInstance();
    }
    /**
     * Get the actual instance of `LineOfCreditOfferTerms`. If the actual instance is not `LineOfCreditOfferTerms`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `LineOfCreditOfferTerms`
     * @throws ClassCastException if the instance is not `LineOfCreditOfferTerms`
     */
    public LineOfCreditOfferTerms getLineOfCreditOfferTerms() throws ClassCastException {
        return (LineOfCreditOfferTerms)super.getActualInstance();
    }

    /**
     * Validates the JSON Element and throws an exception if issues found
     *
     * @param jsonElement JSON Element
     * @throws IOException if the JSON Element is invalid with respect to OfferTerms
     */
    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
        // validate oneOf schemas one by one
        int validCount = 0;
        ArrayList<String> errorMessages = new ArrayList<>();
        // validate the json string with TermLoanOfferTerms
        try {
            TermLoanOfferTerms.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for TermLoanOfferTerms failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with InvoiceFinancingOfferTerms
        try {
            InvoiceFinancingOfferTerms.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for InvoiceFinancingOfferTerms failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with McaOfferTerms
        try {
            McaOfferTerms.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for McaOfferTerms failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with LineOfCreditOfferTerms
        try {
            LineOfCreditOfferTerms.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for LineOfCreditOfferTerms failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        if (validCount != 1) {
            throw new IOException(String.format("The JSON string is invalid for OfferTerms with oneOf schemas: InvoiceFinancingOfferTerms, LineOfCreditOfferTerms, McaOfferTerms, TermLoanOfferTerms. %d class(es) match the result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", validCount, errorMessages, jsonElement.toString()));
        }
    }

    /**
     * Create an instance of OfferTerms given an JSON string
     *
     * @param jsonString JSON string
     * @return An instance of OfferTerms
     * @throws IOException if the JSON string is invalid with respect to OfferTerms
     */
    public static OfferTerms fromJson(String jsonString) throws IOException {
        return JSON.getGson().fromJson(jsonString, OfferTerms.class);
    }

    /**
     * Convert an instance of OfferTerms to an JSON string
     *
     * @return JSON string
     */
    public String toJson() {
        return JSON.getGson().toJson(this);
    }
}
