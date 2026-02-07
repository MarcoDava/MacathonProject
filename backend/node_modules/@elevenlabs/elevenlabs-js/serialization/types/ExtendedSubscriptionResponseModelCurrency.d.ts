import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ExtendedSubscriptionResponseModelCurrency: core.serialization.Schema<serializers.ExtendedSubscriptionResponseModelCurrency.Raw, ElevenLabs.ExtendedSubscriptionResponseModelCurrency>;
export declare namespace ExtendedSubscriptionResponseModelCurrency {
    type Raw = "usd" | "eur" | "inr";
}
