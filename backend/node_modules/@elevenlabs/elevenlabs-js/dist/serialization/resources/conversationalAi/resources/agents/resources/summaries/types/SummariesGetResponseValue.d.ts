import type * as ElevenLabs from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import type * as serializers from "../../../../../../../index";
import { AgentSummaryBatchSuccessfulResponseModel } from "../../../../../../../types/AgentSummaryBatchSuccessfulResponseModel";
import { BatchFailureResponseModel } from "../../../../../../../types/BatchFailureResponseModel";
export declare const SummariesGetResponseValue: core.serialization.Schema<serializers.conversationalAi.agents.SummariesGetResponseValue.Raw, ElevenLabs.conversationalAi.agents.SummariesGetResponseValue>;
export declare namespace SummariesGetResponseValue {
    type Raw = SummariesGetResponseValue.Success | SummariesGetResponseValue.Failure;
    interface Success extends AgentSummaryBatchSuccessfulResponseModel.Raw {
        status: "success";
    }
    interface Failure extends BatchFailureResponseModel.Raw {
        status: "failure";
    }
}
