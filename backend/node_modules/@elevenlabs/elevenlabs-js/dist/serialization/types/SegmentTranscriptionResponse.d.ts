import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SegmentTranscriptionResponse: core.serialization.ObjectSchema<serializers.SegmentTranscriptionResponse.Raw, ElevenLabs.SegmentTranscriptionResponse>;
export declare namespace SegmentTranscriptionResponse {
    interface Raw {
        version: number;
    }
}
