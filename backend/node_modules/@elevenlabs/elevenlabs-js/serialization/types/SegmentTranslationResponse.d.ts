import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SegmentTranslationResponse: core.serialization.ObjectSchema<serializers.SegmentTranslationResponse.Raw, ElevenLabs.SegmentTranslationResponse>;
export declare namespace SegmentTranslationResponse {
    interface Raw {
        version: number;
    }
}
