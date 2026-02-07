import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BanReasonType: core.serialization.Schema<serializers.BanReasonType.Raw, ElevenLabs.BanReasonType>;
export declare namespace BanReasonType {
    type Raw = "safety" | "manual";
}
