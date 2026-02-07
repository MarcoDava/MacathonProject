import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TransferToNumberResultSipSuccessModel: core.serialization.ObjectSchema<serializers.TransferToNumberResultSipSuccessModel.Raw, ElevenLabs.TransferToNumberResultSipSuccessModel>;
export declare namespace TransferToNumberResultSipSuccessModel {
    interface Raw {
        status?: "success" | null;
        transfer_number: string;
        reason?: string | null;
        note?: string | null;
    }
}
