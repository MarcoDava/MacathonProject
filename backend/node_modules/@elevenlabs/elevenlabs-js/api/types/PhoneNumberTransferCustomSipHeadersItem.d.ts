import type * as ElevenLabs from "../index";
export type PhoneNumberTransferCustomSipHeadersItem = ElevenLabs.PhoneNumberTransferCustomSipHeadersItem.Dynamic | ElevenLabs.PhoneNumberTransferCustomSipHeadersItem.Static;
export declare namespace PhoneNumberTransferCustomSipHeadersItem {
    interface Dynamic extends ElevenLabs.CustomSipHeaderWithDynamicVariable {
        type: "dynamic";
    }
    interface Static extends ElevenLabs.CustomSipHeader {
        type: "static";
    }
}
