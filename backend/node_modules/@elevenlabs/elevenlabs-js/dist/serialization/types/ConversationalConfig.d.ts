import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AgentConfig } from "./AgentConfig";
import { AsrConversationalConfig } from "./AsrConversationalConfig";
import { ConversationConfig } from "./ConversationConfig";
import { LanguagePresetOutput } from "./LanguagePresetOutput";
import { TtsConversationalConfigOutput } from "./TtsConversationalConfigOutput";
import { TurnConfig } from "./TurnConfig";
import { VadConfig } from "./VadConfig";
export declare const ConversationalConfig: core.serialization.ObjectSchema<serializers.ConversationalConfig.Raw, ElevenLabs.ConversationalConfig>;
export declare namespace ConversationalConfig {
    interface Raw {
        asr?: AsrConversationalConfig.Raw | null;
        turn?: TurnConfig.Raw | null;
        tts?: TtsConversationalConfigOutput.Raw | null;
        conversation?: ConversationConfig.Raw | null;
        language_presets?: Record<string, LanguagePresetOutput.Raw> | null;
        vad?: VadConfig.Raw | null;
        agent?: AgentConfig.Raw | null;
    }
}
