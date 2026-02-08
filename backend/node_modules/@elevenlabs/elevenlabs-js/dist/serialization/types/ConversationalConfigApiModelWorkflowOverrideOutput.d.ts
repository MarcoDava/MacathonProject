import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AgentConfigApiModelWorkflowOverrideOutput } from "./AgentConfigApiModelWorkflowOverrideOutput";
import { AsrConversationalConfigWorkflowOverride } from "./AsrConversationalConfigWorkflowOverride";
import { ConversationConfigWorkflowOverride } from "./ConversationConfigWorkflowOverride";
import { LanguagePresetOutput } from "./LanguagePresetOutput";
import { TtsConversationalConfigWorkflowOverrideOutput } from "./TtsConversationalConfigWorkflowOverrideOutput";
import { TurnConfigWorkflowOverride } from "./TurnConfigWorkflowOverride";
import { VadConfigWorkflowOverride } from "./VadConfigWorkflowOverride";
export declare const ConversationalConfigApiModelWorkflowOverrideOutput: core.serialization.ObjectSchema<serializers.ConversationalConfigApiModelWorkflowOverrideOutput.Raw, ElevenLabs.ConversationalConfigApiModelWorkflowOverrideOutput>;
export declare namespace ConversationalConfigApiModelWorkflowOverrideOutput {
    interface Raw {
        asr?: AsrConversationalConfigWorkflowOverride.Raw | null;
        turn?: TurnConfigWorkflowOverride.Raw | null;
        tts?: TtsConversationalConfigWorkflowOverrideOutput.Raw | null;
        conversation?: ConversationConfigWorkflowOverride.Raw | null;
        language_presets?: Record<string, LanguagePresetOutput.Raw | null | undefined> | null;
        vad?: VadConfigWorkflowOverride.Raw | null;
        agent?: AgentConfigApiModelWorkflowOverrideOutput.Raw | null;
    }
}
