import type * as ElevenLabs from "../index";
export interface TurnConfigOverride {
    /** Configuration for soft timeout functionality. Provides immediate feedback during longer LLM responses. */
    softTimeoutConfig?: ElevenLabs.SoftTimeoutConfigOverride;
}
