import type * as ElevenLabs from "../index";
export type WorkflowPhoneNumberNodeModelInputCustomSipHeadersItem = ElevenLabs.WorkflowPhoneNumberNodeModelInputCustomSipHeadersItem.Dynamic | ElevenLabs.WorkflowPhoneNumberNodeModelInputCustomSipHeadersItem.Static;
export declare namespace WorkflowPhoneNumberNodeModelInputCustomSipHeadersItem {
    interface Dynamic extends ElevenLabs.CustomSipHeaderWithDynamicVariable {
        type: "dynamic";
    }
    interface Static extends ElevenLabs.CustomSipHeader {
        type: "static";
    }
}
