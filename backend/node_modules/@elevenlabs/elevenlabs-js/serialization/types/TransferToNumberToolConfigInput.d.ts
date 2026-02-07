import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PhoneNumberTransfer } from "./PhoneNumberTransfer";
export declare const TransferToNumberToolConfigInput: core.serialization.ObjectSchema<serializers.TransferToNumberToolConfigInput.Raw, ElevenLabs.TransferToNumberToolConfigInput>;
export declare namespace TransferToNumberToolConfigInput {
    interface Raw {
        transfers: PhoneNumberTransfer.Raw[];
        enable_client_message?: boolean | null;
    }
}
