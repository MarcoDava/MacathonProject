import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { GetKnowledgeBaseSummaryFileResponseModel } from "./GetKnowledgeBaseSummaryFileResponseModel";
import { GetKnowledgeBaseSummaryFolderResponseModel } from "./GetKnowledgeBaseSummaryFolderResponseModel";
import { GetKnowledgeBaseSummaryTextResponseModel } from "./GetKnowledgeBaseSummaryTextResponseModel";
import { GetKnowledgeBaseSummaryUrlResponseModel } from "./GetKnowledgeBaseSummaryUrlResponseModel";
export declare const GetKnowledgeBaseListResponseModelDocumentsItem: core.serialization.Schema<serializers.GetKnowledgeBaseListResponseModelDocumentsItem.Raw, ElevenLabs.GetKnowledgeBaseListResponseModelDocumentsItem>;
export declare namespace GetKnowledgeBaseListResponseModelDocumentsItem {
    type Raw = GetKnowledgeBaseListResponseModelDocumentsItem.File | GetKnowledgeBaseListResponseModelDocumentsItem.Folder | GetKnowledgeBaseListResponseModelDocumentsItem.Text | GetKnowledgeBaseListResponseModelDocumentsItem.Url;
    interface File extends GetKnowledgeBaseSummaryFileResponseModel.Raw {
        type: "file";
    }
    interface Folder extends GetKnowledgeBaseSummaryFolderResponseModel.Raw {
        type: "folder";
    }
    interface Text extends GetKnowledgeBaseSummaryTextResponseModel.Raw {
        type: "text";
    }
    interface Url extends GetKnowledgeBaseSummaryUrlResponseModel.Raw {
        type: "url";
    }
}
