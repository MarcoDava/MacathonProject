import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const McpToolApprovalPolicy: core.serialization.Schema<serializers.McpToolApprovalPolicy.Raw, ElevenLabs.McpToolApprovalPolicy>;
export declare namespace McpToolApprovalPolicy {
    type Raw = "auto_approved" | "requires_approval";
}
