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


package com.kanmon.client;

import com.fasterxml.jackson.databind.util.StdDateFormat;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.google.gson.JsonElement;
import io.gsonfire.GsonFireBuilder;
import io.gsonfire.TypeSelector;

import okio.ByteString;

import java.io.IOException;
import java.io.StringReader;
import java.lang.reflect.Type;
import java.text.DateFormat;
import java.text.ParseException;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Locale;
import java.util.Map;
import java.util.HashMap;
import java.util.TimeZone;

/*
 * A JSON utility class
 *
 * NOTE: in the future, this class may be converted to static, which may break
 *       backward-compatibility
 */
public class JSON {
    private static Gson gson;
    private static boolean isLenientOnJson = false;
    private static DateTypeAdapter dateTypeAdapter = new DateTypeAdapter();
    private static SqlDateTypeAdapter sqlDateTypeAdapter = new SqlDateTypeAdapter();
    private static OffsetDateTimeTypeAdapter offsetDateTimeTypeAdapter = new OffsetDateTimeTypeAdapter();
    private static LocalDateTypeAdapter localDateTypeAdapter = new LocalDateTypeAdapter();
    private static ByteArrayAdapter byteArrayAdapter = new ByteArrayAdapter();

    private static final StdDateFormat sdf = new StdDateFormat()
        .withTimeZone(TimeZone.getTimeZone(ZoneId.systemDefault()))
        .withColonInTimeZone(true);
    private static final DateTimeFormatter dtf = DateTimeFormatter.ISO_OFFSET_DATE_TIME;

    @SuppressWarnings("unchecked")
    public static GsonBuilder createGson() {
        GsonFireBuilder fireBuilder = new GsonFireBuilder()
                .registerTypeSelector(com.kanmon.client.model.CreateSessionTokenRequestBodyData.class, new TypeSelector<com.kanmon.client.model.CreateSessionTokenRequestBodyData>() {
                    @Override
                    public Class<? extends com.kanmon.client.model.CreateSessionTokenRequestBodyData> getClassForElement(JsonElement readElement) {
                        Map<String, Class> classByDiscriminatorValue = new HashMap<String, Class>();
                        classByDiscriminatorValue.put("SESSION_INVOICE_FLOW", com.kanmon.client.model.InvoiceFlowSessionTokenData.class);
                        classByDiscriminatorValue.put("SESSION_INVOICE_FLOW_WITH_INVOICE_FILE", com.kanmon.client.model.InvoiceFlowWithInvoiceFileSessionTokenData.class);
                        classByDiscriminatorValue.put("InvoiceFlowSessionTokenData", com.kanmon.client.model.InvoiceFlowSessionTokenData.class);
                        classByDiscriminatorValue.put("InvoiceFlowWithInvoiceFileSessionTokenData", com.kanmon.client.model.InvoiceFlowWithInvoiceFileSessionTokenData.class);
                        classByDiscriminatorValue.put("CreateSessionTokenRequestBody_data", com.kanmon.client.model.CreateSessionTokenRequestBodyData.class);
                        return getClassByDiscriminator(classByDiscriminatorValue,
                                getDiscriminatorValue(readElement, "component"));
                    }
          })
                .registerTypeSelector(com.kanmon.client.model.IssuedProductServicingData.class, new TypeSelector<com.kanmon.client.model.IssuedProductServicingData>() {
                    @Override
                    public Class<? extends com.kanmon.client.model.IssuedProductServicingData> getClassForElement(JsonElement readElement) {
                        Map<String, Class> classByDiscriminatorValue = new HashMap<String, Class>();
                        classByDiscriminatorValue.put("INVOICE_FINANCING", com.kanmon.client.model.InvoiceFinancingServicingData.class);
                        classByDiscriminatorValue.put("LINE_OF_CREDIT", com.kanmon.client.model.LineOfCreditServicingData.class);
                        classByDiscriminatorValue.put("MCA", com.kanmon.client.model.McaServicingData.class);
                        classByDiscriminatorValue.put("TERM_LOAN", com.kanmon.client.model.TermLoanServicingData.class);
                        classByDiscriminatorValue.put("InvoiceFinancingServicingData", com.kanmon.client.model.InvoiceFinancingServicingData.class);
                        classByDiscriminatorValue.put("LineOfCreditServicingData", com.kanmon.client.model.LineOfCreditServicingData.class);
                        classByDiscriminatorValue.put("McaServicingData", com.kanmon.client.model.McaServicingData.class);
                        classByDiscriminatorValue.put("TermLoanServicingData", com.kanmon.client.model.TermLoanServicingData.class);
                        classByDiscriminatorValue.put("IssuedProduct_servicingData", com.kanmon.client.model.IssuedProductServicingData.class);
                        return getClassByDiscriminator(classByDiscriminatorValue,
                                getDiscriminatorValue(readElement, "productType"));
                    }
          })
        ;
        GsonBuilder builder = fireBuilder.createGsonBuilder();
        return builder;
    }

    private static String getDiscriminatorValue(JsonElement readElement, String discriminatorField) {
        JsonElement element = readElement.getAsJsonObject().get(discriminatorField);
        if (null == element) {
            throw new IllegalArgumentException("missing discriminator field: <" + discriminatorField + ">");
        }
        return element.getAsString();
    }

    /**
     * Returns the Java class that implements the OpenAPI schema for the specified discriminator value.
     *
     * @param classByDiscriminatorValue The map of discriminator values to Java classes.
     * @param discriminatorValue The value of the OpenAPI discriminator in the input data.
     * @return The Java class that implements the OpenAPI schema
     */
    private static Class getClassByDiscriminator(Map classByDiscriminatorValue, String discriminatorValue) {
        Class clazz = (Class) classByDiscriminatorValue.get(discriminatorValue);
        if (null == clazz) {
            throw new IllegalArgumentException("cannot determine model class of name: <" + discriminatorValue + ">");
        }
        return clazz;
    }

    static {
        GsonBuilder gsonBuilder = createGson();
        gsonBuilder.registerTypeAdapter(Date.class, dateTypeAdapter);
        gsonBuilder.registerTypeAdapter(java.sql.Date.class, sqlDateTypeAdapter);
        gsonBuilder.registerTypeAdapter(OffsetDateTime.class, offsetDateTimeTypeAdapter);
        gsonBuilder.registerTypeAdapter(LocalDate.class, localDateTypeAdapter);
        gsonBuilder.registerTypeAdapter(byte[].class, byteArrayAdapter);
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.ActivityLog.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.Address.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.BadRequestException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.BankAccountAlreadyExistException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.BankAccountNotFoundException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.BankStatementsInvalidException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.Business.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.BusinessAddress.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.BusinessAlreadyExistsException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.BusinessBankAccount.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.BusinessDocument.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.BusinessHasNoInvoiceFinancingProductException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.BusinessHasNoPrimaryOwnerException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.BusinessNotFoundException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.BusinessPlaidBankAccountNotFoundException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.BusinessPrequalification.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.CheckingAccountRequiredException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.ConnectToken.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.CreateBusinessBankAccountRequestBody.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.CreateBusinessDocumentsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.CreateBusinessRequestBody.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.CreateConnectTokenRequestBody.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.CreateEmbeddedSession409Response.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.CreateSessionTokenRequestBody.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.CreateSessionTokenRequestBodyData.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.CreateUser409Response.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.CreateUserRequestBody.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.DrawRequest.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.DrawRequestNotFoundException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.EmbeddedSession.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.FixedDateInvoiceRepaymentWindow.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.FixedDurationInvoiceRepaymentWindow.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.ForbiddenException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.GetActivityLogsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.GetBusinessBankAccountsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.GetBusinessesResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.GetDrawRequestsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.GetInvoice404Response.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.GetInvoicesResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.GetIssuedProductsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.GetOffersResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.GetPaymentScheduleResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.GetPrequalificationsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.GetUsersResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.InternalServerErrorException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.InvalidInvoiceDueDateException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.Invoice.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.InvoiceFinancingOfferTerms.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.InvoiceFinancingServicingData.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.InvoiceFlowSessionTokenData.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.InvoiceFlowWithInvoiceFileSessionTokenData.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.InvoiceNotFoundException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.InvoicePaymentPlan.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.InvoicePayorAddress.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.InvoiceRepaymentSchedule.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.InvoiceRepaymentScheduleItem.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.IssuedProduct.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.IssuedProductNotFoundException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.IssuedProductServicingData.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.LineOfCreditOfferTerms.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.LineOfCreditServicingData.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.McaOfferTerms.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.McaServicingData.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.MergeUsersRequestBody.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.MergeUsersResponseBody.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.MultipleDurationInvoiceRepaymentWindow.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.Offer.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.OfferAlreadySelectedException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.OfferNotFoundException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.OfferNotLockedException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.OfferTerms.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.PaginationResult.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.PaymentOrder.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.PaymentOrderNotFoundException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.PaymentPlanRepaymentSchedule.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.PaymentPlanRepaymentScheduleItem.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.PaymentScheduleItem.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.PaymentScheduleItemPaymentOrder.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.PlaidAssetReportsInvalidException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.PrimaryBusinessOwnerAlreadyExistsForBusinessException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.PrimaryBusinessOwnerAlreadyExistsWithEmailException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.PrimaryBusinessOwnerNotFoundException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.SessionInvoice.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.SessionInvoiceWithInvoiceFile.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.SomeOffersHaveExpiredException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.TermLoanOfferTerms.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.TermLoanServicingData.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.UnmergeableBusinessException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.UpdateBusinessAccountRequestBody.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.UpdateBusinessRequestBody.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.UpdateUser409Response.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.UpdateUserRequestBody.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.User.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.UserAddress.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.UserAlreadyExistsWithEmailException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.UserAlreadyExistsWithPlatformUserIdException.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new com.kanmon.client.model.UserNotFoundException.CustomTypeAdapterFactory());
        gson = gsonBuilder.create();
    }

    /**
     * Get Gson.
     *
     * @return Gson
     */
    public static Gson getGson() {
        return gson;
    }

    /**
     * Set Gson.
     *
     * @param gson Gson
     */
    public static void setGson(Gson gson) {
        JSON.gson = gson;
    }

    public static void setLenientOnJson(boolean lenientOnJson) {
        isLenientOnJson = lenientOnJson;
    }

    /**
     * Serialize the given Java object into JSON string.
     *
     * @param obj Object
     * @return String representation of the JSON
     */
    public static String serialize(Object obj) {
        return gson.toJson(obj);
    }

    /**
     * Deserialize the given JSON string to Java object.
     *
     * @param <T>        Type
     * @param body       The JSON string
     * @param returnType The type to deserialize into
     * @return The deserialized Java object
     */
    @SuppressWarnings("unchecked")
    public static <T> T deserialize(String body, Type returnType) {
        try {
            if (isLenientOnJson) {
                JsonReader jsonReader = new JsonReader(new StringReader(body));
                // see https://google-gson.googlecode.com/svn/trunk/gson/docs/javadocs/com/google/gson/stream/JsonReader.html#setLenient(boolean)
                jsonReader.setLenient(true);
                return gson.fromJson(jsonReader, returnType);
            } else {
                return gson.fromJson(body, returnType);
            }
        } catch (JsonParseException e) {
            // Fallback processing when failed to parse JSON form response body:
            // return the response body string directly for the String return type;
            if (returnType.equals(String.class)) {
                return (T) body;
            } else {
                throw (e);
            }
        }
    }

    /**
     * Gson TypeAdapter for Byte Array type
     */
    public static class ByteArrayAdapter extends TypeAdapter<byte[]> {

        @Override
        public void write(JsonWriter out, byte[] value) throws IOException {
            if (value == null) {
                out.nullValue();
            } else {
                out.value(ByteString.of(value).base64());
            }
        }

        @Override
        public byte[] read(JsonReader in) throws IOException {
            switch (in.peek()) {
                case NULL:
                    in.nextNull();
                    return null;
                default:
                    String bytesAsBase64 = in.nextString();
                    ByteString byteString = ByteString.decodeBase64(bytesAsBase64);
                    return byteString.toByteArray();
            }
        }
    }

    /**
     * Gson TypeAdapter for JSR310 OffsetDateTime type
     */
    public static class OffsetDateTimeTypeAdapter extends TypeAdapter<OffsetDateTime> {

        private DateTimeFormatter formatter;

        public OffsetDateTimeTypeAdapter() {
            this(DateTimeFormatter.ISO_OFFSET_DATE_TIME);
        }

        public OffsetDateTimeTypeAdapter(DateTimeFormatter formatter) {
            this.formatter = formatter;
        }

        public void setFormat(DateTimeFormatter dateFormat) {
            this.formatter = dateFormat;
        }

        @Override
        public void write(JsonWriter out, OffsetDateTime date) throws IOException {
            if (date == null) {
                out.nullValue();
            } else {
                out.value(formatter.format(date));
            }
        }

        @Override
        public OffsetDateTime read(JsonReader in) throws IOException {
            switch (in.peek()) {
                case NULL:
                    in.nextNull();
                    return null;
                default:
                    String date = in.nextString();
                    if (date.endsWith("+0000")) {
                        date = date.substring(0, date.length()-5) + "Z";
                    }
                    return OffsetDateTime.parse(date, formatter);
            }
        }
    }

    /**
     * Gson TypeAdapter for JSR310 LocalDate type
     */
    public static class LocalDateTypeAdapter extends TypeAdapter<LocalDate> {

        private DateTimeFormatter formatter;

        public LocalDateTypeAdapter() {
            this(DateTimeFormatter.ISO_LOCAL_DATE);
        }

        public LocalDateTypeAdapter(DateTimeFormatter formatter) {
            this.formatter = formatter;
        }

        public void setFormat(DateTimeFormatter dateFormat) {
            this.formatter = dateFormat;
        }

        @Override
        public void write(JsonWriter out, LocalDate date) throws IOException {
            if (date == null) {
                out.nullValue();
            } else {
                out.value(formatter.format(date));
            }
        }

        @Override
        public LocalDate read(JsonReader in) throws IOException {
            switch (in.peek()) {
                case NULL:
                    in.nextNull();
                    return null;
                default:
                    String date = in.nextString();
                    return LocalDate.parse(date, formatter);
            }
        }
    }

    public static void setOffsetDateTimeFormat(DateTimeFormatter dateFormat) {
        offsetDateTimeTypeAdapter.setFormat(dateFormat);
    }

    public static void setLocalDateFormat(DateTimeFormatter dateFormat) {
        localDateTypeAdapter.setFormat(dateFormat);
    }

    /**
     * Gson TypeAdapter for java.sql.Date type
     * If the dateFormat is null, a simple "yyyy-MM-dd" format will be used
     * (more efficient than SimpleDateFormat).
     */
    public static class SqlDateTypeAdapter extends TypeAdapter<java.sql.Date> {

        private DateFormat dateFormat;

        public SqlDateTypeAdapter() {}

        public SqlDateTypeAdapter(DateFormat dateFormat) {
            this.dateFormat = dateFormat;
        }

        public void setFormat(DateFormat dateFormat) {
            this.dateFormat = dateFormat;
        }

        @Override
        public void write(JsonWriter out, java.sql.Date date) throws IOException {
            if (date == null) {
                out.nullValue();
            } else {
                String value;
                if (dateFormat != null) {
                    value = dateFormat.format(date);
                } else {
                    value = date.toString();
                }
                out.value(value);
            }
        }

        @Override
        public java.sql.Date read(JsonReader in) throws IOException {
            switch (in.peek()) {
                case NULL:
                    in.nextNull();
                    return null;
                default:
                    String date = in.nextString();
                    try {
                        if (dateFormat != null) {
                            return new java.sql.Date(dateFormat.parse(date).getTime());
                        }
                        return new java.sql.Date(sdf.parse(date).getTime());
                    } catch (ParseException e) {
                        throw new JsonParseException(e);
                    }
            }
        }
    }

    /**
     * Gson TypeAdapter for java.util.Date type
     * If the dateFormat is null, DateTimeFormatter will be used.
     */
    public static class DateTypeAdapter extends TypeAdapter<Date> {

        private DateFormat dateFormat;

        public DateTypeAdapter() {}

        public DateTypeAdapter(DateFormat dateFormat) {
            this.dateFormat = dateFormat;
        }

        public void setFormat(DateFormat dateFormat) {
            this.dateFormat = dateFormat;
        }

        @Override
        public void write(JsonWriter out, Date date) throws IOException {
            if (date == null) {
                out.nullValue();
            } else {
                String value;
                if (dateFormat != null) {
                    value = dateFormat.format(date);
                } else {
                    value = date.toInstant().atOffset(ZoneOffset.UTC).format(dtf);
                }
                out.value(value);
            }
        }

        @Override
        public Date read(JsonReader in) throws IOException {
            try {
                switch (in.peek()) {
                    case NULL:
                        in.nextNull();
                        return null;
                    default:
                        String date = in.nextString();
                        try {
                            if (dateFormat != null) {
                                return dateFormat.parse(date);
                            }
                            return sdf.parse(date);
                        } catch (ParseException e) {
                            throw new JsonParseException(e);
                        }
                }
            } catch (IllegalArgumentException e) {
                throw new JsonParseException(e);
            }
        }
    }

    public static void setDateFormat(DateFormat dateFormat) {
        dateTypeAdapter.setFormat(dateFormat);
    }

    public static void setSqlDateFormat(DateFormat dateFormat) {
        sqlDateTypeAdapter.setFormat(dateFormat);
    }
}
