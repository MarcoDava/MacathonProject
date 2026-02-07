import type * as ElevenLabs from "../index";
export interface DubbingTranscriptUtterance {
    text?: string;
    speakerId?: string;
    startS?: number;
    endS?: number;
    words?: ElevenLabs.DubbingTranscriptWord[];
}
