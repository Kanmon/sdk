

# IssuedProduct


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The UUID representing the issued product in Kanmon. |  |
|**offerId** | **String** | The UUID representing the offer tied to this issued product in Kanmon. |  |
|**businessId** | **String** | The UUID representing the business in Kanmon. |  |
|**platformBusinessId** | **String** | Your platform’s unique ID for the business. |  |
|**loanStatus** | [**LoanStatusEnum**](#LoanStatusEnum) | The current status of the loan. |  |
|**servicingData** | [**IssuedProductServicingData**](IssuedProductServicingData.md) |  |  |
|**createdAt** | **OffsetDateTime** | Creation UTC ISO 8601 timestamp of the prequalification. |  |
|**updatedAt** | **OffsetDateTime** | Last updated UTC ISO 8601 timestamp of the prequalification. |  |



## Enum: LoanStatusEnum

| Name | Value |
|---- | -----|
| CURRENT | &quot;CURRENT&quot; |
| LATE | &quot;LATE&quot; |
| FULLY_PAID | &quot;FULLY_PAID&quot; |
| REFINANCED | &quot;REFINANCED&quot; |
| DEFAULTED | &quot;DEFAULTED&quot; |



