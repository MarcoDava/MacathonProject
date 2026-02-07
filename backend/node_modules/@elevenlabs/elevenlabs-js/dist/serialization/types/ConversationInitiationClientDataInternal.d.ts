import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationConfigClientOverrideOutput } from "./ConversationConfigClientOverrideOutput";
import { ConversationInitiationClientDataInternalDynamicVariablesValue } from "./ConversationInitiationClientDataInternalDynamicVariablesValue";
import { ConversationInitiationSourceInfo } from "./ConversationInitiationSourceInfo";
export declare const ConversationInitiationClientDataInternal: core.serialization.ObjectSchema<serializers.ConversationInitiationClientDataInternal.Raw, ElevenLabs.ConversationInitiationClientDataInternal>;
export declare namespace ConversationInitiationClientDataInternal {
    interface Raw {
        conversation_config_override?: ConversationConfigClientOverrideOutput.Raw | null;
        custom_llm_extra_body?: Record<string, unknown> | null;
        user_id?: string | null;
        source_info?: ConversationInitiationSourceInfo.Raw | null;
        dynamic_variables?: Record<string, ConversationInitiationClientDataInternalDynamicVariablesValue.Raw | null | undefined> | null;
    }
}
