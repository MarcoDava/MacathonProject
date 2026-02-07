import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const AudioNativeCreateRequestApplyTextNormalization: core.serialization.Schema<serializers.AudioNativeCreateRequestApplyTextNormalization.Raw, ElevenLabs.AudioNativeCreateRequestApplyTextNormalization>;
export declare namespace AudioNativeCreateRequestApplyTextNormalization {
    type Raw = "auto" | "on" | "off" | "apply_english";
}
