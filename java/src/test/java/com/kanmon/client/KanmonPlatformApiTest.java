package com.kanmon.client;

import com.kanmon.client.model.Business;
import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;
import org.junit.jupiter.api.Test;

import java.util.logging.Logger;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class KanmonPlatformApiTest {
	private static final Logger LOGGER = Logger.getLogger(KanmonPlatformApiTest.class.getName());

	@Test
	void contextLoads() throws ApiException, ConfigurationException {
		PropertiesConfiguration config = new PropertiesConfiguration();
		config.load("application.test.properties");
		KanmonPlatformApi kanmonPlatformApi = new KanmonPlatformApi(config.getString("apiToken"), KanmonPlatformApi.Environment.SANDBOX);
		String businessId = config.getString("businessId");
		Business business = kanmonPlatformApi.getBusinessesApi().getBusiness(businessId, "KANMON");
		LOGGER.info("Fetched business:" + business.toJson());
		assertEquals(businessId, business.getId());
	}

}