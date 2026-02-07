import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ToolUsageStatsResponseModel: core.serialization.ObjectSchema<serializers.ToolUsageStatsResponseModel.Raw, ElevenLabs.ToolUsageStatsResponseModel>;
export declare namespace ToolUsageStatsResponseModel {
    interface Raw {
        total_calls?: number | null;
        avg_latency_secs: number;
    }
}
