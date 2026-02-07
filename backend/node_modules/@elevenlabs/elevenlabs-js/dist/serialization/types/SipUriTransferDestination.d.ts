import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SipUriTransferDestination: core.serialization.ObjectSchema<serializers.SipUriTransferDestination.Raw, ElevenLabs.SipUriTransferDestination>;
export declare namespace SipUriTransferDestination {
    interface Raw {
        sip_uri: string;
    }
}
