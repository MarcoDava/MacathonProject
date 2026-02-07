import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { KnowledgeBaseSummaryBatchSuccessfulResponseModelData } from "./KnowledgeBaseSummaryBatchSuccessfulResponseModelData";
export declare const KnowledgeBaseSummaryBatchSuccessfulResponseModel: core.serialization.ObjectSchema<serializers.KnowledgeBaseSummaryBatchSuccessfulResponseModel.Raw, ElevenLabs.KnowledgeBaseSummaryBatchSuccessfulResponseModel>;
export declare namespace KnowledgeBaseSummaryBatchSuccessfulResponseModel {
    interface Raw {
        data: KnowledgeBaseSummaryBatchSuccessfulResponseModelData.Raw;
    }
}
