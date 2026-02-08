import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BuiltInToolsWorkflowOverrideOutput } from "./BuiltInToolsWorkflowOverrideOutput";
import { CustomLlm } from "./CustomLlm";
import { KnowledgeBaseLocator } from "./KnowledgeBaseLocator";
import { Llm } from "./Llm";
import { LlmReasoningEffort } from "./LlmReasoningEffort";
import { PromptAgentApiModelWorkflowOverrideOutputBackupLlmConfig } from "./PromptAgentApiModelWorkflowOverrideOutputBackupLlmConfig";
import { PromptAgentApiModelWorkflowOverrideOutputToolsItem } from "./PromptAgentApiModelWorkflowOverrideOutputToolsItem";
import { RagConfigWorkflowOverride } from "./RagConfigWorkflowOverride";
export declare const PromptAgentApiModelWorkflowOverrideOutput: core.serialization.ObjectSchema<serializers.PromptAgentApiModelWorkflowOverrideOutput.Raw, ElevenLabs.PromptAgentApiModelWorkflowOverrideOutput>;
export declare namespace PromptAgentApiModelWorkflowOverrideOutput {
    interface Raw {
        prompt?: string | null;
        llm?: Llm.Raw | null;
        reasoning_effort?: LlmReasoningEffort.Raw | null;
        thinking_budget?: number | null;
        temperature?: number | null;
        max_tokens?: number | null;
        tool_ids?: string[] | null;
        built_in_tools?: BuiltInToolsWorkflowOverrideOutput.Raw | null;
        mcp_server_ids?: string[] | null;
        native_mcp_server_ids?: string[] | null;
        knowledge_base?: KnowledgeBaseLocator.Raw[] | null;
        custom_llm?: CustomLlm.Raw | null;
        ignore_default_personality?: boolean | null;
        rag?: RagConfigWorkflowOverride.Raw | null;
        timezone?: string | null;
        backup_llm_config?: PromptAgentApiModelWorkflowOverrideOutputBackupLlmConfig.Raw | null;
        cascade_timeout_seconds?: number | null;
        tools?: PromptAgentApiModelWorkflowOverrideOutputToolsItem.Raw[] | null;
    }
}
