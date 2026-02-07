import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistoryErrorCommonModel: core.serialization.ObjectSchema<serializers.ConversationHistoryErrorCommonModel.Raw, ElevenLabs.ConversationHistoryErrorCommonModel>;
export declare namespace ConversationHistoryErrorCommonModel {
    interface Raw {
        code: number;
        reason?: string | null;
    }
}
