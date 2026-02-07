import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreatePhoneNumberResponseModel: core.serialization.ObjectSchema<serializers.CreatePhoneNumberResponseModel.Raw, ElevenLabs.CreatePhoneNumberResponseModel>;
export declare namespace CreatePhoneNumberResponseModel {
    interface Raw {
        phone_number_id: string;
    }
}
