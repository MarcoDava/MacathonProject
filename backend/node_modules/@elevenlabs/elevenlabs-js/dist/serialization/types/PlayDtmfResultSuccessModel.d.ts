import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PlayDtmfResultSuccessModel: core.serialization.ObjectSchema<serializers.PlayDtmfResultSuccessModel.Raw, ElevenLabs.PlayDtmfResultSuccessModel>;
export declare namespace PlayDtmfResultSuccessModel {
    interface Raw {
        status?: "success" | null;
        dtmf_tones: string;
        reason?: string | null;
    }
}
