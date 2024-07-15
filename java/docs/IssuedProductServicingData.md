

# IssuedProductServicingData

The data needed to service this specific type of issued product

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
|**totalLimitCents** | **BigDecimal** | The total credit limit - in cents. |  |
|**pricingPlans** | [**List&lt;InvoicePaymentPlan&gt;**](InvoicePaymentPlan.md) | The pricing plans available for this issued product. |  |
|**availableLimitCents** | **BigDecimal** | The total limit less the amount of balance outstanding - in cents. |  |
|**advanceAmountCents** | **BigDecimal** | The loan amount - in cents. |  |
|**repaymentPercentage** | **BigDecimal** | The repayment percentage for calculating repayment amounts. E.g. a value of a &#x60;20&#x60; means 20%. If a business has $100 of income over a repayment period, the repayment amount would be $20. |  |
|**feeFactor** | **BigDecimal** | The fee percentage charged as the borrowing cost of the loan. E.g. a value of &#x60;1.3&#x60; means a 30% fee. |  |
|**totalRepaymentCents** | **BigDecimal** | The total repayment amount in cents required to settle and close the debt. E.g. for a $10,000 loan with a fee factor of 1.3, the repayment amount equates to $13,000. |  |
|**repaymentFrequency** | [**RepaymentFrequencyEnum**](#RepaymentFrequencyEnum) | The repayment frequency of the loan. E.g. biweekly repayment occurs every 14 days, weekly repayment occurs every 7 days, etc. |  |
|**advanceBalanceCents** | **BigDecimal** | The total repayment amount less the amount repaid - in cents. |  |
|**interestRatePercentage** | **BigDecimal** | The rate of interest on the loan. E.g. a value of &#x60;10&#x60; means 10%. |  |
|**feePercentage** | **BigDecimal** | The fee percentage charged as the borrowing cost of the loan. E.g. a value of &#x60;2&#x60; means a 2% fee. |  |
|**repaymentDurationMonths** | **BigDecimal** | The duration of the repayment for each draw - in months. |  |



## Enum: ProductTypeEnum

| Name | Value |
|---- | -----|
| LINE_OF_CREDIT | &quot;LINE_OF_CREDIT&quot; |



## Enum: RepaymentFrequencyEnum

| Name | Value |
|---- | -----|
| DAILY | &quot;DAILY&quot; |
| WEEKLY | &quot;WEEKLY&quot; |
| BIWEEKLY | &quot;BIWEEKLY&quot; |
| MONTHLY | &quot;MONTHLY&quot; |



