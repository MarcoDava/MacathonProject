import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AgentCallLimits } from "./AgentCallLimits";
import { AgentTestingSettings } from "./AgentTestingSettings";
import { AgentWorkspaceOverridesInput } from "./AgentWorkspaceOverridesInput";
import { AuthSettings } from "./AuthSettings";
import { ConversationInitiationClientDataConfigInput } from "./ConversationInitiationClientDataConfigInput";
import { EvaluationSettings } from "./EvaluationSettings";
import { LiteralJsonSchemaProperty } from "./LiteralJsonSchemaProperty";
import { PrivacyConfig } from "./PrivacyConfig";
import { WidgetConfig } from "./WidgetConfig";
export declare const AgentPlatformSettingsRequestModel: core.serialization.ObjectSchema<serializers.AgentPlatformSettingsRequestModel.Raw, ElevenLabs.AgentPlatformSettingsRequestModel>;
export declare namespace AgentPlatformSettingsRequestModel {
    interface Raw {
        evaluation?: EvaluationSettings.Raw | null;
        widget?: WidgetConfig.Raw | null;
        data_collection?: Record<string, LiteralJsonSchemaProperty.Raw> | null;
        overrides?: ConversationInitiationClientDataConfigInput.Raw | null;
        workspace_overrides?: AgentWorkspaceOverridesInput.Raw | null;
        testing?: AgentTestingSettings.Raw | null;
        archived?: boolean | null;
        auth?: AuthSettings.Raw | null;
        call_limits?: AgentCallLimits.Raw | null;
        privacy?: PrivacyConfig.Raw | null;
    }
}
