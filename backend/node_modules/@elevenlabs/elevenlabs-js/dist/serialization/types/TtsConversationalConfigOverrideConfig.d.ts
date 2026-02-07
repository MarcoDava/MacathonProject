import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TtsConversationalConfigOverrideConfig: core.serialization.ObjectSchema<serializers.TtsConversationalConfigOverrideConfig.Raw, ElevenLabs.TtsConversationalConfigOverrideConfig>;
export declare namespace TtsConversationalConfigOverrideConfig {
    interface Raw {
        voice_id?: boolean | null;
        stability?: boolean | null;
        speed?: boolean | null;
        similarity_boost?: boolean | null;
    }
}
