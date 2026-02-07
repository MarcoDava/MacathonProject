import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ToolTypeFilter: core.serialization.Schema<serializers.ToolTypeFilter.Raw, ElevenLabs.ToolTypeFilter>;
export declare namespace ToolTypeFilter {
    type Raw = "webhook" | "client" | "api_integration_webhook";
}
