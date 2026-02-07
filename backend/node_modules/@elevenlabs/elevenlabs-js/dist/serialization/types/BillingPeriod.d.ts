import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BillingPeriod: core.serialization.Schema<serializers.BillingPeriod.Raw, ElevenLabs.BillingPeriod>;
export declare namespace BillingPeriod {
    type Raw = "monthly_period" | "3_month_period" | "6_month_period" | "annual_period";
}
