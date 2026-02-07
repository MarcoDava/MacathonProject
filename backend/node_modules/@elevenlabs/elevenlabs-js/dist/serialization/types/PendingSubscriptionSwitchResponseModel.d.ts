import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BillingPeriod } from "./BillingPeriod";
import { PendingSubscriptionSwitchResponseModelNextTier } from "./PendingSubscriptionSwitchResponseModelNextTier";
export declare const PendingSubscriptionSwitchResponseModel: core.serialization.ObjectSchema<serializers.PendingSubscriptionSwitchResponseModel.Raw, ElevenLabs.PendingSubscriptionSwitchResponseModel>;
export declare namespace PendingSubscriptionSwitchResponseModel {
    interface Raw {
        kind?: "change" | null;
        next_tier: PendingSubscriptionSwitchResponseModelNextTier.Raw;
        next_billing_period: BillingPeriod.Raw;
        timestamp_seconds: number;
    }
}
