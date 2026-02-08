import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PhoneNumberTransferDestination: core.serialization.ObjectSchema<serializers.PhoneNumberTransferDestination.Raw, ElevenLabs.PhoneNumberTransferDestination>;
export declare namespace PhoneNumberTransferDestination {
    interface Raw {
        phone_number: string;
    }
}
