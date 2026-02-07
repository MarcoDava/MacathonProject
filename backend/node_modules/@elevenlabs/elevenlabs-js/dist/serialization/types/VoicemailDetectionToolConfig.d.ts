import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const VoicemailDetectionToolConfig: core.serialization.ObjectSchema<serializers.VoicemailDetectionToolConfig.Raw, ElevenLabs.VoicemailDetectionToolConfig>;
export declare namespace VoicemailDetectionToolConfig {
    interface Raw {
        voicemail_message?: string | null;
    }
}
