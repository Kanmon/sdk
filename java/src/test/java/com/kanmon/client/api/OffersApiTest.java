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
import com.kanmon.client.model.ForbiddenException;
import com.kanmon.client.model.GetOffersResponse;
import com.kanmon.client.model.InternalServerErrorException;
import com.kanmon.client.model.Offer;
import com.kanmon.client.model.OfferNotFoundException;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for OffersApi
 */
@Disabled
public class OffersApiTest {

    private final OffersApi api = new OffersApi();

    /**
     * Fetch offers
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getAllOffersTest() throws ApiException {
        String ids = null;
        String platformBusinessIds = null;
        String businessIds = null;
        BigDecimal offset = null;
        BigDecimal limit = null;
        String createdAtStart = null;
        String createdAtEnd = null;
        GetOffersResponse response = api.getAllOffers(ids, platformBusinessIds, businessIds, offset, limit, createdAtStart, createdAtEnd);
        // TODO: test validations
    }

    /**
     * Fetch an offer
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getOfferByIdTest() throws ApiException {
        String id = null;
        Offer response = api.getOfferById(id);
        // TODO: test validations
    }

}