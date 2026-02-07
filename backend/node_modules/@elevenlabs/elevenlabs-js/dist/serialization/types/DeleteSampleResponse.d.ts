import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DeleteSampleResponse: core.serialization.ObjectSchema<serializers.DeleteSampleResponse.Raw, ElevenLabs.DeleteSampleResponse>;
export declare namespace DeleteSampleResponse {
    interface Raw {
        status: string;
    }
}
