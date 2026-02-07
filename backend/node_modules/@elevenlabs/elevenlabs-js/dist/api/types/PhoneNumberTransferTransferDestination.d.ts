import type * as ElevenLabs from "../index";
export type PhoneNumberTransferTransferDestination = ElevenLabs.PhoneNumberTransferTransferDestination.Phone | ElevenLabs.PhoneNumberTransferTransferDestination.PhoneDynamicVariable | ElevenLabs.PhoneNumberTransferTransferDestination.SipUri | ElevenLabs.PhoneNumberTransferTransferDestination.SipUriDynamicVariable;
export declare namespace PhoneNumberTransferTransferDestination {
    interface Phone extends ElevenLabs.PhoneNumberTransferDestination {
        type: "phone";
    }
    interface PhoneDynamicVariable extends ElevenLabs.PhoneNumberDynamicVariableTransferDestination {
        type: "phone_dynamic_variable";
    }
    interface SipUri extends ElevenLabs.SipUriTransferDestination {
        type: "sip_uri";
    }
    interface SipUriDynamicVariable extends ElevenLabs.SipUriDynamicVariableTransferDestination {
        type: "sip_uri_dynamic_variable";
    }
}
