import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DynamicVariableAssignment } from "./DynamicVariableAssignment";
import { ToolCallSoundBehavior } from "./ToolCallSoundBehavior";
import { ToolCallSoundType } from "./ToolCallSoundType";
import { ToolExecutionMode } from "./ToolExecutionMode";
export declare const McpToolConfigOverride: core.serialization.ObjectSchema<serializers.McpToolConfigOverride.Raw, ElevenLabs.McpToolConfigOverride>;
export declare namespace McpToolConfigOverride {
    interface Raw {
        tool_name: string;
        force_pre_tool_speech?: boolean | null;
        disable_interruptions?: boolean | null;
        tool_call_sound?: ToolCallSoundType.Raw | null;
        tool_call_sound_behavior?: ToolCallSoundBehavior.Raw | null;
        execution_mode?: ToolExecutionMode.Raw | null;
        assignments?: DynamicVariableAssignment.Raw[] | null;
    }
}
