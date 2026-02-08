import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SubscriptionStatusType: core.serialization.Schema<serializers.SubscriptionStatusType.Raw, ElevenLabs.SubscriptionStatusType>;
export declare namespace SubscriptionStatusType {
    type Raw = "trialing" | "active" | "incomplete" | "past_due" | "free" | "free_disabled";
}
