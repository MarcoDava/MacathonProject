import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WordTimestamp: core.serialization.ObjectSchema<serializers.WordTimestamp.Raw, ElevenLabs.WordTimestamp>;
export declare namespace WordTimestamp {
    interface Raw {
        word: string;
        start_ms: number;
        end_ms: number;
    }
}
