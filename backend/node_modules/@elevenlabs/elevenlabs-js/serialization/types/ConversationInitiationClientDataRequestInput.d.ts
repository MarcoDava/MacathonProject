import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationConfigClientOverrideInput } from "./ConversationConfigClientOverrideInput";
import { ConversationInitiationClientDataRequestInputDynamicVariablesValue } from "./ConversationInitiationClientDataRequestInputDynamicVariablesValue";
import { ConversationInitiationSourceInfo } from "./ConversationInitiationSourceInfo";
export declare const ConversationInitiationClientDataRequestInput: core.serialization.ObjectSchema<serializers.ConversationInitiationClientDataRequestInput.Raw, ElevenLabs.ConversationInitiationClientDataRequestInput>;
export declare namespace ConversationInitiationClientDataRequestInput {
    interface Raw {
        conversation_config_override?: ConversationConfigClientOverrideInput.Raw | null;
        custom_llm_extra_body?: Record<string, unknown> | null;
        user_id?: string | null;
        source_info?: ConversationInitiationSourceInfo.Raw | null;
        dynamic_variables?: Record<string, ConversationInitiationClientDataRequestInputDynamicVariablesValue.Raw | null | undefined> | null;
    }
}
