import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ToolExecutionMode: core.serialization.Schema<serializers.ToolExecutionMode.Raw, ElevenLabs.ToolExecutionMode>;
export declare namespace ToolExecutionMode {
    type Raw = "immediate" | "post_tool_speech" | "async";
}
