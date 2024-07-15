

# Invoice


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Kanmon’s unique ID for the invoice. |  |
|**platformInvoiceId** | **String** | Your platform’s unique ID for the invoice. |  |
|**platformInvoiceNumber** | **String** | Your user-facing identifier for the invoice. This does not need to be unique. This may or may not be the same as your &#x60;platformInvoiceId&#x60;. |  |
|**invoiceAmountCents** | **BigDecimal** | The invoice amount - in cents. |  |
|**invoiceDueDate** | **String** | The date when the invoice will be paid by the payor. ISO 8601 date format. |  |
|**invoiceIssuedDate** | **String** | The date when the payee issued the invoice. ISO 8601 date format. |  |
|**payorEmail** | **String** | The email of the payor. |  |
|**payorAddress** | [**InvoicePayorAddress**](InvoicePayorAddress.md) |  |  |
|**payorType** | [**PayorTypeEnum**](#PayorTypeEnum) | &#x60;INDIVIDUAL&#x60; if the payor is a person and &#x60;BUSINESS&#x60; if the payor is a company. |  |
|**payorBusinessName** | **String** | The registered name of the payor business when the payor is a business and not an individual. |  |
|**payorFirstName** | **String** | The first name of the payor when the payor is an individual and not a business. |  |
|**payorMiddleName** | **String** | The middle name of the payor when the payor is an individual and not a business. |  |
|**payorLastName** | **String** | The last name of the payor when the payor is an individual and not a business. |  |
|**status** | **InvoiceStatus** |  |  |
|**issuedProductId** | **String** | The unique identifier for the issued product in Kanmon′s system. |  |
|**feeAmountCents** | **BigDecimal** | The total fee amount - in cents. |  |
|**principalAmountCents** | **BigDecimal** | The total principal amount - in cents. |  |
|**invoiceAdvanceAmountCents** | **BigDecimal** | The amount after fees the business will receive - in cents. |  |
|**repaymentAmountCents** | **BigDecimal** | The total amount that the business will repay - in cents. |  |
|**repaymentSchedule** | [**InvoiceRepaymentSchedule**](InvoiceRepaymentSchedule.md) | The invoice repayment schedule. |  |
|**advanceRatePercentage** | **BigDecimal** | The percentage of the invoice that is allowed for advances. E.g. a value of &#x60;80&#x60; would mean that $800 would be advanced on a $1,000 invoice. |  |
|**transactionFeePercentage** | **BigDecimal** | The percentage of the transaction that is charged as a fee. E.g. a value of &#x60;5&#x60; means 5%. |  |
|**amountRequestedForFinancingCents** | **BigDecimal** | The portion of the invoice amount that the business requests to be financed - in cents. |  |
|**createdAt** | **String** | Creation UTC ISO 8601 timestamp of the invoice. |  |
|**updatedAt** | **String** | Last updated UTC ISO 8601 timestamp of the invoice. |  |



## Enum: PayorTypeEnum

| Name | Value |
|---- | -----|
| BUSINESS | &quot;BUSINESS&quot; |
| INDIVIDUAL | &quot;INDIVIDUAL&quot; |



