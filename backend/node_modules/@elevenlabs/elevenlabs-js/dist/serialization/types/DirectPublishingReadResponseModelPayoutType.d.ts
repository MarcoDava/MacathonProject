import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DirectPublishingReadResponseModelPayoutType: core.serialization.Schema<serializers.DirectPublishingReadResponseModelPayoutType.Raw, ElevenLabs.DirectPublishingReadResponseModelPayoutType>;
export declare namespace DirectPublishingReadResponseModelPayoutType {
    type Raw = "none" | "engagement_based" | "fixed_payout";
}
