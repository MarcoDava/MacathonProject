import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
export declare const TranscriptsGetRequestFormatType: core.serialization.Schema<serializers.dubbing.TranscriptsGetRequestFormatType.Raw, ElevenLabs.dubbing.TranscriptsGetRequestFormatType>;
export declare namespace TranscriptsGetRequestFormatType {
    type Raw = "srt" | "webvtt" | "json";
}
