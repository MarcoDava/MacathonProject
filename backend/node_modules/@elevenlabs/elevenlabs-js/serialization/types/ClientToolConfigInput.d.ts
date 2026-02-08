import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
import { DynamicVariableAssignment } from "./DynamicVariableAssignment";
import { DynamicVariablesConfig } from "./DynamicVariablesConfig";
import { ToolCallSoundBehavior } from "./ToolCallSoundBehavior";
import { ToolCallSoundType } from "./ToolCallSoundType";
import { ToolExecutionMode } from "./ToolExecutionMode";
export declare const ClientToolConfigInput: core.serialization.ObjectSchema<serializers.ClientToolConfigInput.Raw, ElevenLabs.ClientToolConfigInput>;
export declare namespace ClientToolConfigInput {
    interface Raw {
        name: string;
        description: string;
        response_timeout_secs?: number | null;
        disable_interruptions?: boolean | null;
        force_pre_tool_speech?: boolean | null;
        assignments?: DynamicVariableAssignment.Raw[] | null;
        tool_call_sound?: ToolCallSoundType.Raw | null;
        tool_call_sound_behavior?: ToolCallSoundBehavior.Raw | null;
        parameters?: serializers.ObjectJsonSchemaPropertyInput.Raw | null;
        expects_response?: boolean | null;
        dynamic_variables?: DynamicVariablesConfig.Raw | null;
        execution_mode?: ToolExecutionMode.Raw | null;
    }
}
