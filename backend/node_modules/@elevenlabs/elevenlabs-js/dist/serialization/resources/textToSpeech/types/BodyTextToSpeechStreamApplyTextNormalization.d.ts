import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const BodyTextToSpeechStreamApplyTextNormalization: core.serialization.Schema<serializers.BodyTextToSpeechStreamApplyTextNormalization.Raw, ElevenLabs.BodyTextToSpeechStreamApplyTextNormalization>;
export declare namespace BodyTextToSpeechStreamApplyTextNormalization {
    type Raw = "auto" | "on" | "off";
}
