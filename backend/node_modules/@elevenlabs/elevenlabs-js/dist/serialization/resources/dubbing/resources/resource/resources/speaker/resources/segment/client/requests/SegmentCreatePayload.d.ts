import type * as ElevenLabs from "../../../../../../../../../../../api/index";
import * as core from "../../../../../../../../../../../core";
import type * as serializers from "../../../../../../../../../../index";
export declare const SegmentCreatePayload: core.serialization.Schema<serializers.dubbing.resource.speaker.SegmentCreatePayload.Raw, ElevenLabs.dubbing.resource.speaker.SegmentCreatePayload>;
export declare namespace SegmentCreatePayload {
    interface Raw {
        start_time: number;
        end_time: number;
        text?: string | null;
        translations?: Record<string, string | null | undefined> | null;
    }
}
