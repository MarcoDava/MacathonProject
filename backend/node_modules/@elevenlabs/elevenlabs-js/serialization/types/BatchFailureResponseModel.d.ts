import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BatchFailureResponseModel: core.serialization.ObjectSchema<serializers.BatchFailureResponseModel.Raw, ElevenLabs.BatchFailureResponseModel>;
export declare namespace BatchFailureResponseModel {
    interface Raw {
        error_code: number;
        error_status: string;
        error_message: string;
    }
}
