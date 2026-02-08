import type * as ElevenLabs from "../index";
export interface DubbingTranscriptsResponseModel {
    transcriptFormat: ElevenLabs.DubbingTranscriptsResponseModelTranscriptFormat;
    srt?: string;
    webvtt?: string;
    json?: ElevenLabs.DubbingTranscript;
}
