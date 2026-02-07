import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SimilarVoiceCategory: core.serialization.Schema<serializers.SimilarVoiceCategory.Raw, ElevenLabs.SimilarVoiceCategory>;
export declare namespace SimilarVoiceCategory {
    type Raw = "premade" | "cloned" | "generated" | "professional" | "famous";
}
