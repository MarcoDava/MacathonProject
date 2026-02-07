import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const VerifyPvcVoiceCaptchaResponseModel: core.serialization.ObjectSchema<serializers.VerifyPvcVoiceCaptchaResponseModel.Raw, ElevenLabs.VerifyPvcVoiceCaptchaResponseModel>;
export declare namespace VerifyPvcVoiceCaptchaResponseModel {
    interface Raw {
        status: string;
    }
}
