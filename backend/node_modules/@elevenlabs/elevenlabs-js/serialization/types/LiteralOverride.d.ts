import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LiteralOverrideConstantValue } from "./LiteralOverrideConstantValue";
export declare const LiteralOverride: core.serialization.ObjectSchema<serializers.LiteralOverride.Raw, ElevenLabs.LiteralOverride>;
export declare namespace LiteralOverride {
    interface Raw {
        description?: string | null;
        dynamic_variable?: string | null;
        constant_value?: LiteralOverrideConstantValue.Raw | null;
    }
}
