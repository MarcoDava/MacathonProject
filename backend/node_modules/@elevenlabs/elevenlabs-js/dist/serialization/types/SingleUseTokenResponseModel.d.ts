import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SingleUseTokenResponseModel: core.serialization.ObjectSchema<serializers.SingleUseTokenResponseModel.Raw, ElevenLabs.SingleUseTokenResponseModel>;
export declare namespace SingleUseTokenResponseModel {
    interface Raw {
        token: string;
    }
}
