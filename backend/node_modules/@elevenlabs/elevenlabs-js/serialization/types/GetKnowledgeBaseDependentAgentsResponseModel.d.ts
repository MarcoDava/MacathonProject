import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { GetKnowledgeBaseDependentAgentsResponseModelAgentsItem } from "./GetKnowledgeBaseDependentAgentsResponseModelAgentsItem";
export declare const GetKnowledgeBaseDependentAgentsResponseModel: core.serialization.ObjectSchema<serializers.GetKnowledgeBaseDependentAgentsResponseModel.Raw, ElevenLabs.GetKnowledgeBaseDependentAgentsResponseModel>;
export declare namespace GetKnowledgeBaseDependentAgentsResponseModel {
    interface Raw {
        agents: GetKnowledgeBaseDependentAgentsResponseModelAgentsItem.Raw[];
        next_cursor?: string | null;
        has_more: boolean;
    }
}
