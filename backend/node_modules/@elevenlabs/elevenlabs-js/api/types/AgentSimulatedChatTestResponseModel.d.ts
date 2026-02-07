import type * as ElevenLabs from "../index";
export interface AgentSimulatedChatTestResponseModel {
    simulatedConversation: ElevenLabs.ConversationHistoryTranscriptCommonModelOutput[];
    analysis: ElevenLabs.ConversationHistoryAnalysisCommonModel;
}
