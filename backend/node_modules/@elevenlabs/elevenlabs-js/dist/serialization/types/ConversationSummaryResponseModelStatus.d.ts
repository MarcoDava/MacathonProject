import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationSummaryResponseModelStatus: core.serialization.Schema<serializers.ConversationSummaryResponseModelStatus.Raw, ElevenLabs.ConversationSummaryResponseModelStatus>;
export declare namespace ConversationSummaryResponseModelStatus {
    type Raw = "initiated" | "in-progress" | "processing" | "done" | "failed";
}
