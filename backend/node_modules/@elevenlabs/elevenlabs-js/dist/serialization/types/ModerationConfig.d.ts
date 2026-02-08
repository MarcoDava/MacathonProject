import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ThresholdGuardrail } from "./ThresholdGuardrail";
export declare const ModerationConfig: core.serialization.ObjectSchema<serializers.ModerationConfig.Raw, ElevenLabs.ModerationConfig>;
export declare namespace ModerationConfig {
    interface Raw {
        sexual?: ThresholdGuardrail.Raw | null;
        violence?: ThresholdGuardrail.Raw | null;
        violence_graphic?: ThresholdGuardrail.Raw | null;
        harassment?: ThresholdGuardrail.Raw | null;
        harassment_threatening?: ThresholdGuardrail.Raw | null;
        hate?: ThresholdGuardrail.Raw | null;
        hate_threatening?: ThresholdGuardrail.Raw | null;
        self_harm_instructions?: ThresholdGuardrail.Raw | null;
        self_harm?: ThresholdGuardrail.Raw | null;
        self_harm_intent?: ThresholdGuardrail.Raw | null;
        sexual_minors?: ThresholdGuardrail.Raw | null;
    }
}
