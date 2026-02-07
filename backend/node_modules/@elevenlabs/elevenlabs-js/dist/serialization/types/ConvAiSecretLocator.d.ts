import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConvAiSecretLocator: core.serialization.ObjectSchema<serializers.ConvAiSecretLocator.Raw, ElevenLabs.ConvAiSecretLocator>;
export declare namespace ConvAiSecretLocator {
    interface Raw {
        secret_id: string;
    }
}
