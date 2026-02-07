import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const SpeechToSpeechStreamRequestFileFormat: core.serialization.Schema<serializers.SpeechToSpeechStreamRequestFileFormat.Raw, ElevenLabs.SpeechToSpeechStreamRequestFileFormat>;
export declare namespace SpeechToSpeechStreamRequestFileFormat {
    type Raw = "pcm_s16le_16" | "other";
}
