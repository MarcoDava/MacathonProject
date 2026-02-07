import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DubbingTranscriptWord } from "./DubbingTranscriptWord";
export declare const DubbingTranscriptUtterance: core.serialization.ObjectSchema<serializers.DubbingTranscriptUtterance.Raw, ElevenLabs.DubbingTranscriptUtterance>;
export declare namespace DubbingTranscriptUtterance {
    interface Raw {
        text?: string | null;
        speaker_id?: string | null;
        start_s?: number | null;
        end_s?: number | null;
        words?: DubbingTranscriptWord.Raw[] | null;
    }
}
