import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SpeechHistoryItemResponseModelVoiceCategory: core.serialization.Schema<serializers.SpeechHistoryItemResponseModelVoiceCategory.Raw, ElevenLabs.SpeechHistoryItemResponseModelVoiceCategory>;
export declare namespace SpeechHistoryItemResponseModelVoiceCategory {
    type Raw = "premade" | "cloned" | "generated" | "professional";
}
