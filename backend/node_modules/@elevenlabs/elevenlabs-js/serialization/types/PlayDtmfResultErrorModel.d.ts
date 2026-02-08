import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PlayDtmfResultErrorModel: core.serialization.ObjectSchema<serializers.PlayDtmfResultErrorModel.Raw, ElevenLabs.PlayDtmfResultErrorModel>;
export declare namespace PlayDtmfResultErrorModel {
    interface Raw {
        status?: "error" | null;
        error: string;
        details?: string | null;
    }
}
