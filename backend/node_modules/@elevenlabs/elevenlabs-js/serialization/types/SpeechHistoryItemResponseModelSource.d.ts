import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SpeechHistoryItemResponseModelSource: core.serialization.Schema<serializers.SpeechHistoryItemResponseModelSource.Raw, ElevenLabs.SpeechHistoryItemResponseModelSource>;
export declare namespace SpeechHistoryItemResponseModelSource {
    type Raw = "TTS" | "STS" | "Projects" | "PD" | "AN" | "Dubbing" | "PlayAPI" | "ConvAI" | "VoiceGeneration";
}
