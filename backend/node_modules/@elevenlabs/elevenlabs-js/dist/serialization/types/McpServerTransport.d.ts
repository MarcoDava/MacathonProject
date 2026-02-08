import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const McpServerTransport: core.serialization.Schema<serializers.McpServerTransport.Raw, ElevenLabs.McpServerTransport>;
export declare namespace McpServerTransport {
    type Raw = "SSE" | "STREAMABLE_HTTP";
}
