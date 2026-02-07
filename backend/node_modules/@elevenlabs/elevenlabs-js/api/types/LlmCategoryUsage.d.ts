import type * as ElevenLabs from "../index";
export interface LlmCategoryUsage {
    irreversibleGeneration?: ElevenLabs.LlmUsageOutput;
    initiatedGeneration?: ElevenLabs.LlmUsageOutput;
}
