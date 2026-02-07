import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistoryElevenAssistantCommonModel: core.serialization.ObjectSchema<serializers.ConversationHistoryElevenAssistantCommonModel.Raw, ElevenLabs.ConversationHistoryElevenAssistantCommonModel>;
export declare namespace ConversationHistoryElevenAssistantCommonModel {
    interface Raw {
        is_eleven_assistant?: boolean | null;
    }
}
