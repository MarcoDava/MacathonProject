import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { GetKnowledgeBaseListResponseModelDocumentsItem } from "./GetKnowledgeBaseListResponseModelDocumentsItem";
export declare const GetKnowledgeBaseListResponseModel: core.serialization.ObjectSchema<serializers.GetKnowledgeBaseListResponseModel.Raw, ElevenLabs.GetKnowledgeBaseListResponseModel>;
export declare namespace GetKnowledgeBaseListResponseModel {
    interface Raw {
        documents: GetKnowledgeBaseListResponseModelDocumentsItem.Raw[];
        next_cursor?: string | null;
        has_more: boolean;
    }
}
