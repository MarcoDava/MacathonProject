import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ThresholdGuardrail: core.serialization.ObjectSchema<serializers.ThresholdGuardrail.Raw, ElevenLabs.ThresholdGuardrail>;
export declare namespace ThresholdGuardrail {
    interface Raw {
        is_enabled?: boolean | null;
        threshold?: number | null;
    }
}
