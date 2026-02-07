import type * as ElevenLabs from "../index";
export type GetKnowledgeBaseSummaryFolderResponseModelDependentAgentsItem = ElevenLabs.GetKnowledgeBaseSummaryFolderResponseModelDependentAgentsItem.Available | ElevenLabs.GetKnowledgeBaseSummaryFolderResponseModelDependentAgentsItem.Unknown;
export declare namespace GetKnowledgeBaseSummaryFolderResponseModelDependentAgentsItem {
    interface Available extends ElevenLabs.DependentAvailableAgentIdentifier {
        type: "available";
    }
    interface Unknown extends ElevenLabs.DependentUnknownAgentIdentifier {
        type: "unknown";
    }
}
