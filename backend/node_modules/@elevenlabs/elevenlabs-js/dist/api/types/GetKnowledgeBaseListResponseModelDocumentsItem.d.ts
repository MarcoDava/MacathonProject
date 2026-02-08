import type * as ElevenLabs from "../index";
export type GetKnowledgeBaseListResponseModelDocumentsItem = ElevenLabs.GetKnowledgeBaseListResponseModelDocumentsItem.File_ | ElevenLabs.GetKnowledgeBaseListResponseModelDocumentsItem.Folder | ElevenLabs.GetKnowledgeBaseListResponseModelDocumentsItem.Text | ElevenLabs.GetKnowledgeBaseListResponseModelDocumentsItem.Url;
export declare namespace GetKnowledgeBaseListResponseModelDocumentsItem {
    interface File_ extends ElevenLabs.GetKnowledgeBaseSummaryFileResponseModel {
        type: "file";
    }
    interface Folder extends ElevenLabs.GetKnowledgeBaseSummaryFolderResponseModel {
        type: "folder";
    }
    interface Text extends ElevenLabs.GetKnowledgeBaseSummaryTextResponseModel {
        type: "text";
    }
    interface Url extends ElevenLabs.GetKnowledgeBaseSummaryUrlResponseModel {
        type: "url";
    }
}
