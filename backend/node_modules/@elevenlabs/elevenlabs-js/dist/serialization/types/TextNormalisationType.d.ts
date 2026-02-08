import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TextNormalisationType: core.serialization.Schema<serializers.TextNormalisationType.Raw, ElevenLabs.TextNormalisationType>;
export declare namespace TextNormalisationType {
    type Raw = "system_prompt" | "elevenlabs";
}
