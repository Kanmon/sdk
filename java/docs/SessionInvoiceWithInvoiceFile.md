

# SessionInvoiceWithInvoiceFile


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**platformInvoiceId** | **String** | Your platform’s unique ID for the invoice. |  |
|**documentId** | **String** | The UUID of the invoice document created in Kanmon. |  |
|**platformInvoiceNumber** | **String** | Your user-facing identifier for the invoice. This does not need to be unique. This may or may not be the same as your &#x60;platformInvoiceId&#x60;. |  [optional] |
|**invoiceAmountCents** | **BigDecimal** | The invoice amount - in cents. This needs to be greater than or equal to 100. |  [optional] |
|**invoiceDueDate** | **String** | The date when the invoice will be paid by the payor. ISO 8601 date format. This date must be at least 7 days in the future and must be after the &#x60;invoiceIssuedDate&#x60;. |  [optional] |
|**invoiceIssuedDate** | **String** | The date when the payee issued the invoice. ISO 8601 date format. |  [optional] |
|**payorEmail** | **String** | The email of the payor. |  [optional] |
|**payorAddress** | [**Address**](Address.md) | The address of the payor. |  [optional] |
|**payorType** | [**PayorTypeEnum**](#PayorTypeEnum) | &#x60;INDIVIDUAL&#x60; if the payor is a person and &#x60;BUSINESS&#x60; if the payor is a company. |  [optional] |
|**payorBusinessName** | **String** | The registered name of the payor business when the payor is a business and not an individual. |  [optional] |
|**payorFirstName** | **String** | The first name of the payor when the payor is an individual and not a business. |  [optional] |
|**payorMiddleName** | **String** | The middle name of the payor when the payor is an individual and not a business. |  [optional] |
|**payorLastName** | **String** | The last name of the payor when the payor is an individual and not a business. |  [optional] |
|**description** | **String** | The description of the goods or services in the invoice. |  [optional] |



## Enum: PayorTypeEnum

| Name | Value |
|---- | -----|
| BUSINESS | &quot;BUSINESS&quot; |
| INDIVIDUAL | &quot;INDIVIDUAL&quot; |



