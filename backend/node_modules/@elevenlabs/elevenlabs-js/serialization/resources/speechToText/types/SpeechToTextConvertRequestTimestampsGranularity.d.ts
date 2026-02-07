import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const SpeechToTextConvertRequestTimestampsGranularity: core.serialization.Schema<serializers.SpeechToTextConvertRequestTimestampsGranularity.Raw, ElevenLabs.SpeechToTextConvertRequestTimestampsGranularity>;
export declare namespace SpeechToTextConvertRequestTimestampsGranularity {
    type Raw = "none" | "word" | "character";
}
