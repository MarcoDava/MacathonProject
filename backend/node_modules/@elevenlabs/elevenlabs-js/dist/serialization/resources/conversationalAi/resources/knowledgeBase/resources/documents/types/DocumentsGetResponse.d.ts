import type * as ElevenLabs from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import type * as serializers from "../../../../../../../index";
import { GetKnowledgeBaseFileResponseModel } from "../../../../../../../types/GetKnowledgeBaseFileResponseModel";
import { GetKnowledgeBaseFolderResponseModel } from "../../../../../../../types/GetKnowledgeBaseFolderResponseModel";
import { GetKnowledgeBaseTextResponseModel } from "../../../../../../../types/GetKnowledgeBaseTextResponseModel";
import { GetKnowledgeBaseUrlResponseModel } from "../../../../../../../types/GetKnowledgeBaseUrlResponseModel";
export declare const DocumentsGetResponse: core.serialization.Schema<serializers.conversationalAi.knowledgeBase.DocumentsGetResponse.Raw, ElevenLabs.conversationalAi.knowledgeBase.DocumentsGetResponse>;
export declare namespace DocumentsGetResponse {
    type Raw = DocumentsGetResponse.Url | DocumentsGetResponse.File | DocumentsGetResponse.Text | DocumentsGetResponse.Folder;
    interface Url extends GetKnowledgeBaseUrlResponseModel.Raw {
        type: "url";
    }
    interface File extends GetKnowledgeBaseFileResponseModel.Raw {
        type: "file";
    }
    interface Text extends GetKnowledgeBaseTextResponseModel.Raw {
        type: "text";
    }
    interface Folder extends GetKnowledgeBaseFolderResponseModel.Raw {
        type: "folder";
    }
}
