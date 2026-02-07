import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
import { AgentWorkflowRequestModel } from "../../../../../../../../types/AgentWorkflowRequestModel";
export declare const BodyCreateAgentDraftV1ConvaiAgentsAgentIdDraftsPost: core.serialization.Schema<serializers.conversationalAi.agents.BodyCreateAgentDraftV1ConvaiAgentsAgentIdDraftsPost.Raw, Omit<ElevenLabs.conversationalAi.agents.BodyCreateAgentDraftV1ConvaiAgentsAgentIdDraftsPost, "branchId">>;
export declare namespace BodyCreateAgentDraftV1ConvaiAgentsAgentIdDraftsPost {
    interface Raw {
        conversation_config: Record<string, unknown>;
        platform_settings: Record<string, unknown>;
        workflow: AgentWorkflowRequestModel.Raw;
        name: string;
        tags?: string[] | null;
    }
}
