

# DrawRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Kanmon’s unique ID for the draw request. |  |
|**issuedProductId** | **String** | The UUID representing the issued product in Kanmon. |  |
|**amountCents** | **BigDecimal** | The total draw request amount - in cents. |  |
|**disbursementAmountCents** | **BigDecimal** | The total draw request amount, less the fees - in cents. This is the amount disbursed to the business if the draw request is approved. |  |
|**feeAmountCents** | **BigDecimal** | The fee amount - in cents. |  |
|**status** | **DrawRequestState** |  |  |
|**interestRatePercentage** | **BigDecimal** | The interest rate for the draw request. E.g. a value of &#x60;10&#x60; means 10%. |  |
|**feePercentage** | **BigDecimal** | The fee percentage charged as the borrowing cost of the draw request. E.g. a value of &#x60;2&#x60; means a 2% fee. |  |
|**repaymentDurationMonths** | **BigDecimal** | The duration of the repayment for the draw request - in months. |  |
|**createdAt** | **String** | Creation UTC ISO 8601 timestamp of the draw request. |  |
|**updatedAt** | **String** | Last updated UTC ISO 8601 timestamp of the draw request. |  |



