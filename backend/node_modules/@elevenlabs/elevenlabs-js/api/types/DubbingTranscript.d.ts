import type * as ElevenLabs from "../index";
export interface DubbingTranscript {
    language: string;
    utterances: ElevenLabs.DubbingTranscriptUtterance[];
}
