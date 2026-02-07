import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const FineTuningResponseModelStateValue: core.serialization.Schema<serializers.FineTuningResponseModelStateValue.Raw, ElevenLabs.FineTuningResponseModelStateValue>;
export declare namespace FineTuningResponseModelStateValue {
    type Raw = "not_started" | "queued" | "fine_tuning" | "fine_tuned" | "failed" | "delayed";
}
