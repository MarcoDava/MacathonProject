import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DubbingTranscriptUtterance } from "./DubbingTranscriptUtterance";
export declare const DubbingTranscript: core.serialization.ObjectSchema<serializers.DubbingTranscript.Raw, ElevenLabs.DubbingTranscript>;
export declare namespace DubbingTranscript {
    interface Raw {
        language: string;
        utterances: DubbingTranscriptUtterance.Raw[];
    }
}
