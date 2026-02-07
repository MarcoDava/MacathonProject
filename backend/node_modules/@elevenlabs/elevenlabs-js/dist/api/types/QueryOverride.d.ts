import type * as ElevenLabs from "../index";
export interface QueryOverride {
    properties?: Record<string, ElevenLabs.LiteralOverride | undefined>;
    required?: string[];
}
