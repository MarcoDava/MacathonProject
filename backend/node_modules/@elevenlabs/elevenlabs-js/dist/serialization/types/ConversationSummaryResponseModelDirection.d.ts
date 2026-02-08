import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationSummaryResponseModelDirection: core.serialization.Schema<serializers.ConversationSummaryResponseModelDirection.Raw, ElevenLabs.ConversationSummaryResponseModelDirection>;
export declare namespace ConversationSummaryResponseModelDirection {
    type Raw = "inbound" | "outbound";
}
