import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationSummaryResponseModel } from "./ConversationSummaryResponseModel";
export declare const GetConversationsPageResponseModel: core.serialization.ObjectSchema<serializers.GetConversationsPageResponseModel.Raw, ElevenLabs.GetConversationsPageResponseModel>;
export declare namespace GetConversationsPageResponseModel {
    interface Raw {
        conversations: ConversationSummaryResponseModel.Raw[];
        next_cursor?: string | null;
        has_more: boolean;
    }
}
