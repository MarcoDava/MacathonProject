import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TestsFeatureUsageCommonModel: core.serialization.ObjectSchema<serializers.TestsFeatureUsageCommonModel.Raw, ElevenLabs.TestsFeatureUsageCommonModel>;
export declare namespace TestsFeatureUsageCommonModel {
    interface Raw {
        enabled?: boolean | null;
        tests_ran_after_last_modification?: boolean | null;
        tests_ran_in_last_7_days?: boolean | null;
    }
}
