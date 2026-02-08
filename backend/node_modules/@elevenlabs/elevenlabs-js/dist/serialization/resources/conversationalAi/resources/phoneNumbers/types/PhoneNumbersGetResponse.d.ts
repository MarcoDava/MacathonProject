import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
import { GetPhoneNumberSipTrunkResponseModel } from "../../../../../types/GetPhoneNumberSipTrunkResponseModel";
import { GetPhoneNumberTwilioResponseModel } from "../../../../../types/GetPhoneNumberTwilioResponseModel";
export declare const PhoneNumbersGetResponse: core.serialization.Schema<serializers.conversationalAi.PhoneNumbersGetResponse.Raw, ElevenLabs.conversationalAi.PhoneNumbersGetResponse>;
export declare namespace PhoneNumbersGetResponse {
    type Raw = PhoneNumbersGetResponse.Twilio | PhoneNumbersGetResponse.SipTrunk;
    interface Twilio extends GetPhoneNumberTwilioResponseModel.Raw {
        provider: "twilio";
    }
    interface SipTrunk extends GetPhoneNumberSipTrunkResponseModel.Raw {
        provider: "sip_trunk";
    }
}
