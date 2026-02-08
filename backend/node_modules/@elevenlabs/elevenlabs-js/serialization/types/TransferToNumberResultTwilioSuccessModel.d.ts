import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TransferToNumberResultTwilioSuccessModel: core.serialization.ObjectSchema<serializers.TransferToNumberResultTwilioSuccessModel.Raw, ElevenLabs.TransferToNumberResultTwilioSuccessModel>;
export declare namespace TransferToNumberResultTwilioSuccessModel {
    interface Raw {
        status?: "success" | null;
        transfer_number: string;
        reason?: string | null;
        client_message?: string | null;
        agent_message: string;
        conference_name: string;
        note?: string | null;
    }
}
