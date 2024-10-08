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
import com.kanmon.client.model.BankAccountAlreadyExistException;
import com.kanmon.client.model.BankAccountNotFoundException;
import java.math.BigDecimal;
import com.kanmon.client.model.BusinessBankAccount;
import com.kanmon.client.model.BusinessNotFoundException;
import com.kanmon.client.model.CreateBusinessBankAccountRequestBody;
import com.kanmon.client.model.ForbiddenException;
import com.kanmon.client.model.GetBusinessBankAccountsResponse;
import com.kanmon.client.model.InternalServerErrorException;
import com.kanmon.client.model.UpdateBusinessAccountRequestBody;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for BankAccountsApi
 */
@Disabled
public class BankAccountsApiTest {

    private final BankAccountsApi api = new BankAccountsApi();

    /**
     * Create a business bank account
     *
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.       Please contact Kanmon to enable access to bank account APIs.
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createBusinessBankAccountTest() throws ApiException {
        CreateBusinessBankAccountRequestBody createBusinessBankAccountRequestBody = null;
        BusinessBankAccount response = api.createBusinessBankAccount(createBusinessBankAccountRequestBody);
        // TODO: test validations
    }

    /**
     * Fetch business bank accounts
     *
     * Please contact Kanmon to enable access to bank account APIs.
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getAllBusinessBankAccountsTest() throws ApiException {
        String ids = null;
        String platformBankAccountIds = null;
        String platformBusinessIds = null;
        String businessIds = null;
        BigDecimal offset = null;
        BigDecimal limit = null;
        String createdAtStart = null;
        String createdAtEnd = null;
        GetBusinessBankAccountsResponse response = api.getAllBusinessBankAccounts(ids, platformBankAccountIds, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd);
        // TODO: test validations
    }

    /**
     * Fetch a business bank account
     *
     * Please contact Kanmon to enable access to bank account APIs.
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getBusinessBankAccountTest() throws ApiException {
        String id = null;
        String idType = null;
        BusinessBankAccount response = api.getBusinessBankAccount(id, idType);
        // TODO: test validations
    }

    /**
     * Update a business bank account
     *
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.         Please contact Kanmon to enable access to bank account APIs.
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateBusinessBankAccountTest() throws ApiException {
        String id = null;
        UpdateBusinessAccountRequestBody updateBusinessAccountRequestBody = null;
        String idType = null;
        BusinessBankAccount response = api.updateBusinessBankAccount(id, updateBusinessAccountRequestBody, idType);
        // TODO: test validations
    }

}
