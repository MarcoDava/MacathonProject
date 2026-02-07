import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PhoneNumberDynamicVariableTransferDestination: core.serialization.ObjectSchema<serializers.PhoneNumberDynamicVariableTransferDestination.Raw, ElevenLabs.PhoneNumberDynamicVariableTransferDestination>;
export declare namespace PhoneNumberDynamicVariableTransferDestination {
    interface Raw {
        phone_number: string;
    }
}
