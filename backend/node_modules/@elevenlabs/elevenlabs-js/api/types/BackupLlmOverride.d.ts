import type * as ElevenLabs from "../index";
export interface BackupLlmOverride {
    preference?: "override";
    order: ElevenLabs.Llm[];
}
