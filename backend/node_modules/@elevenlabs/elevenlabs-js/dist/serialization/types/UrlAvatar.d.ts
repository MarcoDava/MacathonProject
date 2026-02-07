import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UrlAvatar: core.serialization.ObjectSchema<serializers.UrlAvatar.Raw, ElevenLabs.UrlAvatar>;
export declare namespace UrlAvatar {
    interface Raw {
        custom_url?: string | null;
    }
}
