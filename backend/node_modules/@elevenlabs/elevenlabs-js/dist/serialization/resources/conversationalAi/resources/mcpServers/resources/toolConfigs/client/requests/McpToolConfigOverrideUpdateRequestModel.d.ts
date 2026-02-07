import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
import { DynamicVariableAssignment } from "../../../../../../../../types/DynamicVariableAssignment";
import { ToolCallSoundBehavior } from "../../../../../../../../types/ToolCallSoundBehavior";
import { ToolCallSoundType } from "../../../../../../../../types/ToolCallSoundType";
import { ToolExecutionMode } from "../../../../../../../../types/ToolExecutionMode";
export declare const McpToolConfigOverrideUpdateRequestModel: core.serialization.Schema<serializers.conversationalAi.mcpServers.McpToolConfigOverrideUpdateRequestModel.Raw, ElevenLabs.conversationalAi.mcpServers.McpToolConfigOverrideUpdateRequestModel>;
export declare namespace McpToolConfigOverrideUpdateRequestModel {
    interface Raw {
        force_pre_tool_speech?: boolean | null;
        disable_interruptions?: boolean | null;
        tool_call_sound?: ToolCallSoundType.Raw | null;
        tool_call_sound_behavior?: ToolCallSoundBehavior.Raw | null;
        execution_mode?: ToolExecutionMode.Raw | null;
        assignments?: DynamicVariableAssignment.Raw[] | null;
    }
}
