import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SoftTimeoutConfigOverride: core.serialization.ObjectSchema<serializers.SoftTimeoutConfigOverride.Raw, ElevenLabs.SoftTimeoutConfigOverride>;
export declare namespace SoftTimeoutConfigOverride {
    interface Raw {
        message?: string | null;
    }
}
