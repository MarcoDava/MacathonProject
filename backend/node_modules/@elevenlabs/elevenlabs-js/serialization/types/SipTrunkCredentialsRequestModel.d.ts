import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SipTrunkCredentialsRequestModel: core.serialization.ObjectSchema<serializers.SipTrunkCredentialsRequestModel.Raw, ElevenLabs.SipTrunkCredentialsRequestModel>;
export declare namespace SipTrunkCredentialsRequestModel {
    interface Raw {
        username: string;
        password?: string | null;
    }
}
