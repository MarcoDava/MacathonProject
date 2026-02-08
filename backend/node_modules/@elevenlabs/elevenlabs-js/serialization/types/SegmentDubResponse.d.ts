import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SegmentDubResponse: core.serialization.ObjectSchema<serializers.SegmentDubResponse.Raw, ElevenLabs.SegmentDubResponse>;
export declare namespace SegmentDubResponse {
    interface Raw {
        version: number;
    }
}
