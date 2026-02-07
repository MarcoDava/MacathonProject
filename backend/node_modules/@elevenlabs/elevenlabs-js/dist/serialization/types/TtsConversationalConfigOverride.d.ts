import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TtsConversationalConfigOverride: core.serialization.ObjectSchema<serializers.TtsConversationalConfigOverride.Raw, ElevenLabs.TtsConversationalConfigOverride>;
export declare namespace TtsConversationalConfigOverride {
    interface Raw {
        voice_id?: string | null;
        stability?: number | null;
        speed?: number | null;
        similarity_boost?: number | null;
    }
}
