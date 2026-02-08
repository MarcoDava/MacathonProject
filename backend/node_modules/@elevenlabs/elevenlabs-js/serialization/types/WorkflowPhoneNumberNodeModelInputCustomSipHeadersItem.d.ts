import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CustomSipHeader } from "./CustomSipHeader";
import { CustomSipHeaderWithDynamicVariable } from "./CustomSipHeaderWithDynamicVariable";
export declare const WorkflowPhoneNumberNodeModelInputCustomSipHeadersItem: core.serialization.Schema<serializers.WorkflowPhoneNumberNodeModelInputCustomSipHeadersItem.Raw, ElevenLabs.WorkflowPhoneNumberNodeModelInputCustomSipHeadersItem>;
export declare namespace WorkflowPhoneNumberNodeModelInputCustomSipHeadersItem {
    type Raw = WorkflowPhoneNumberNodeModelInputCustomSipHeadersItem.Dynamic | WorkflowPhoneNumberNodeModelInputCustomSipHeadersItem.Static;
    interface Dynamic extends CustomSipHeaderWithDynamicVariable.Raw {
        type: "dynamic";
    }
    interface Static extends CustomSipHeader.Raw {
        type: "static";
    }
}
