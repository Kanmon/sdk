

# UpdateUserRequestBody


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**firstName** | **String** | The user’s first name. |  [optional] |
|**lastName** | **String** | The user’s last name. |  [optional] |
|**address** | [**Address**](Address.md) | The user’s address. |  [optional] |
|**email** | **String** | The user’s email. |  [optional] |
|**roles** | [**List&lt;RolesEnum&gt;**](#List&lt;RolesEnum&gt;) | The user’s roles. If no roles are defined, the user will be prompted to select a role within Kanmon. &lt;br/&gt;&lt;br/&gt;A primary owner is a user with the authority to issue debt on behalf of the business. &lt;br/&gt;This means the user can complete onboarding, receive offers, choose to accept offers, &lt;br/&gt;sign financing agreements, and service an active issued product. &lt;br/&gt;&lt;br/&gt;An operator is a user with permission to service an active issued product. Examples are uploading invoices on &lt;br/&gt;behalf of the business, checking the status of payments, etc. &lt;br /&gt;&lt;br/&gt;Please note Kanmon supports an additional user role called secondary owners. &lt;br/&gt;Secondary owners are beneficial owners of a business, like primary owners, and Kanmon &lt;br/&gt;must perform KYC checks for these users. Kanmon will handle creating and managing &lt;br/&gt;these users for KYC purposes through a separate process. &lt;br/&gt; |  [optional] |
|**metadata** | **Object** | Metadata from your system that you want to associate the user with. |  [optional] |



## Enum: List&lt;RolesEnum&gt;

| Name | Value |
|---- | -----|
| OPERATOR | &quot;OPERATOR&quot; |
| PRIMARY_OWNER | &quot;PRIMARY_OWNER&quot; |



