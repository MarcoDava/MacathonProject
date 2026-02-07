import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const VoiceSettings: core.serialization.ObjectSchema<serializers.VoiceSettings.Raw, ElevenLabs.VoiceSettings>;
export declare namespace VoiceSettings {
    interface Raw {
        stability?: number | null;
        use_speaker_boost?: boolean | null;
        similarity_boost?: number | null;
        style?: number | null;
        speed?: number | null;
    }
}
