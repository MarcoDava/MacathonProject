import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
export declare const SegmentUpdatePayload: core.serialization.Schema<serializers.dubbing.resource.SegmentUpdatePayload.Raw, ElevenLabs.dubbing.resource.SegmentUpdatePayload>;
export declare namespace SegmentUpdatePayload {
    interface Raw {
        start_time?: number | null;
        end_time?: number | null;
        text?: string | null;
    }
}
