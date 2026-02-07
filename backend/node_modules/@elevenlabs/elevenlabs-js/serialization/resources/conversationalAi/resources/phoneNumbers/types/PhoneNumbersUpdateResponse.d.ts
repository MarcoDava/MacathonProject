import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
import { GetPhoneNumberSipTrunkResponseModel } from "../../../../../types/GetPhoneNumberSipTrunkResponseModel";
import { GetPhoneNumberTwilioResponseModel } from "../../../../../types/GetPhoneNumberTwilioResponseModel";
export declare const PhoneNumbersUpdateResponse: core.serialization.Schema<serializers.conversationalAi.PhoneNumbersUpdateResponse.Raw, ElevenLabs.conversationalAi.PhoneNumbersUpdateResponse>;
export declare namespace PhoneNumbersUpdateResponse {
    type Raw = PhoneNumbersUpdateResponse.Twilio | PhoneNumbersUpdateResponse.SipTrunk;
    interface Twilio extends GetPhoneNumberTwilioResponseModel.Raw {
        provider: "twilio";
    }
    interface SipTrunk extends GetPhoneNumberSipTrunkResponseModel.Raw {
        provider: "sip_trunk";
    }
}
