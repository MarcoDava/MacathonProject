import type * as ElevenLabs from "../index";
export interface DubbingTranscriptWord {
    text?: string;
    wordType?: string;
    startS?: number;
    endS?: number;
    characters?: ElevenLabs.DubbingTranscriptCharacter[];
}
