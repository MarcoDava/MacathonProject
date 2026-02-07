import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BatchCallStatus: core.serialization.Schema<serializers.BatchCallStatus.Raw, ElevenLabs.BatchCallStatus>;
export declare namespace BatchCallStatus {
    type Raw = "pending" | "in_progress" | "completed" | "failed" | "cancelled";
}
