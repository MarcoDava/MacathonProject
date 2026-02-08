import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const VoiceResponseModelCategory: core.serialization.Schema<serializers.VoiceResponseModelCategory.Raw, ElevenLabs.VoiceResponseModelCategory>;
export declare namespace VoiceResponseModelCategory {
    type Raw = "generated" | "cloned" | "premade" | "professional" | "famous" | "high_quality";
}
