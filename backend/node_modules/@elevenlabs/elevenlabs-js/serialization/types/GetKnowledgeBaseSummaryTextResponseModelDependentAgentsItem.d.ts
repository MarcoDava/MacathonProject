import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DependentAvailableAgentIdentifier } from "./DependentAvailableAgentIdentifier";
import { DependentUnknownAgentIdentifier } from "./DependentUnknownAgentIdentifier";
export declare const GetKnowledgeBaseSummaryTextResponseModelDependentAgentsItem: core.serialization.Schema<serializers.GetKnowledgeBaseSummaryTextResponseModelDependentAgentsItem.Raw, ElevenLabs.GetKnowledgeBaseSummaryTextResponseModelDependentAgentsItem>;
export declare namespace GetKnowledgeBaseSummaryTextResponseModelDependentAgentsItem {
    type Raw = GetKnowledgeBaseSummaryTextResponseModelDependentAgentsItem.Available | GetKnowledgeBaseSummaryTextResponseModelDependentAgentsItem.Unknown;
    interface Available extends DependentAvailableAgentIdentifier.Raw {
        type: "available";
    }
    interface Unknown extends DependentUnknownAgentIdentifier.Raw {
        type: "unknown";
    }
}
