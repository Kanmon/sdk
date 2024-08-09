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


package com.kanmon.client.api;

import com.kanmon.client.ApiException;
import com.kanmon.client.model.BadRequestException;
import java.math.BigDecimal;
import com.kanmon.client.model.CreateIntegratedMcaReceivable400Response;
import com.kanmon.client.model.CreateIntegratedMcaReceivable409Response;
import com.kanmon.client.model.CreateIntegratedMcaReceivableBody;
import com.kanmon.client.model.ForbiddenException;
import com.kanmon.client.model.GetIntegratedMcaReceivablesResponse;
import com.kanmon.client.model.IntegratedMcaReceivable;
import com.kanmon.client.model.InternalServerErrorException;
import com.kanmon.client.model.IssuedProductNotFoundException;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for IntegratedMcaReceivablesApi
 */
@Disabled
public class IntegratedMcaReceivablesApiTest {

    private final IntegratedMcaReceivablesApi api = new IntegratedMcaReceivablesApi();

    /**
     * Create an integrated MCA receivable
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createIntegratedMcaReceivableTest() throws ApiException {
        CreateIntegratedMcaReceivableBody createIntegratedMcaReceivableBody = null;
        IntegratedMcaReceivable response = api.createIntegratedMcaReceivable(createIntegratedMcaReceivableBody);
        // TODO: test validations
    }

    /**
     * Fetch integrated MCA receivables
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getIntegratedMcaReceivablesByIssuedProductIdTest() throws ApiException {
        String ids = null;
        String issuedProductIds = null;
        String transactionIds = null;
        BigDecimal offset = null;
        BigDecimal limit = null;
        String createdAtStart = null;
        String createdAtEnd = null;
        GetIntegratedMcaReceivablesResponse response = api.getIntegratedMcaReceivablesByIssuedProductId(ids, issuedProductIds, transactionIds, offset, limit, createdAtStart, createdAtEnd);
        // TODO: test validations
    }

}
