import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { SoftTimeoutConfigOverride } from "./SoftTimeoutConfigOverride";
export declare const TurnConfigOverride: core.serialization.ObjectSchema<serializers.TurnConfigOverride.Raw, ElevenLabs.TurnConfigOverride>;
export declare namespace TurnConfigOverride {
    interface Raw {
        soft_timeout_config?: SoftTimeoutConfigOverride.Raw | null;
    }
}
