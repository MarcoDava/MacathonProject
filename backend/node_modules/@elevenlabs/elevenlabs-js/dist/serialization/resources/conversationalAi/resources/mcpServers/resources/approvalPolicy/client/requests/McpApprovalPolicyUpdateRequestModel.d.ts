import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
import { McpApprovalPolicy } from "../../../../../../../../types/McpApprovalPolicy";
export declare const McpApprovalPolicyUpdateRequestModel: core.serialization.Schema<serializers.conversationalAi.mcpServers.McpApprovalPolicyUpdateRequestModel.Raw, ElevenLabs.conversationalAi.mcpServers.McpApprovalPolicyUpdateRequestModel>;
export declare namespace McpApprovalPolicyUpdateRequestModel {
    interface Raw {
        approval_policy: McpApprovalPolicy.Raw;
    }
}
