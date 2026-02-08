import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TimeRange: core.serialization.ObjectSchema<serializers.TimeRange.Raw, ElevenLabs.TimeRange>;
export declare namespace TimeRange {
    interface Raw {
        start_ms: number;
        end_ms: number;
    }
}
