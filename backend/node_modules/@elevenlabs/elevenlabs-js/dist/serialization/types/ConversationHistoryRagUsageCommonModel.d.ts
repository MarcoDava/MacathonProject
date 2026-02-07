import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistoryRagUsageCommonModel: core.serialization.ObjectSchema<serializers.ConversationHistoryRagUsageCommonModel.Raw, ElevenLabs.ConversationHistoryRagUsageCommonModel>;
export declare namespace ConversationHistoryRagUsageCommonModel {
    interface Raw {
        usage_count: number;
        embedding_model: string;
    }
}
