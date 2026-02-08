import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DubbingTranscriptsResponseModelTranscriptFormat: core.serialization.Schema<serializers.DubbingTranscriptsResponseModelTranscriptFormat.Raw, ElevenLabs.DubbingTranscriptsResponseModelTranscriptFormat>;
export declare namespace DubbingTranscriptsResponseModelTranscriptFormat {
    type Raw = "srt" | "webvtt" | "json";
}
