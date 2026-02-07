import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SegmentUpdateResponse: core.serialization.ObjectSchema<serializers.SegmentUpdateResponse.Raw, ElevenLabs.SegmentUpdateResponse>;
export declare namespace SegmentUpdateResponse {
    interface Raw {
        version: number;
    }
}
