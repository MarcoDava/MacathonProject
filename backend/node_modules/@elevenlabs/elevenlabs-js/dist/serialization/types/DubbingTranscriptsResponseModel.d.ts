import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DubbingTranscript } from "./DubbingTranscript";
import { DubbingTranscriptsResponseModelTranscriptFormat } from "./DubbingTranscriptsResponseModelTranscriptFormat";
export declare const DubbingTranscriptsResponseModel: core.serialization.ObjectSchema<serializers.DubbingTranscriptsResponseModel.Raw, ElevenLabs.DubbingTranscriptsResponseModel>;
export declare namespace DubbingTranscriptsResponseModel {
    interface Raw {
        transcript_format: DubbingTranscriptsResponseModelTranscriptFormat.Raw;
        srt?: string | null;
        webvtt?: string | null;
        json?: DubbingTranscript.Raw | null;
    }
}
