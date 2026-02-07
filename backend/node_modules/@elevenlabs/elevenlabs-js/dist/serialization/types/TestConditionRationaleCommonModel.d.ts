import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TestConditionRationaleCommonModel: core.serialization.ObjectSchema<serializers.TestConditionRationaleCommonModel.Raw, ElevenLabs.TestConditionRationaleCommonModel>;
export declare namespace TestConditionRationaleCommonModel {
    interface Raw {
        messages?: string[] | null;
        summary?: string | null;
    }
}
