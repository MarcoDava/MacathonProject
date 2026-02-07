import type * as ElevenLabs from "../../../../../../../../../../api/index";
import * as core from "../../../../../../../../../../core";
import type * as serializers from "../../../../../../../../../index";
import { BatchFailureResponseModel } from "../../../../../../../../../types/BatchFailureResponseModel";
import { KnowledgeBaseSummaryBatchSuccessfulResponseModel } from "../../../../../../../../../types/KnowledgeBaseSummaryBatchSuccessfulResponseModel";
export declare const SummariesGetResponseValue: core.serialization.Schema<serializers.conversationalAi.knowledgeBase.documents.SummariesGetResponseValue.Raw, ElevenLabs.conversationalAi.knowledgeBase.documents.SummariesGetResponseValue>;
export declare namespace SummariesGetResponseValue {
    type Raw = SummariesGetResponseValue.Success | SummariesGetResponseValue.Failure;
    interface Success extends KnowledgeBaseSummaryBatchSuccessfulResponseModel.Raw {
        status: "success";
    }
    interface Failure extends BatchFailureResponseModel.Raw {
        status: "failure";
    }
}
