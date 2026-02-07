import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LlmTokensCategoryUsage } from "./LlmTokensCategoryUsage";
export declare const LlmInputOutputTokensUsage: core.serialization.ObjectSchema<serializers.LlmInputOutputTokensUsage.Raw, ElevenLabs.LlmInputOutputTokensUsage>;
export declare namespace LlmInputOutputTokensUsage {
    interface Raw {
        input?: LlmTokensCategoryUsage.Raw | null;
        input_cache_read?: LlmTokensCategoryUsage.Raw | null;
        input_cache_write?: LlmTokensCategoryUsage.Raw | null;
        output_total?: LlmTokensCategoryUsage.Raw | null;
    }
}
