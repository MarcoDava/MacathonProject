export declare const BillingPeriod: {
    readonly MonthlyPeriod: "monthly_period";
    readonly ThreeMonthPeriod: "3_month_period";
    readonly SixMonthPeriod: "6_month_period";
    readonly AnnualPeriod: "annual_period";
};
export type BillingPeriod = (typeof BillingPeriod)[keyof typeof BillingPeriod];
