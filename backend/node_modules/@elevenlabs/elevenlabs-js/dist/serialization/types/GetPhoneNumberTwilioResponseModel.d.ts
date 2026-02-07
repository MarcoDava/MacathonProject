import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PhoneNumberAgentInfo } from "./PhoneNumberAgentInfo";
export declare const GetPhoneNumberTwilioResponseModel: core.serialization.ObjectSchema<serializers.GetPhoneNumberTwilioResponseModel.Raw, ElevenLabs.GetPhoneNumberTwilioResponseModel>;
export declare namespace GetPhoneNumberTwilioResponseModel {
    interface Raw {
        phone_number: string;
        label: string;
        supports_inbound?: boolean | null;
        supports_outbound?: boolean | null;
        phone_number_id: string;
        assigned_agent?: PhoneNumberAgentInfo.Raw | null;
    }
}
