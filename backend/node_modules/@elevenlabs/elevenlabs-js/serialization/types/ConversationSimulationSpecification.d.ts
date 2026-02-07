import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AgentConfig } from "./AgentConfig";
import { ConversationHistoryTranscriptCommonModelInput } from "./ConversationHistoryTranscriptCommonModelInput";
import { ConversationSimulationSpecificationDynamicVariablesValue } from "./ConversationSimulationSpecificationDynamicVariablesValue";
import { ToolMockConfig } from "./ToolMockConfig";
export declare const ConversationSimulationSpecification: core.serialization.ObjectSchema<serializers.ConversationSimulationSpecification.Raw, ElevenLabs.ConversationSimulationSpecification>;
export declare namespace ConversationSimulationSpecification {
    interface Raw {
        simulated_user_config: AgentConfig.Raw;
        tool_mock_config?: Record<string, ToolMockConfig.Raw> | null;
        partial_conversation_history?: ConversationHistoryTranscriptCommonModelInput.Raw[] | null;
        dynamic_variables?: Record<string, ConversationSimulationSpecificationDynamicVariablesValue.Raw | null | undefined> | null;
    }
}
