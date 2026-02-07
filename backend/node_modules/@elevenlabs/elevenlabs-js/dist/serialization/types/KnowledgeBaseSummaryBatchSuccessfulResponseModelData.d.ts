import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { GetKnowledgeBaseSummaryFileResponseModel } from "./GetKnowledgeBaseSummaryFileResponseModel";
import { GetKnowledgeBaseSummaryFolderResponseModel } from "./GetKnowledgeBaseSummaryFolderResponseModel";
import { GetKnowledgeBaseSummaryTextResponseModel } from "./GetKnowledgeBaseSummaryTextResponseModel";
import { GetKnowledgeBaseSummaryUrlResponseModel } from "./GetKnowledgeBaseSummaryUrlResponseModel";
export declare const KnowledgeBaseSummaryBatchSuccessfulResponseModelData: core.serialization.Schema<serializers.KnowledgeBaseSummaryBatchSuccessfulResponseModelData.Raw, ElevenLabs.KnowledgeBaseSummaryBatchSuccessfulResponseModelData>;
export declare namespace KnowledgeBaseSummaryBatchSuccessfulResponseModelData {
    type Raw = KnowledgeBaseSummaryBatchSuccessfulResponseModelData.File | KnowledgeBaseSummaryBatchSuccessfulResponseModelData.Folder | KnowledgeBaseSummaryBatchSuccessfulResponseModelData.Text | KnowledgeBaseSummaryBatchSuccessfulResponseModelData.Url;
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
