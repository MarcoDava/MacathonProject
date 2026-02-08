import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
import { GetPhoneNumberSipTrunkResponseModel } from "../../../../../types/GetPhoneNumberSipTrunkResponseModel";
import { GetPhoneNumberTwilioResponseModel } from "../../../../../types/GetPhoneNumberTwilioResponseModel";
export declare const PhoneNumbersListResponseItem: core.serialization.Schema<serializers.conversationalAi.PhoneNumbersListResponseItem.Raw, ElevenLabs.conversationalAi.PhoneNumbersListResponseItem>;
export declare namespace PhoneNumbersListResponseItem {
    type Raw = PhoneNumbersListResponseItem.Twilio | PhoneNumbersListResponseItem.SipTrunk;
    interface Twilio extends GetPhoneNumberTwilioResponseModel.Raw {
        provider: "twilio";
    }
    interface SipTrunk extends GetPhoneNumberSipTrunkResponseModel.Raw {
        provider: "sip_trunk";
    }
}
