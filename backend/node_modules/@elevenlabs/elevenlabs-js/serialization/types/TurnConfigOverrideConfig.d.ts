import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { SoftTimeoutConfigOverrideConfig } from "./SoftTimeoutConfigOverrideConfig";
export declare const TurnConfigOverrideConfig: core.serialization.ObjectSchema<serializers.TurnConfigOverrideConfig.Raw, ElevenLabs.TurnConfigOverrideConfig>;
export declare namespace TurnConfigOverrideConfig {
    interface Raw {
        soft_timeout_config?: SoftTimeoutConfigOverrideConfig.Raw | null;
    }
}
