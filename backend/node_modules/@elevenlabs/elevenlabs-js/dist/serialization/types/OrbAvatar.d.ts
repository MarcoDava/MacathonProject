import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const OrbAvatar: core.serialization.ObjectSchema<serializers.OrbAvatar.Raw, ElevenLabs.OrbAvatar>;
export declare namespace OrbAvatar {
    interface Raw {
        color_1?: string | null;
        color_2?: string | null;
    }
}
