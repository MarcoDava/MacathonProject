import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SegmentDeleteResponse: core.serialization.ObjectSchema<serializers.SegmentDeleteResponse.Raw, ElevenLabs.SegmentDeleteResponse>;
export declare namespace SegmentDeleteResponse {
    interface Raw {
        version: number;
    }
}
