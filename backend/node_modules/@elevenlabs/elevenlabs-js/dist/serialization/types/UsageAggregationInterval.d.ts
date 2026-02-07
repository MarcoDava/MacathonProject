import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UsageAggregationInterval: core.serialization.Schema<serializers.UsageAggregationInterval.Raw, ElevenLabs.UsageAggregationInterval>;
export declare namespace UsageAggregationInterval {
    type Raw = "hour" | "day" | "week" | "month" | "cumulative";
}
