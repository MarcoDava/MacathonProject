import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const IntegrationType: core.serialization.Schema<serializers.IntegrationType.Raw, ElevenLabs.IntegrationType>;
export declare namespace IntegrationType {
    type Raw = "mcp_server" | "mcp_integration";
}
