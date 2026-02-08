import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ListResponseMeta } from "./ListResponseMeta";
import { TestInvocationSummaryResponseModel } from "./TestInvocationSummaryResponseModel";
export declare const GetTestInvocationsPageResponseModel: core.serialization.ObjectSchema<serializers.GetTestInvocationsPageResponseModel.Raw, ElevenLabs.GetTestInvocationsPageResponseModel>;
export declare namespace GetTestInvocationsPageResponseModel {
    interface Raw {
        meta?: ListResponseMeta.Raw | null;
        results: TestInvocationSummaryResponseModel.Raw[];
        next_cursor?: string | null;
        has_more: boolean;
    }
}
