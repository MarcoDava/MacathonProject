import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SoftTimeoutConfigWorkflowOverride: core.serialization.ObjectSchema<serializers.SoftTimeoutConfigWorkflowOverride.Raw, ElevenLabs.SoftTimeoutConfigWorkflowOverride>;
export declare namespace SoftTimeoutConfigWorkflowOverride {
    interface Raw {
        timeout_seconds?: number | null;
        message?: string | null;
        use_llm_generated_message?: boolean | null;
    }
}
