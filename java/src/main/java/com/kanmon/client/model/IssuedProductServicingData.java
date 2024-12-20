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
import com.kanmon.client.model.AccountsPayableFinancingServicingData;
import com.kanmon.client.model.IntegratedMcaServicingData;
import com.kanmon.client.model.InvoiceFinancingServicingData;
import com.kanmon.client.model.InvoicePaymentPlan;
import com.kanmon.client.model.LineOfCreditServicingData;
import com.kanmon.client.model.McaServicingData;
import com.kanmon.client.model.ProductType;
import com.kanmon.client.model.TermLoanServicingData;
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

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
public class IssuedProductServicingData extends AbstractOpenApiSchema {
    private static final Logger log = Logger.getLogger(IssuedProductServicingData.class.getName());

    public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
        @SuppressWarnings("unchecked")
        @Override
        public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
            if (!IssuedProductServicingData.class.isAssignableFrom(type.getRawType())) {
                return null; // this class only serializes 'IssuedProductServicingData' and its subtypes
            }
            final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
            final TypeAdapter<TermLoanServicingData> adapterTermLoanServicingData = gson.getDelegateAdapter(this, TypeToken.get(TermLoanServicingData.class));
            final TypeAdapter<InvoiceFinancingServicingData> adapterInvoiceFinancingServicingData = gson.getDelegateAdapter(this, TypeToken.get(InvoiceFinancingServicingData.class));
            final TypeAdapter<McaServicingData> adapterMcaServicingData = gson.getDelegateAdapter(this, TypeToken.get(McaServicingData.class));
            final TypeAdapter<IntegratedMcaServicingData> adapterIntegratedMcaServicingData = gson.getDelegateAdapter(this, TypeToken.get(IntegratedMcaServicingData.class));
            final TypeAdapter<LineOfCreditServicingData> adapterLineOfCreditServicingData = gson.getDelegateAdapter(this, TypeToken.get(LineOfCreditServicingData.class));
            final TypeAdapter<AccountsPayableFinancingServicingData> adapterAccountsPayableFinancingServicingData = gson.getDelegateAdapter(this, TypeToken.get(AccountsPayableFinancingServicingData.class));

            return (TypeAdapter<T>) new TypeAdapter<IssuedProductServicingData>() {
                @Override
                public void write(JsonWriter out, IssuedProductServicingData value) throws IOException {
                    if (value == null || value.getActualInstance() == null) {
                        elementAdapter.write(out, null);
                        return;
                    }

                    // check if the actual instance is of the type `TermLoanServicingData`
                    if (value.getActualInstance() instanceof TermLoanServicingData) {
                        JsonElement element = adapterTermLoanServicingData.toJsonTree((TermLoanServicingData)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `InvoiceFinancingServicingData`
                    if (value.getActualInstance() instanceof InvoiceFinancingServicingData) {
                        JsonElement element = adapterInvoiceFinancingServicingData.toJsonTree((InvoiceFinancingServicingData)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `McaServicingData`
                    if (value.getActualInstance() instanceof McaServicingData) {
                        JsonElement element = adapterMcaServicingData.toJsonTree((McaServicingData)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `IntegratedMcaServicingData`
                    if (value.getActualInstance() instanceof IntegratedMcaServicingData) {
                        JsonElement element = adapterIntegratedMcaServicingData.toJsonTree((IntegratedMcaServicingData)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `LineOfCreditServicingData`
                    if (value.getActualInstance() instanceof LineOfCreditServicingData) {
                        JsonElement element = adapterLineOfCreditServicingData.toJsonTree((LineOfCreditServicingData)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `AccountsPayableFinancingServicingData`
                    if (value.getActualInstance() instanceof AccountsPayableFinancingServicingData) {
                        JsonElement element = adapterAccountsPayableFinancingServicingData.toJsonTree((AccountsPayableFinancingServicingData)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    throw new IOException("Failed to serialize as the type doesn't match oneOf schemas: AccountsPayableFinancingServicingData, IntegratedMcaServicingData, InvoiceFinancingServicingData, LineOfCreditServicingData, McaServicingData, TermLoanServicingData");
                }

                @Override
                public IssuedProductServicingData read(JsonReader in) throws IOException {
                    Object deserialized = null;
                    JsonElement jsonElement = elementAdapter.read(in);

                    int match = 0;
                    ArrayList<String> errorMessages = new ArrayList<>();
                    TypeAdapter actualAdapter = elementAdapter;

                    // deserialize TermLoanServicingData
                    try {
                        // validate the JSON object to see if any exception is thrown
                        TermLoanServicingData.validateJsonElement(jsonElement);
                        actualAdapter = adapterTermLoanServicingData;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'TermLoanServicingData'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for TermLoanServicingData failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'TermLoanServicingData'", e);
                    }
                    // deserialize InvoiceFinancingServicingData
                    try {
                        // validate the JSON object to see if any exception is thrown
                        InvoiceFinancingServicingData.validateJsonElement(jsonElement);
                        actualAdapter = adapterInvoiceFinancingServicingData;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'InvoiceFinancingServicingData'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for InvoiceFinancingServicingData failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'InvoiceFinancingServicingData'", e);
                    }
                    // deserialize McaServicingData
                    try {
                        // validate the JSON object to see if any exception is thrown
                        McaServicingData.validateJsonElement(jsonElement);
                        actualAdapter = adapterMcaServicingData;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'McaServicingData'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for McaServicingData failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'McaServicingData'", e);
                    }
                    // deserialize IntegratedMcaServicingData
                    try {
                        // validate the JSON object to see if any exception is thrown
                        IntegratedMcaServicingData.validateJsonElement(jsonElement);
                        actualAdapter = adapterIntegratedMcaServicingData;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'IntegratedMcaServicingData'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for IntegratedMcaServicingData failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'IntegratedMcaServicingData'", e);
                    }
                    // deserialize LineOfCreditServicingData
                    try {
                        // validate the JSON object to see if any exception is thrown
                        LineOfCreditServicingData.validateJsonElement(jsonElement);
                        actualAdapter = adapterLineOfCreditServicingData;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'LineOfCreditServicingData'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for LineOfCreditServicingData failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'LineOfCreditServicingData'", e);
                    }
                    // deserialize AccountsPayableFinancingServicingData
                    try {
                        // validate the JSON object to see if any exception is thrown
                        AccountsPayableFinancingServicingData.validateJsonElement(jsonElement);
                        actualAdapter = adapterAccountsPayableFinancingServicingData;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'AccountsPayableFinancingServicingData'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for AccountsPayableFinancingServicingData failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'AccountsPayableFinancingServicingData'", e);
                    }

                    if (match == 1) {
                        IssuedProductServicingData ret = new IssuedProductServicingData();
                        ret.setActualInstance(actualAdapter.fromJsonTree(jsonElement));
                        return ret;
                    }

                    throw new IOException(String.format("Failed deserialization for IssuedProductServicingData: %d classes match result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", match, errorMessages, jsonElement.toString()));
                }
            }.nullSafe();
        }
    }

    // store a list of schema names defined in oneOf
    public static final Map<String, Class<?>> schemas = new HashMap<String, Class<?>>();

    public IssuedProductServicingData() {
        super("oneOf", Boolean.FALSE);
    }

    public IssuedProductServicingData(Object o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    static {
        schemas.put("TermLoanServicingData", TermLoanServicingData.class);
        schemas.put("InvoiceFinancingServicingData", InvoiceFinancingServicingData.class);
        schemas.put("McaServicingData", McaServicingData.class);
        schemas.put("IntegratedMcaServicingData", IntegratedMcaServicingData.class);
        schemas.put("LineOfCreditServicingData", LineOfCreditServicingData.class);
        schemas.put("AccountsPayableFinancingServicingData", AccountsPayableFinancingServicingData.class);
    }

    @Override
    public Map<String, Class<?>> getSchemas() {
        return IssuedProductServicingData.schemas;
    }

    /**
     * Set the instance that matches the oneOf child schema, check
     * the instance parameter is valid against the oneOf child schemas:
     * AccountsPayableFinancingServicingData, IntegratedMcaServicingData, InvoiceFinancingServicingData, LineOfCreditServicingData, McaServicingData, TermLoanServicingData
     *
     * It could be an instance of the 'oneOf' schemas.
     */
    @Override
    public void setActualInstance(Object instance) {
        if (instance instanceof TermLoanServicingData) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof InvoiceFinancingServicingData) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof McaServicingData) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof IntegratedMcaServicingData) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof LineOfCreditServicingData) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof AccountsPayableFinancingServicingData) {
            super.setActualInstance(instance);
            return;
        }

        throw new RuntimeException("Invalid instance type. Must be AccountsPayableFinancingServicingData, IntegratedMcaServicingData, InvoiceFinancingServicingData, LineOfCreditServicingData, McaServicingData, TermLoanServicingData");
    }

    /**
     * Get the actual instance, which can be the following:
     * AccountsPayableFinancingServicingData, IntegratedMcaServicingData, InvoiceFinancingServicingData, LineOfCreditServicingData, McaServicingData, TermLoanServicingData
     *
     * @return The actual instance (AccountsPayableFinancingServicingData, IntegratedMcaServicingData, InvoiceFinancingServicingData, LineOfCreditServicingData, McaServicingData, TermLoanServicingData)
     */
    @SuppressWarnings("unchecked")
    @Override
    public Object getActualInstance() {
        return super.getActualInstance();
    }

    /**
     * Get the actual instance of `TermLoanServicingData`. If the actual instance is not `TermLoanServicingData`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `TermLoanServicingData`
     * @throws ClassCastException if the instance is not `TermLoanServicingData`
     */
    public TermLoanServicingData getTermLoanServicingData() throws ClassCastException {
        return (TermLoanServicingData)super.getActualInstance();
    }
    /**
     * Get the actual instance of `InvoiceFinancingServicingData`. If the actual instance is not `InvoiceFinancingServicingData`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `InvoiceFinancingServicingData`
     * @throws ClassCastException if the instance is not `InvoiceFinancingServicingData`
     */
    public InvoiceFinancingServicingData getInvoiceFinancingServicingData() throws ClassCastException {
        return (InvoiceFinancingServicingData)super.getActualInstance();
    }
    /**
     * Get the actual instance of `McaServicingData`. If the actual instance is not `McaServicingData`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `McaServicingData`
     * @throws ClassCastException if the instance is not `McaServicingData`
     */
    public McaServicingData getMcaServicingData() throws ClassCastException {
        return (McaServicingData)super.getActualInstance();
    }
    /**
     * Get the actual instance of `IntegratedMcaServicingData`. If the actual instance is not `IntegratedMcaServicingData`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `IntegratedMcaServicingData`
     * @throws ClassCastException if the instance is not `IntegratedMcaServicingData`
     */
    public IntegratedMcaServicingData getIntegratedMcaServicingData() throws ClassCastException {
        return (IntegratedMcaServicingData)super.getActualInstance();
    }
    /**
     * Get the actual instance of `LineOfCreditServicingData`. If the actual instance is not `LineOfCreditServicingData`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `LineOfCreditServicingData`
     * @throws ClassCastException if the instance is not `LineOfCreditServicingData`
     */
    public LineOfCreditServicingData getLineOfCreditServicingData() throws ClassCastException {
        return (LineOfCreditServicingData)super.getActualInstance();
    }
    /**
     * Get the actual instance of `AccountsPayableFinancingServicingData`. If the actual instance is not `AccountsPayableFinancingServicingData`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `AccountsPayableFinancingServicingData`
     * @throws ClassCastException if the instance is not `AccountsPayableFinancingServicingData`
     */
    public AccountsPayableFinancingServicingData getAccountsPayableFinancingServicingData() throws ClassCastException {
        return (AccountsPayableFinancingServicingData)super.getActualInstance();
    }

    /**
     * Validates the JSON Element and throws an exception if issues found
     *
     * @param jsonElement JSON Element
     * @throws IOException if the JSON Element is invalid with respect to IssuedProductServicingData
     */
    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
        // validate oneOf schemas one by one
        int validCount = 0;
        ArrayList<String> errorMessages = new ArrayList<>();
        // validate the json string with TermLoanServicingData
        try {
            TermLoanServicingData.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for TermLoanServicingData failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with InvoiceFinancingServicingData
        try {
            InvoiceFinancingServicingData.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for InvoiceFinancingServicingData failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with McaServicingData
        try {
            McaServicingData.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for McaServicingData failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with IntegratedMcaServicingData
        try {
            IntegratedMcaServicingData.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for IntegratedMcaServicingData failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with LineOfCreditServicingData
        try {
            LineOfCreditServicingData.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for LineOfCreditServicingData failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with AccountsPayableFinancingServicingData
        try {
            AccountsPayableFinancingServicingData.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for AccountsPayableFinancingServicingData failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        if (validCount != 1) {
            throw new IOException(String.format("The JSON string is invalid for IssuedProductServicingData with oneOf schemas: AccountsPayableFinancingServicingData, IntegratedMcaServicingData, InvoiceFinancingServicingData, LineOfCreditServicingData, McaServicingData, TermLoanServicingData. %d class(es) match the result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", validCount, errorMessages, jsonElement.toString()));
        }
    }

    /**
     * Create an instance of IssuedProductServicingData given an JSON string
     *
     * @param jsonString JSON string
     * @return An instance of IssuedProductServicingData
     * @throws IOException if the JSON string is invalid with respect to IssuedProductServicingData
     */
    public static IssuedProductServicingData fromJson(String jsonString) throws IOException {
        return JSON.getGson().fromJson(jsonString, IssuedProductServicingData.class);
    }

    /**
     * Convert an instance of IssuedProductServicingData to an JSON string
     *
     * @return JSON string
     */
    public String toJson() {
        return JSON.getGson().toJson(this);
    }
}

