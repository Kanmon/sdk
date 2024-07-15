

# CreateBusinessBankAccountRequestBody


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**platformBusinessId** | **String** | Your platform’s unique business ID for the business. Either &#x60;platformBusinessId&#x60; or &#x60;businessId&#x60; is required. |  [optional] |
|**businessId** | **String** | The UUID representing the user’s business in Kanmon. Either &#x60;platformBusinessId&#x60; or &#x60;businessId&#x60; is required. |  [optional] |
|**platformBankAccountId** | **String** | Your platform’s unique ID for the bank account. |  |
|**accountName** | **String** | The business defined bank account name. |  |
|**accountNumber** | **String** | The business’s bank account number. Only digits, no formatting. |  |
|**routingNumber** | **String** | The business’s bank routing number. Should be a 9 digits number, no formatting. |  |
|**accountType** | [**AccountTypeEnum**](#AccountTypeEnum) | The bank account’s type. Currently, we only support checking accounts. We may support others in the future. |  |
|**roles** | [**List&lt;RolesEnum&gt;**](#List&lt;RolesEnum&gt;) | The bank account’s roles. Currently, we only support creating disbursement bank account. We may support others in the future. |  |



## Enum: AccountTypeEnum

| Name | Value |
|---- | -----|
| CHECKING | &quot;CHECKING&quot; |



## Enum: List&lt;RolesEnum&gt;

| Name | Value |
|---- | -----|
| DISBURSEMENT | &quot;DISBURSEMENT&quot; |



