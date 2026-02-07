import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SegmentMigrationResponse: core.serialization.ObjectSchema<serializers.SegmentMigrationResponse.Raw, ElevenLabs.SegmentMigrationResponse>;
export declare namespace SegmentMigrationResponse {
    interface Raw {
        version: number;
    }
}
