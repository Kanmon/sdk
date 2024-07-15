

# BusinessPrequalification


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**product** | [**ProductEnum**](#ProductEnum) | The product that the business is prequalified for. This will be null if &#x60;isPrequalified&#x60; is false. |  |
|**platformId** | **String** | The UUID representing your platform in Kanmon. |  |
|**businessId** | **String** | The UUID representing the business in Kanmon. |  |
|**platformBusinessId** | **String** | Your platform’s unique ID for the business. |  |
|**isPrequalified** | **Boolean** | Whether or not the business has been prequalified. |  |
|**prequalifiedAmountCents** | **BigDecimal** | Number describing the prequalification amount of the business in cents. |  |
|**createdAt** | **OffsetDateTime** | Creation UTC ISO 8601 timestamp of the prequalification. |  |
|**updatedAt** | **OffsetDateTime** | Last updated UTC ISO 8601 timestamp of the prequalification. |  |



## Enum: ProductEnum

| Name | Value |
|---- | -----|
| INVOICE_FINANCING | &quot;INVOICE_FINANCING&quot; |
| TERM_LOAN | &quot;TERM_LOAN&quot; |
| MCA | &quot;MCA&quot; |
| LINE_OF_CREDIT | &quot;LINE_OF_CREDIT&quot; |



