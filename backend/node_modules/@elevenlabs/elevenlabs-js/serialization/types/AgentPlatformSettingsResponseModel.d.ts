import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AgentCallLimits } from "./AgentCallLimits";
import { AgentTestingSettings } from "./AgentTestingSettings";
import { AgentWorkspaceOverridesOutput } from "./AgentWorkspaceOverridesOutput";
import { AuthSettings } from "./AuthSettings";
import { ConversationInitiationClientDataConfigOutput } from "./ConversationInitiationClientDataConfigOutput";
import { EvaluationSettings } from "./EvaluationSettings";
import { LiteralJsonSchemaProperty } from "./LiteralJsonSchemaProperty";
import { PrivacyConfig } from "./PrivacyConfig";
import { SafetyResponseModel } from "./SafetyResponseModel";
import { WidgetConfig } from "./WidgetConfig";
export declare const AgentPlatformSettingsResponseModel: core.serialization.ObjectSchema<serializers.AgentPlatformSettingsResponseModel.Raw, ElevenLabs.AgentPlatformSettingsResponseModel>;
export declare namespace AgentPlatformSettingsResponseModel {
    interface Raw {
        evaluation?: EvaluationSettings.Raw | null;
        widget?: WidgetConfig.Raw | null;
        data_collection?: Record<string, LiteralJsonSchemaProperty.Raw> | null;
        overrides?: ConversationInitiationClientDataConfigOutput.Raw | null;
        workspace_overrides?: AgentWorkspaceOverridesOutput.Raw | null;
        testing?: AgentTestingSettings.Raw | null;
        archived?: boolean | null;
        auth?: AuthSettings.Raw | null;
        call_limits?: AgentCallLimits.Raw | null;
        privacy?: PrivacyConfig.Raw | null;
        safety?: SafetyResponseModel.Raw | null;
    }
}
