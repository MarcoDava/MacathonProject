import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UnitTestSummaryResponseModel } from "./UnitTestSummaryResponseModel";
export declare const GetTestsPageResponseModel: core.serialization.ObjectSchema<serializers.GetTestsPageResponseModel.Raw, ElevenLabs.GetTestsPageResponseModel>;
export declare namespace GetTestsPageResponseModel {
    interface Raw {
        tests: UnitTestSummaryResponseModel.Raw[];
        next_cursor?: string | null;
        has_more: boolean;
    }
}
