import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PhoneNumberDynamicVariableTransferDestination } from "./PhoneNumberDynamicVariableTransferDestination";
import { PhoneNumberTransferDestination } from "./PhoneNumberTransferDestination";
import { SipUriDynamicVariableTransferDestination } from "./SipUriDynamicVariableTransferDestination";
import { SipUriTransferDestination } from "./SipUriTransferDestination";
export declare const WorkflowPhoneNumberNodeModelOutputTransferDestination: core.serialization.Schema<serializers.WorkflowPhoneNumberNodeModelOutputTransferDestination.Raw, ElevenLabs.WorkflowPhoneNumberNodeModelOutputTransferDestination>;
export declare namespace WorkflowPhoneNumberNodeModelOutputTransferDestination {
    type Raw = WorkflowPhoneNumberNodeModelOutputTransferDestination.Phone | WorkflowPhoneNumberNodeModelOutputTransferDestination.PhoneDynamicVariable | WorkflowPhoneNumberNodeModelOutputTransferDestination.SipUri | WorkflowPhoneNumberNodeModelOutputTransferDestination.SipUriDynamicVariable;
    interface Phone extends PhoneNumberTransferDestination.Raw {
        type: "phone";
    }
    interface PhoneDynamicVariable extends PhoneNumberDynamicVariableTransferDestination.Raw {
        type: "phone_dynamic_variable";
    }
    interface SipUri extends SipUriTransferDestination.Raw {
        type: "sip_uri";
    }
    interface SipUriDynamicVariable extends SipUriDynamicVariableTransferDestination.Raw {
        type: "sip_uri_dynamic_variable";
    }
}
