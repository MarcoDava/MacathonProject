import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SoftTimeoutConfig: core.serialization.ObjectSchema<serializers.SoftTimeoutConfig.Raw, ElevenLabs.SoftTimeoutConfig>;
export declare namespace SoftTimeoutConfig {
    interface Raw {
        timeout_seconds?: number | null;
        message?: string | null;
        use_llm_generated_message?: boolean | null;
    }
}
