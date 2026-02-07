import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const BodyTextToSpeechFullApplyTextNormalization: core.serialization.Schema<serializers.BodyTextToSpeechFullApplyTextNormalization.Raw, ElevenLabs.BodyTextToSpeechFullApplyTextNormalization>;
export declare namespace BodyTextToSpeechFullApplyTextNormalization {
    type Raw = "auto" | "on" | "off";
}
