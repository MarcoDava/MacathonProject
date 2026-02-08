import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DocumentUsageModeEnum } from "./DocumentUsageModeEnum";
import { GetKnowledgeBaseSummaryTextResponseModelDependentAgentsItem } from "./GetKnowledgeBaseSummaryTextResponseModelDependentAgentsItem";
import { KnowledgeBaseDocumentMetadataResponseModel } from "./KnowledgeBaseDocumentMetadataResponseModel";
import { KnowledgeBaseFolderPathSegmentSummaryResponseModel } from "./KnowledgeBaseFolderPathSegmentSummaryResponseModel";
import { ResourceAccessInfo } from "./ResourceAccessInfo";
export declare const GetKnowledgeBaseSummaryTextResponseModel: core.serialization.ObjectSchema<serializers.GetKnowledgeBaseSummaryTextResponseModel.Raw, ElevenLabs.GetKnowledgeBaseSummaryTextResponseModel>;
export declare namespace GetKnowledgeBaseSummaryTextResponseModel {
    interface Raw {
        id: string;
        name: string;
        metadata: KnowledgeBaseDocumentMetadataResponseModel.Raw;
        supported_usages: DocumentUsageModeEnum.Raw[];
        access_info: ResourceAccessInfo.Raw;
        folder_parent_id?: string | null;
        folder_path?: KnowledgeBaseFolderPathSegmentSummaryResponseModel.Raw[] | null;
        dependent_agents: GetKnowledgeBaseSummaryTextResponseModelDependentAgentsItem.Raw[];
    }
}
