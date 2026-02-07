import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AgentConfigApiModelWorkflowOverrideInput } from "./AgentConfigApiModelWorkflowOverrideInput";
import { AsrConversationalConfigWorkflowOverride } from "./AsrConversationalConfigWorkflowOverride";
import { ConversationConfigWorkflowOverride } from "./ConversationConfigWorkflowOverride";
import { LanguagePresetInput } from "./LanguagePresetInput";
import { TtsConversationalConfigWorkflowOverrideInput } from "./TtsConversationalConfigWorkflowOverrideInput";
import { TurnConfigWorkflowOverride } from "./TurnConfigWorkflowOverride";
import { VadConfigWorkflowOverride } from "./VadConfigWorkflowOverride";
export declare const ConversationalConfigApiModelWorkflowOverrideInput: core.serialization.ObjectSchema<serializers.ConversationalConfigApiModelWorkflowOverrideInput.Raw, ElevenLabs.ConversationalConfigApiModelWorkflowOverrideInput>;
export declare namespace ConversationalConfigApiModelWorkflowOverrideInput {
    interface Raw {
        asr?: AsrConversationalConfigWorkflowOverride.Raw | null;
        turn?: TurnConfigWorkflowOverride.Raw | null;
        tts?: TtsConversationalConfigWorkflowOverrideInput.Raw | null;
        conversation?: ConversationConfigWorkflowOverride.Raw | null;
        language_presets?: Record<string, LanguagePresetInput.Raw | null | undefined> | null;
        vad?: VadConfigWorkflowOverride.Raw | null;
        agent?: AgentConfigApiModelWorkflowOverrideInput.Raw | null;
    }
}
