import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
import { UserFeedbackScore } from "../../../../../../../../types/UserFeedbackScore";
export declare const ConversationFeedbackRequestModel: core.serialization.Schema<serializers.conversationalAi.conversations.ConversationFeedbackRequestModel.Raw, ElevenLabs.conversationalAi.conversations.ConversationFeedbackRequestModel>;
export declare namespace ConversationFeedbackRequestModel {
    interface Raw {
        feedback?: UserFeedbackScore.Raw | null;
    }
}
