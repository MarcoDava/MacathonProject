import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LibraryVoiceResponseModelCategory: core.serialization.Schema<serializers.LibraryVoiceResponseModelCategory.Raw, ElevenLabs.LibraryVoiceResponseModelCategory>;
export declare namespace LibraryVoiceResponseModelCategory {
    type Raw = "generated" | "cloned" | "premade" | "professional" | "famous" | "high_quality";
}
