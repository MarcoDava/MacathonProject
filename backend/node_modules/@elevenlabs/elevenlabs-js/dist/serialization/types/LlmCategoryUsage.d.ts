import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LlmUsageOutput } from "./LlmUsageOutput";
export declare const LlmCategoryUsage: core.serialization.ObjectSchema<serializers.LlmCategoryUsage.Raw, ElevenLabs.LlmCategoryUsage>;
export declare namespace LlmCategoryUsage {
    interface Raw {
        irreversible_generation?: LlmUsageOutput.Raw | null;
        initiated_generation?: LlmUsageOutput.Raw | null;
    }
}
