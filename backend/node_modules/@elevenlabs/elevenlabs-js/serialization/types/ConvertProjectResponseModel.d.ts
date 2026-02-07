import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConvertProjectResponseModel: core.serialization.ObjectSchema<serializers.ConvertProjectResponseModel.Raw, ElevenLabs.ConvertProjectResponseModel>;
export declare namespace ConvertProjectResponseModel {
    interface Raw {
        status: string;
    }
}
