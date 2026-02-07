import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SoftTimeoutConfigOverrideConfig: core.serialization.ObjectSchema<serializers.SoftTimeoutConfigOverrideConfig.Raw, ElevenLabs.SoftTimeoutConfigOverrideConfig>;
export declare namespace SoftTimeoutConfigOverrideConfig {
    interface Raw {
        message?: boolean | null;
    }
}
