import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SegmentCreateResponse: core.serialization.ObjectSchema<serializers.SegmentCreateResponse.Raw, ElevenLabs.SegmentCreateResponse>;
export declare namespace SegmentCreateResponse {
    interface Raw {
        version: number;
        new_segment: string;
    }
}
