import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DubbingTranscriptCharacter: core.serialization.ObjectSchema<serializers.DubbingTranscriptCharacter.Raw, ElevenLabs.DubbingTranscriptCharacter>;
export declare namespace DubbingTranscriptCharacter {
    interface Raw {
        text?: string | null;
        start_s?: number | null;
        end_s?: number | null;
    }
}
