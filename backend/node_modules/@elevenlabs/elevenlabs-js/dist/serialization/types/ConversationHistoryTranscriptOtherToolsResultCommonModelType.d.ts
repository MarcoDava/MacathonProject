import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistoryTranscriptOtherToolsResultCommonModelType: core.serialization.Schema<serializers.ConversationHistoryTranscriptOtherToolsResultCommonModelType.Raw, ElevenLabs.ConversationHistoryTranscriptOtherToolsResultCommonModelType>;
export declare namespace ConversationHistoryTranscriptOtherToolsResultCommonModelType {
    type Raw = "client" | "webhook" | "mcp";
}
