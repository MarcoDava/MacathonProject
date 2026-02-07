import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CustomSipHeader } from "./CustomSipHeader";
import { CustomSipHeaderWithDynamicVariable } from "./CustomSipHeaderWithDynamicVariable";
export declare const PhoneNumberTransferCustomSipHeadersItem: core.serialization.Schema<serializers.PhoneNumberTransferCustomSipHeadersItem.Raw, ElevenLabs.PhoneNumberTransferCustomSipHeadersItem>;
export declare namespace PhoneNumberTransferCustomSipHeadersItem {
    type Raw = PhoneNumberTransferCustomSipHeadersItem.Dynamic | PhoneNumberTransferCustomSipHeadersItem.Static;
    interface Dynamic extends CustomSipHeaderWithDynamicVariable.Raw {
        type: "dynamic";
    }
    interface Static extends CustomSipHeader.Raw {
        type: "static";
    }
}
