import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BuiltInToolsOutput } from "./BuiltInToolsOutput";
import { CustomLlm } from "./CustomLlm";
import { KnowledgeBaseLocator } from "./KnowledgeBaseLocator";
import { Llm } from "./Llm";
import { LlmReasoningEffort } from "./LlmReasoningEffort";
import { PromptAgentApiModelOutputBackupLlmConfig } from "./PromptAgentApiModelOutputBackupLlmConfig";
import { PromptAgentApiModelOutputToolsItem } from "./PromptAgentApiModelOutputToolsItem";
import { RagConfig } from "./RagConfig";
export declare const PromptAgentApiModelOutput: core.serialization.ObjectSchema<serializers.PromptAgentApiModelOutput.Raw, ElevenLabs.PromptAgentApiModelOutput>;
export declare namespace PromptAgentApiModelOutput {
    interface Raw {
        prompt?: string | null;
        llm?: Llm.Raw | null;
        reasoning_effort?: LlmReasoningEffort.Raw | null;
        thinking_budget?: number | null;
        temperature?: number | null;
        max_tokens?: number | null;
        tool_ids?: string[] | null;
        built_in_tools?: BuiltInToolsOutput.Raw | null;
        mcp_server_ids?: string[] | null;
        native_mcp_server_ids?: string[] | null;
        knowledge_base?: KnowledgeBaseLocator.Raw[] | null;
        custom_llm?: CustomLlm.Raw | null;
        ignore_default_personality?: boolean | null;
        rag?: RagConfig.Raw | null;
        timezone?: string | null;
        backup_llm_config?: PromptAgentApiModelOutputBackupLlmConfig.Raw | null;
        cascade_timeout_seconds?: number | null;
        tools?: PromptAgentApiModelOutputToolsItem.Raw[] | null;
    }
}
