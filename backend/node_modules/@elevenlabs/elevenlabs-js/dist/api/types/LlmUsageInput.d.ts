import type * as ElevenLabs from "../index";
export interface LlmUsageInput {
    modelUsage?: Record<string, ElevenLabs.LlmInputOutputTokensUsage>;
}
