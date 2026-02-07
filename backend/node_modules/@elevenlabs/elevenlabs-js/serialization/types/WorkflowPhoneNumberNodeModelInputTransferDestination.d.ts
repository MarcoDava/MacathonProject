import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PhoneNumberDynamicVariableTransferDestination } from "./PhoneNumberDynamicVariableTransferDestination";
import { PhoneNumberTransferDestination } from "./PhoneNumberTransferDestination";
import { SipUriDynamicVariableTransferDestination } from "./SipUriDynamicVariableTransferDestination";
import { SipUriTransferDestination } from "./SipUriTransferDestination";
export declare const WorkflowPhoneNumberNodeModelInputTransferDestination: core.serialization.Schema<serializers.WorkflowPhoneNumberNodeModelInputTransferDestination.Raw, ElevenLabs.WorkflowPhoneNumberNodeModelInputTransferDestination>;
export declare namespace WorkflowPhoneNumberNodeModelInputTransferDestination {
    type Raw = WorkflowPhoneNumberNodeModelInputTransferDestination.Phone | WorkflowPhoneNumberNodeModelInputTransferDestination.PhoneDynamicVariable | WorkflowPhoneNumberNodeModelInputTransferDestination.SipUri | WorkflowPhoneNumberNodeModelInputTransferDestination.SipUriDynamicVariable;
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
