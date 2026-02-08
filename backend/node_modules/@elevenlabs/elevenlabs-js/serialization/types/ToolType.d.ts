import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ToolType: core.serialization.Schema<serializers.ToolType.Raw, ElevenLabs.ToolType>;
export declare namespace ToolType {
    type Raw = "system" | "webhook" | "client" | "mcp" | "workflow" | "api_integration_webhook" | "api_integration_mcp";
}
