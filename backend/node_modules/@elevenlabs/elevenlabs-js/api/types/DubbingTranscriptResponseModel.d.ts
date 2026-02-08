import type * as ElevenLabs from "../index";
export interface DubbingTranscriptResponseModel {
    language: string;
    utterances: ElevenLabs.DubbingTranscriptUtterance[];
}
