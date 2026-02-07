import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TokenResponseModel: core.serialization.ObjectSchema<serializers.TokenResponseModel.Raw, ElevenLabs.TokenResponseModel>;
export declare namespace TokenResponseModel {
    interface Raw {
        token: string;
    }
}
