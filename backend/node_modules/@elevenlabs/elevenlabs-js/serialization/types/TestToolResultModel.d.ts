import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TestToolResultModel: core.serialization.ObjectSchema<serializers.TestToolResultModel.Raw, ElevenLabs.TestToolResultModel>;
export declare namespace TestToolResultModel {
    interface Raw {
        status?: "success" | null;
        reason?: string | null;
    }
}
