import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const MetricType: core.serialization.Schema<serializers.MetricType.Raw, ElevenLabs.MetricType>;
export declare namespace MetricType {
    type Raw = "credits" | "tts_characters" | "minutes_used" | "request_count" | "ttfb_avg" | "ttfb_p95" | "fiat_units_spent" | "concurrency" | "concurrency_average";
}
