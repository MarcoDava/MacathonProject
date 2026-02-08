import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CustomSipHeader } from "./CustomSipHeader";
import { CustomSipHeaderWithDynamicVariable } from "./CustomSipHeaderWithDynamicVariable";
export declare const WorkflowPhoneNumberNodeModelOutputCustomSipHeadersItem: core.serialization.Schema<serializers.WorkflowPhoneNumberNodeModelOutputCustomSipHeadersItem.Raw, ElevenLabs.WorkflowPhoneNumberNodeModelOutputCustomSipHeadersItem>;
export declare namespace WorkflowPhoneNumberNodeModelOutputCustomSipHeadersItem {
    type Raw = WorkflowPhoneNumberNodeModelOutputCustomSipHeadersItem.Dynamic | WorkflowPhoneNumberNodeModelOutputCustomSipHeadersItem.Static;
    interface Dynamic extends CustomSipHeaderWithDynamicVariable.Raw {
        type: "dynamic";
    }
    interface Static extends CustomSipHeader.Raw {
        type: "static";
    }
}
