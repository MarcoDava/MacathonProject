import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationConfigClientOverrideOutput } from "./ConversationConfigClientOverrideOutput";
import { ConversationInitiationClientDataRequestOutputDynamicVariablesValue } from "./ConversationInitiationClientDataRequestOutputDynamicVariablesValue";
import { ConversationInitiationSourceInfo } from "./ConversationInitiationSourceInfo";
export declare const ConversationInitiationClientDataRequestOutput: core.serialization.ObjectSchema<serializers.ConversationInitiationClientDataRequestOutput.Raw, ElevenLabs.ConversationInitiationClientDataRequestOutput>;
export declare namespace ConversationInitiationClientDataRequestOutput {
    interface Raw {
        conversation_config_override?: ConversationConfigClientOverrideOutput.Raw | null;
        custom_llm_extra_body?: Record<string, unknown> | null;
        user_id?: string | null;
        source_info?: ConversationInitiationSourceInfo.Raw | null;
        dynamic_variables?: Record<string, ConversationInitiationClientDataRequestOutputDynamicVariablesValue.Raw | null | undefined> | null;
    }
}
