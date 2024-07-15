

# InvoiceFinancingServicingData


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**productType** | [**ProductTypeEnum**](#ProductTypeEnum) |  |  |
|**totalLimitCents** | **BigDecimal** | The total limit allowed - in cents. |  |
|**pricingPlans** | [**List&lt;InvoicePaymentPlan&gt;**](InvoicePaymentPlan.md) | The pricing plans available for this issued product. |  |
|**availableLimitCents** | **BigDecimal** | The total limit less the amount of balance outstanding - in cents. |  |



## Enum: ProductTypeEnum

| Name | Value |
|---- | -----|
| INVOICE_FINANCING | &quot;INVOICE_FINANCING&quot; |



