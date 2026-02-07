import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AudioNativeProjectSettingsResponseModelStatus: core.serialization.Schema<serializers.AudioNativeProjectSettingsResponseModelStatus.Raw, ElevenLabs.AudioNativeProjectSettingsResponseModelStatus>;
export declare namespace AudioNativeProjectSettingsResponseModelStatus {
    type Raw = "processing" | "ready";
}
