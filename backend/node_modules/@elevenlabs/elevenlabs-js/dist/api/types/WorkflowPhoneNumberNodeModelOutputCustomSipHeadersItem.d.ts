import type * as ElevenLabs from "../index";
export type WorkflowPhoneNumberNodeModelOutputCustomSipHeadersItem = ElevenLabs.WorkflowPhoneNumberNodeModelOutputCustomSipHeadersItem.Dynamic | ElevenLabs.WorkflowPhoneNumberNodeModelOutputCustomSipHeadersItem.Static;
export declare namespace WorkflowPhoneNumberNodeModelOutputCustomSipHeadersItem {
    interface Dynamic extends ElevenLabs.CustomSipHeaderWithDynamicVariable {
        type: "dynamic";
    }
    interface Static extends ElevenLabs.CustomSipHeader {
        type: "static";
    }
}
