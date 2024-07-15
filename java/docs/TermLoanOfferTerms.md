

# TermLoanOfferTerms


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**productType** | [**ProductTypeEnum**](#ProductTypeEnum) |  |  |
|**maxLoanAmountCents** | **BigDecimal** | The maximum loan amount - in cents. |  |
|**loanAmountCents** | **BigDecimal** | The loan amount - in cents. This defaults to &#x60;maxLoanAmountCents&#x60;. However, the business can select a smaller amount. |  |
|**interestRatePercentage** | **BigDecimal** | The rate of interest on the loan. E.g. a value of &#x60;10&#x60; means 10%. |  |
|**durationMonths** | **BigDecimal** | The duration of the loan - in months. |  |
|**feePercentage** | **BigDecimal** | The fee percentage on the loan. E.g. a value of &#x60;3&#x60; means 3%. |  |



## Enum: ProductTypeEnum

| Name | Value |
|---- | -----|
| TERM_LOAN | &quot;TERM_LOAN&quot; |



