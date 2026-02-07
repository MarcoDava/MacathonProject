import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ApiIntegrationWebhookOverridesOutput } from "./ApiIntegrationWebhookOverridesOutput";
import { DynamicVariableAssignment } from "./DynamicVariableAssignment";
import { DynamicVariablesConfig } from "./DynamicVariablesConfig";
import { ToolCallSoundBehavior } from "./ToolCallSoundBehavior";
import { ToolCallSoundType } from "./ToolCallSoundType";
import { ToolExecutionMode } from "./ToolExecutionMode";
export declare const ApiIntegrationWebhookToolConfigOutput: core.serialization.ObjectSchema<serializers.ApiIntegrationWebhookToolConfigOutput.Raw, ElevenLabs.ApiIntegrationWebhookToolConfigOutput>;
export declare namespace ApiIntegrationWebhookToolConfigOutput {
    interface Raw {
        name: string;
        description: string;
        response_timeout_secs: number;
        disable_interruptions: boolean;
        force_pre_tool_speech: boolean;
        assignments: DynamicVariableAssignment.Raw[];
        tool_call_sound?: ToolCallSoundType.Raw | null;
        tool_call_sound_behavior: ToolCallSoundBehavior.Raw;
        dynamic_variables: DynamicVariablesConfig.Raw;
        execution_mode: ToolExecutionMode.Raw;
        tool_version: string;
        api_integration_id: string;
        api_integration_connection_id: string;
        api_schema_overrides?: ApiIntegrationWebhookOverridesOutput.Raw | null;
    }
}
