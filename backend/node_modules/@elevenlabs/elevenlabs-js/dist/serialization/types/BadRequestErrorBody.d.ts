import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BadRequestErrorBody: core.serialization.ObjectSchema<serializers.BadRequestErrorBody.Raw, ElevenLabs.BadRequestErrorBody>;
export declare namespace BadRequestErrorBody {
    interface Raw {
        error?: string | null;
        message?: string | null;
    }
}
