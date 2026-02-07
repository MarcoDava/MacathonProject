import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const NonStreamingOutputFormats: core.serialization.Schema<serializers.NonStreamingOutputFormats.Raw, ElevenLabs.NonStreamingOutputFormats>;
export declare namespace NonStreamingOutputFormats {
    type Raw = "wav_8000" | "wav_16000" | "wav_22050" | "wav_24000" | "wav_32000" | "wav_44100" | "wav_48000";
}
