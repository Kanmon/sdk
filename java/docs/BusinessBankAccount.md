

# BusinessBankAccount


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The UUID representing the business bank account in Kanmon. |  |
|**platformBankAccountId** | **String** | Your platform’s unique ID for the bank account. |  |
|**accountName** | **Object** | The business bank account’s name. |  |
|**accountNumber** | **String** | The business’s bank account number. Only digits, no formatting. |  |
|**routingNumber** | **String** | The business’s bank routing number. Only digits, no formatting. |  |
|**accountType** | [**AccountTypeEnum**](#AccountTypeEnum) | The bank account’s type. Currently, we only support checking accounts. We may support others in the future. |  |
|**roles** | [**List&lt;RolesEnum&gt;**](#List&lt;RolesEnum&gt;) | The bank account’s roles. Currently, we only support disbursement bank role. |  |
|**createdAt** | **String** | Creation UTC ISO 8601 timestamp of the business. |  |
|**updatedAt** | **String** | Last updated UTC ISO 8601 timestamp of the business. |  |



## Enum: AccountTypeEnum

| Name | Value |
|---- | -----|
| CHECKING | &quot;CHECKING&quot; |



## Enum: List&lt;RolesEnum&gt;

| Name | Value |
|---- | -----|
| DISBURSEMENT | &quot;DISBURSEMENT&quot; |



