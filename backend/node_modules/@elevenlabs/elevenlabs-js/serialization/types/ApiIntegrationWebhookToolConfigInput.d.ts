import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ApiIntegrationWebhookOverridesInput } from "./ApiIntegrationWebhookOverridesInput";
import { DynamicVariableAssignment } from "./DynamicVariableAssignment";
import { DynamicVariablesConfig } from "./DynamicVariablesConfig";
import { ToolCallSoundBehavior } from "./ToolCallSoundBehavior";
import { ToolCallSoundType } from "./ToolCallSoundType";
import { ToolExecutionMode } from "./ToolExecutionMode";
export declare const ApiIntegrationWebhookToolConfigInput: core.serialization.ObjectSchema<serializers.ApiIntegrationWebhookToolConfigInput.Raw, ElevenLabs.ApiIntegrationWebhookToolConfigInput>;
export declare namespace ApiIntegrationWebhookToolConfigInput {
    interface Raw {
        name: string;
        description: string;
        response_timeout_secs?: number | null;
        disable_interruptions?: boolean | null;
        force_pre_tool_speech?: boolean | null;
        assignments?: DynamicVariableAssignment.Raw[] | null;
        tool_call_sound?: ToolCallSoundType.Raw | null;
        tool_call_sound_behavior?: ToolCallSoundBehavior.Raw | null;
        dynamic_variables?: DynamicVariablesConfig.Raw | null;
        execution_mode?: ToolExecutionMode.Raw | null;
        tool_version?: string | null;
        api_integration_id: string;
        api_integration_connection_id: string;
        api_schema_overrides?: ApiIntegrationWebhookOverridesInput.Raw | null;
    }
}
