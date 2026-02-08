import type * as ElevenLabs from "../index";
export type WorkflowPhoneNumberNodeModelOutputTransferDestination = ElevenLabs.WorkflowPhoneNumberNodeModelOutputTransferDestination.Phone | ElevenLabs.WorkflowPhoneNumberNodeModelOutputTransferDestination.PhoneDynamicVariable | ElevenLabs.WorkflowPhoneNumberNodeModelOutputTransferDestination.SipUri | ElevenLabs.WorkflowPhoneNumberNodeModelOutputTransferDestination.SipUriDynamicVariable;
export declare namespace WorkflowPhoneNumberNodeModelOutputTransferDestination {
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
