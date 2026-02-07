import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
import { BatchFailureResponseModel } from "../../../../../types/BatchFailureResponseModel";
import { RagIndexBatchSuccessfulResponseModel } from "../../../../../types/RagIndexBatchSuccessfulResponseModel";
export declare const KnowledgeBaseGetOrCreateRagIndexesResponseValue: core.serialization.Schema<serializers.conversationalAi.KnowledgeBaseGetOrCreateRagIndexesResponseValue.Raw, ElevenLabs.conversationalAi.KnowledgeBaseGetOrCreateRagIndexesResponseValue>;
export declare namespace KnowledgeBaseGetOrCreateRagIndexesResponseValue {
    type Raw = KnowledgeBaseGetOrCreateRagIndexesResponseValue.Success | KnowledgeBaseGetOrCreateRagIndexesResponseValue.Failure;
    interface Success extends RagIndexBatchSuccessfulResponseModel.Raw {
        status: "success";
    }
    interface Failure extends BatchFailureResponseModel.Raw {
        status: "failure";
    }
}
