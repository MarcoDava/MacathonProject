import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const SpeechToSpeechConvertRequestFileFormat: core.serialization.Schema<serializers.SpeechToSpeechConvertRequestFileFormat.Raw, ElevenLabs.SpeechToSpeechConvertRequestFileFormat>;
export declare namespace SpeechToSpeechConvertRequestFileFormat {
    type Raw = "pcm_s16le_16" | "other";
}
