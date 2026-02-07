import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const SpeechToTextConvertRequestFileFormat: core.serialization.Schema<serializers.SpeechToTextConvertRequestFileFormat.Raw, ElevenLabs.SpeechToTextConvertRequestFileFormat>;
export declare namespace SpeechToTextConvertRequestFileFormat {
    type Raw = "pcm_s16le_16" | "other";
}
