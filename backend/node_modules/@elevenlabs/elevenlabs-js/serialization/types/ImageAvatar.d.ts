import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ImageAvatar: core.serialization.ObjectSchema<serializers.ImageAvatar.Raw, ElevenLabs.ImageAvatar>;
export declare namespace ImageAvatar {
    interface Raw {
        url?: string | null;
    }
}
