import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DeleteProjectResponseModel: core.serialization.ObjectSchema<serializers.DeleteProjectResponseModel.Raw, ElevenLabs.DeleteProjectResponseModel>;
export declare namespace DeleteProjectResponseModel {
    interface Raw {
        status: string;
    }
}
