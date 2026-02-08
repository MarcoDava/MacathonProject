import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LlmInputOutputTokensUsage } from "./LlmInputOutputTokensUsage";
export declare const LlmUsageInput: core.serialization.ObjectSchema<serializers.LlmUsageInput.Raw, ElevenLabs.LlmUsageInput>;
export declare namespace LlmUsageInput {
    interface Raw {
        model_usage?: Record<string, LlmInputOutputTokensUsage.Raw> | null;
    }
}
