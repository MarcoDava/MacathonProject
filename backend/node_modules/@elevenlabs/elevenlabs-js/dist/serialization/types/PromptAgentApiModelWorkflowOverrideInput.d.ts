import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BuiltInToolsWorkflowOverrideInput } from "./BuiltInToolsWorkflowOverrideInput";
import { CustomLlm } from "./CustomLlm";
import { KnowledgeBaseLocator } from "./KnowledgeBaseLocator";
import { Llm } from "./Llm";
import { LlmReasoningEffort } from "./LlmReasoningEffort";
import { PromptAgentApiModelWorkflowOverrideInputBackupLlmConfig } from "./PromptAgentApiModelWorkflowOverrideInputBackupLlmConfig";
import { PromptAgentApiModelWorkflowOverrideInputToolsItem } from "./PromptAgentApiModelWorkflowOverrideInputToolsItem";
import { RagConfigWorkflowOverride } from "./RagConfigWorkflowOverride";
export declare const PromptAgentApiModelWorkflowOverrideInput: core.serialization.ObjectSchema<serializers.PromptAgentApiModelWorkflowOverrideInput.Raw, ElevenLabs.PromptAgentApiModelWorkflowOverrideInput>;
export declare namespace PromptAgentApiModelWorkflowOverrideInput {
    interface Raw {
        prompt?: string | null;
        llm?: Llm.Raw | null;
        reasoning_effort?: LlmReasoningEffort.Raw | null;
        thinking_budget?: number | null;
        temperature?: number | null;
        max_tokens?: number | null;
        tool_ids?: string[] | null;
        built_in_tools?: BuiltInToolsWorkflowOverrideInput.Raw | null;
        mcp_server_ids?: string[] | null;
        native_mcp_server_ids?: string[] | null;
        knowledge_base?: KnowledgeBaseLocator.Raw[] | null;
        custom_llm?: CustomLlm.Raw | null;
        ignore_default_personality?: boolean | null;
        rag?: RagConfigWorkflowOverride.Raw | null;
        timezone?: string | null;
        backup_llm_config?: PromptAgentApiModelWorkflowOverrideInputBackupLlmConfig.Raw | null;
        cascade_timeout_seconds?: number | null;
        tools?: PromptAgentApiModelWorkflowOverrideInputToolsItem.Raw[] | null;
    }
}
