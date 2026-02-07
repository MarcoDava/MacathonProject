import type * as ElevenLabs from "../index";
export type KnowledgeBaseSummaryBatchSuccessfulResponseModelData = ElevenLabs.KnowledgeBaseSummaryBatchSuccessfulResponseModelData.File_ | ElevenLabs.KnowledgeBaseSummaryBatchSuccessfulResponseModelData.Folder | ElevenLabs.KnowledgeBaseSummaryBatchSuccessfulResponseModelData.Text | ElevenLabs.KnowledgeBaseSummaryBatchSuccessfulResponseModelData.Url;
export declare namespace KnowledgeBaseSummaryBatchSuccessfulResponseModelData {
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
