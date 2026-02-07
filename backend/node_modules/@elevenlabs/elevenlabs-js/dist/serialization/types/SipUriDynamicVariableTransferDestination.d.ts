import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SipUriDynamicVariableTransferDestination: core.serialization.ObjectSchema<serializers.SipUriDynamicVariableTransferDestination.Raw, ElevenLabs.SipUriDynamicVariableTransferDestination>;
export declare namespace SipUriDynamicVariableTransferDestination {
    interface Raw {
        sip_uri: string;
    }
}
