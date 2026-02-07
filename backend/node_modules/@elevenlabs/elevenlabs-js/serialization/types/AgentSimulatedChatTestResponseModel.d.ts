import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationHistoryAnalysisCommonModel } from "./ConversationHistoryAnalysisCommonModel";
import { ConversationHistoryTranscriptCommonModelOutput } from "./ConversationHistoryTranscriptCommonModelOutput";
export declare const AgentSimulatedChatTestResponseModel: core.serialization.ObjectSchema<serializers.AgentSimulatedChatTestResponseModel.Raw, ElevenLabs.AgentSimulatedChatTestResponseModel>;
export declare namespace AgentSimulatedChatTestResponseModel {
    interface Raw {
        simulated_conversation: ConversationHistoryTranscriptCommonModelOutput.Raw[];
        analysis: ConversationHistoryAnalysisCommonModel.Raw;
    }
}
