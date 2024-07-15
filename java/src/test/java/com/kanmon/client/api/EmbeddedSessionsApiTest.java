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
import com.kanmon.client.model.BusinessNotFoundException;
import com.kanmon.client.model.CreateEmbeddedSession409Response;
import com.kanmon.client.model.CreateSessionTokenRequestBody;
import com.kanmon.client.model.EmbeddedSession;
import com.kanmon.client.model.ForbiddenException;
import com.kanmon.client.model.InternalServerErrorException;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for EmbeddedSessionsApi
 */
@Disabled
public class EmbeddedSessionsApiTest {

    private final EmbeddedSessionsApi api = new EmbeddedSessionsApi();

    /**
     * Create an embedded session
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createEmbeddedSessionTest() throws ApiException {
        CreateSessionTokenRequestBody createSessionTokenRequestBody = null;
        EmbeddedSession response = api.createEmbeddedSession(createSessionTokenRequestBody);
        // TODO: test validations
    }

}
