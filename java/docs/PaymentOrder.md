

# PaymentOrder


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The UUID representing the payment order in Kanmon. |  |
|**issuedProductId** | **String** | The UUID representing the issued product in Kanmon. |  |
|**drawRequestId** | **String** | The UUID representing the draw request in Kanmon. (only present for Line of Credit). |  |
|**invoiceId** | **String** | The UUID representing the invoice in Kanmon. (only present for Invoice Financing). |  |
|**platformInvoiceId** | **String** | Your platform’s unique ID for the invoice. (only present for Invoice Financing). |  |
|**effectiveDate** | **String** | The effective UTC ISO 8601 date that the payment will process. |  |
|**settledDate** | **String** | The UTC ISO 8601 date that the payment was settled. |  |
|**totalPaymentAmountCents** | **BigDecimal** | The total payment amount - in cents. |  |
|**principalPaymentAmountCents** | **BigDecimal** | The principal payment amount - in cents. (null for disbursements). |  |
|**interestPaymentAmountCents** | **BigDecimal** | The interest payment amount - in cents. (null for disbursements). |  |
|**feePaymentAmountCents** | **BigDecimal** | The fee payment amount - in cents. (null for disbursements). |  |
|**feeType** | [**FeeTypeEnum**](#FeeTypeEnum) | The type of the fee that was charged. (only present when &#x60;feePaymentAmountCents&#x60; is not 0 or null). |  |
|**direction** | [**DirectionEnum**](#DirectionEnum) | The direction of the payment. |  |
|**status** | **PaymentOrderStatus** |  |  |
|**createdAt** | **OffsetDateTime** | Creation UTC ISO 8601 timestamp of the payment order. |  |
|**updatedAt** | **OffsetDateTime** | Last updated UTC ISO 8601 timestamp of the payment order. |  |



## Enum: FeeTypeEnum

| Name | Value |
|---- | -----|
| LATE_PAYMENT | &quot;LATE_PAYMENT&quot; |
| INSUFFICIENT_FUNDS | &quot;INSUFFICIENT_FUNDS&quot; |
| TRANSACTION_FEE | &quot;TRANSACTION_FEE&quot; |
| MAINTENANCE | &quot;MAINTENANCE&quot; |



## Enum: DirectionEnum

| Name | Value |
|---- | -----|
| DISBURSEMENT | &quot;DISBURSEMENT&quot; |
| REPAYMENT | &quot;REPAYMENT&quot; |



