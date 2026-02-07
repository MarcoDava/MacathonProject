import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AllowlistItem } from "./AllowlistItem";
export declare const AuthSettings: core.serialization.ObjectSchema<serializers.AuthSettings.Raw, ElevenLabs.AuthSettings>;
export declare namespace AuthSettings {
    interface Raw {
        enable_auth?: boolean | null;
        allowlist?: AllowlistItem.Raw[] | null;
        shareable_token?: string | null;
    }
}
