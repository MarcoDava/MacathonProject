import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DependentAvailableAgentIdentifier } from "./DependentAvailableAgentIdentifier";
import { DependentUnknownAgentIdentifier } from "./DependentUnknownAgentIdentifier";
export declare const GetKnowledgeBaseSummaryFolderResponseModelDependentAgentsItem: core.serialization.Schema<serializers.GetKnowledgeBaseSummaryFolderResponseModelDependentAgentsItem.Raw, ElevenLabs.GetKnowledgeBaseSummaryFolderResponseModelDependentAgentsItem>;
export declare namespace GetKnowledgeBaseSummaryFolderResponseModelDependentAgentsItem {
    type Raw = GetKnowledgeBaseSummaryFolderResponseModelDependentAgentsItem.Available | GetKnowledgeBaseSummaryFolderResponseModelDependentAgentsItem.Unknown;
    interface Available extends DependentAvailableAgentIdentifier.Raw {
        type: "available";
    }
    interface Unknown extends DependentUnknownAgentIdentifier.Raw {
        type: "unknown";
    }
}
