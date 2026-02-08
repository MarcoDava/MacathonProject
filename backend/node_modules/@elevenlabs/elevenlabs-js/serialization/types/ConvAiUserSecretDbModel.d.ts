import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConvAiUserSecretDbModel: core.serialization.ObjectSchema<serializers.ConvAiUserSecretDbModel.Raw, ElevenLabs.ConvAiUserSecretDbModel>;
export declare namespace ConvAiUserSecretDbModel {
    interface Raw {
        id: string;
        name: string;
        encrypted_value: string;
        nonce: string;
    }
}
