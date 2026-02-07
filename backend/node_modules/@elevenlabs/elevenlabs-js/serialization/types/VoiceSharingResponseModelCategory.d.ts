import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const VoiceSharingResponseModelCategory: core.serialization.Schema<serializers.VoiceSharingResponseModelCategory.Raw, ElevenLabs.VoiceSharingResponseModelCategory>;
export declare namespace VoiceSharingResponseModelCategory {
    type Raw = "generated" | "cloned" | "premade" | "professional" | "famous" | "high_quality";
}
