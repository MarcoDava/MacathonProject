import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
import { AgentDeploymentRequest } from "../../../../../../../../types/AgentDeploymentRequest";
export declare const BodyCreateOrUpdateDeploymentsV1ConvaiAgentsAgentIdDeploymentsPost: core.serialization.Schema<serializers.conversationalAi.agents.BodyCreateOrUpdateDeploymentsV1ConvaiAgentsAgentIdDeploymentsPost.Raw, ElevenLabs.conversationalAi.agents.BodyCreateOrUpdateDeploymentsV1ConvaiAgentsAgentIdDeploymentsPost>;
export declare namespace BodyCreateOrUpdateDeploymentsV1ConvaiAgentsAgentIdDeploymentsPost {
    interface Raw {
        deployment_request: AgentDeploymentRequest.Raw;
    }
}
