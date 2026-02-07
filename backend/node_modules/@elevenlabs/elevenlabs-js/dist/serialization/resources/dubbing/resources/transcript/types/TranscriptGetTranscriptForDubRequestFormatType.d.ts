import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
export declare const TranscriptGetTranscriptForDubRequestFormatType: core.serialization.Schema<serializers.dubbing.TranscriptGetTranscriptForDubRequestFormatType.Raw, ElevenLabs.dubbing.TranscriptGetTranscriptForDubRequestFormatType>;
export declare namespace TranscriptGetTranscriptForDubRequestFormatType {
    type Raw = "srt" | "webvtt" | "json";
}
