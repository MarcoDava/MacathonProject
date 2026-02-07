import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistoryBatchCallModel: core.serialization.ObjectSchema<serializers.ConversationHistoryBatchCallModel.Raw, ElevenLabs.ConversationHistoryBatchCallModel>;
export declare namespace ConversationHistoryBatchCallModel {
    interface Raw {
        batch_call_id: string;
        batch_call_recipient_id: string;
    }
}
