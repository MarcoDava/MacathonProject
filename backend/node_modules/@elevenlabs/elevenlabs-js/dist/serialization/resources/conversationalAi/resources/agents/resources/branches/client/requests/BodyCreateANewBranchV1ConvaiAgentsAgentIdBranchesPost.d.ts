import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
import { AgentWorkflowRequestModel } from "../../../../../../../../types/AgentWorkflowRequestModel";
export declare const BodyCreateANewBranchV1ConvaiAgentsAgentIdBranchesPost: core.serialization.Schema<serializers.conversationalAi.agents.BodyCreateANewBranchV1ConvaiAgentsAgentIdBranchesPost.Raw, ElevenLabs.conversationalAi.agents.BodyCreateANewBranchV1ConvaiAgentsAgentIdBranchesPost>;
export declare namespace BodyCreateANewBranchV1ConvaiAgentsAgentIdBranchesPost {
    interface Raw {
        parent_version_id: string;
        name: string;
        description: string;
        conversation_config?: Record<string, unknown> | null;
        platform_settings?: Record<string, unknown> | null;
        workflow?: AgentWorkflowRequestModel.Raw | null;
    }
}
