import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const MetricRecord: core.serialization.ObjectSchema<serializers.MetricRecord.Raw, ElevenLabs.MetricRecord>;
export declare namespace MetricRecord {
    interface Raw {
        elapsed_time: number;
    }
}
