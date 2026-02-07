import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { EmbeddingModelEnum } from "./EmbeddingModelEnum";
import { RagDocumentIndexUsage } from "./RagDocumentIndexUsage";
import { RagIndexStatus } from "./RagIndexStatus";
export declare const RagDocumentIndexResponseModel: core.serialization.ObjectSchema<serializers.RagDocumentIndexResponseModel.Raw, ElevenLabs.RagDocumentIndexResponseModel>;
export declare namespace RagDocumentIndexResponseModel {
    interface Raw {
        id: string;
        model: EmbeddingModelEnum.Raw;
        status: RagIndexStatus.Raw;
        progress_percentage: number;
        document_model_index_usage: RagDocumentIndexUsage.Raw;
    }
}
