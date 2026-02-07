import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AuthConnectionLocator: core.serialization.ObjectSchema<serializers.AuthConnectionLocator.Raw, ElevenLabs.AuthConnectionLocator>;
export declare namespace AuthConnectionLocator {
    interface Raw {
        auth_connection_id: string;
    }
}
