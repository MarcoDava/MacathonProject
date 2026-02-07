import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
import { GetOrCreateRagIndexRequestModel } from "../../../../../../types/GetOrCreateRagIndexRequestModel";
export declare const BodyComputeRagIndexesInBatchV1ConvaiKnowledgeBaseRagIndexPost: core.serialization.Schema<serializers.conversationalAi.BodyComputeRagIndexesInBatchV1ConvaiKnowledgeBaseRagIndexPost.Raw, ElevenLabs.conversationalAi.BodyComputeRagIndexesInBatchV1ConvaiKnowledgeBaseRagIndexPost>;
export declare namespace BodyComputeRagIndexesInBatchV1ConvaiKnowledgeBaseRagIndexPost {
    interface Raw {
        items: GetOrCreateRagIndexRequestModel.Raw[];
    }
}
