import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationFeedbackType } from "./ConversationFeedbackType";
import { UserFeedbackScore } from "./UserFeedbackScore";
export declare const ConversationHistoryFeedbackCommonModel: core.serialization.ObjectSchema<serializers.ConversationHistoryFeedbackCommonModel.Raw, ElevenLabs.ConversationHistoryFeedbackCommonModel>;
export declare namespace ConversationHistoryFeedbackCommonModel {
    interface Raw {
        type?: ConversationFeedbackType.Raw | null;
        overall_score?: UserFeedbackScore.Raw | null;
        likes?: number | null;
        dislikes?: number | null;
        rating?: number | null;
        comment?: string | null;
    }
}
