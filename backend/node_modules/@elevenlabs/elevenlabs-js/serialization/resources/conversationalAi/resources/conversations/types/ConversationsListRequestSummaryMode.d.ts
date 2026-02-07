import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
export declare const ConversationsListRequestSummaryMode: core.serialization.Schema<serializers.conversationalAi.ConversationsListRequestSummaryMode.Raw, ElevenLabs.conversationalAi.ConversationsListRequestSummaryMode>;
export declare namespace ConversationsListRequestSummaryMode {
    type Raw = "exclude" | "include";
}
