import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LlmReasoningEffort: core.serialization.Schema<serializers.LlmReasoningEffort.Raw, ElevenLabs.LlmReasoningEffort>;
export declare namespace LlmReasoningEffort {
    type Raw = "none" | "minimal" | "low" | "medium" | "high";
}
