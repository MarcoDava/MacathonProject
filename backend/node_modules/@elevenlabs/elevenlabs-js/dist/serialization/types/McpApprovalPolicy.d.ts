import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const McpApprovalPolicy: core.serialization.Schema<serializers.McpApprovalPolicy.Raw, ElevenLabs.McpApprovalPolicy>;
export declare namespace McpApprovalPolicy {
    type Raw = "auto_approve_all" | "require_approval_all" | "require_approval_per_tool";
}
