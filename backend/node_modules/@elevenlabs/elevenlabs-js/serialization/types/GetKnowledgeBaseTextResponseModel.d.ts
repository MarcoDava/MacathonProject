import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DocumentUsageModeEnum } from "./DocumentUsageModeEnum";
import { KnowledgeBaseDocumentMetadataResponseModel } from "./KnowledgeBaseDocumentMetadataResponseModel";
import { KnowledgeBaseFolderPathSegmentResponseModel } from "./KnowledgeBaseFolderPathSegmentResponseModel";
import { ResourceAccessInfo } from "./ResourceAccessInfo";
export declare const GetKnowledgeBaseTextResponseModel: core.serialization.ObjectSchema<serializers.GetKnowledgeBaseTextResponseModel.Raw, ElevenLabs.GetKnowledgeBaseTextResponseModel>;
export declare namespace GetKnowledgeBaseTextResponseModel {
    interface Raw {
        id: string;
        name: string;
        metadata: KnowledgeBaseDocumentMetadataResponseModel.Raw;
        supported_usages: DocumentUsageModeEnum.Raw[];
        access_info: ResourceAccessInfo.Raw;
        folder_parent_id?: string | null;
        folder_path?: KnowledgeBaseFolderPathSegmentResponseModel.Raw[] | null;
        extracted_inner_html: string;
    }
}
