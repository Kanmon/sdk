

# TermLoanServicingData


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**productType** | [**ProductTypeEnum**](#ProductTypeEnum) |  |  |
|**loanAmountCents** | **BigDecimal** | The total loan amount - in cents. |  |
|**originationFeeCents** | **BigDecimal** | The total origination fee amount - in cents. |  |
|**principalBalanceCents** | **BigDecimal** | The principal remaining on the loan - in cents. |  |
|**monthlyPaymentCents** | **BigDecimal** | The monthly payment amount - in cents. |  |
|**interestRate** | **BigDecimal** | The interest rate of the loan. E.g. a value of &#x60;10&#x60; means 10%. |  |
|**nextPaymentDate** | **String** | The next scheduled payment date - ISO 8601 date format. |  |



## Enum: ProductTypeEnum

| Name | Value |
|---- | -----|
| TERM_LOAN | &quot;TERM_LOAN&quot; |



