import type * as ElevenLabs from "../index";
export type WorkflowPhoneNumberNodeModelInputTransferDestination = ElevenLabs.WorkflowPhoneNumberNodeModelInputTransferDestination.Phone | ElevenLabs.WorkflowPhoneNumberNodeModelInputTransferDestination.PhoneDynamicVariable | ElevenLabs.WorkflowPhoneNumberNodeModelInputTransferDestination.SipUri | ElevenLabs.WorkflowPhoneNumberNodeModelInputTransferDestination.SipUriDynamicVariable;
export declare namespace WorkflowPhoneNumberNodeModelInputTransferDestination {
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
