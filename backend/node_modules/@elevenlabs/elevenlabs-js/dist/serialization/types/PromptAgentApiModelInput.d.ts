import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BuiltInToolsInput } from "./BuiltInToolsInput";
import { CustomLlm } from "./CustomLlm";
import { KnowledgeBaseLocator } from "./KnowledgeBaseLocator";
import { Llm } from "./Llm";
import { LlmReasoningEffort } from "./LlmReasoningEffort";
import { PromptAgentApiModelInputBackupLlmConfig } from "./PromptAgentApiModelInputBackupLlmConfig";
import { PromptAgentApiModelInputToolsItem } from "./PromptAgentApiModelInputToolsItem";
import { RagConfig } from "./RagConfig";
export declare const PromptAgentApiModelInput: core.serialization.ObjectSchema<serializers.PromptAgentApiModelInput.Raw, ElevenLabs.PromptAgentApiModelInput>;
export declare namespace PromptAgentApiModelInput {
    interface Raw {
        prompt?: string | null;
        llm?: Llm.Raw | null;
        reasoning_effort?: LlmReasoningEffort.Raw | null;
        thinking_budget?: number | null;
        temperature?: number | null;
        max_tokens?: number | null;
        tool_ids?: string[] | null;
        built_in_tools?: BuiltInToolsInput.Raw | null;
        mcp_server_ids?: string[] | null;
        native_mcp_server_ids?: string[] | null;
        knowledge_base?: KnowledgeBaseLocator.Raw[] | null;
        custom_llm?: CustomLlm.Raw | null;
        ignore_default_personality?: boolean | null;
        rag?: RagConfig.Raw | null;
        timezone?: string | null;
        backup_llm_config?: PromptAgentApiModelInputBackupLlmConfig.Raw | null;
        cascade_timeout_seconds?: number | null;
        tools?: PromptAgentApiModelInputToolsItem.Raw[] | null;
    }
}
