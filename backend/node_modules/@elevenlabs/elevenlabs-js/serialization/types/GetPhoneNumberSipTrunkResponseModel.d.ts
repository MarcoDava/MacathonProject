import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { GetPhoneNumberInboundSipTrunkConfigResponseModel } from "./GetPhoneNumberInboundSipTrunkConfigResponseModel";
import { GetPhoneNumberOutboundSipTrunkConfigResponseModel } from "./GetPhoneNumberOutboundSipTrunkConfigResponseModel";
import { LivekitStackType } from "./LivekitStackType";
import { PhoneNumberAgentInfo } from "./PhoneNumberAgentInfo";
export declare const GetPhoneNumberSipTrunkResponseModel: core.serialization.ObjectSchema<serializers.GetPhoneNumberSipTrunkResponseModel.Raw, ElevenLabs.GetPhoneNumberSipTrunkResponseModel>;
export declare namespace GetPhoneNumberSipTrunkResponseModel {
    interface Raw {
        phone_number: string;
        label: string;
        supports_inbound?: boolean | null;
        supports_outbound?: boolean | null;
        phone_number_id: string;
        assigned_agent?: PhoneNumberAgentInfo.Raw | null;
        provider_config?: GetPhoneNumberOutboundSipTrunkConfigResponseModel.Raw | null;
        outbound_trunk?: GetPhoneNumberOutboundSipTrunkConfigResponseModel.Raw | null;
        inbound_trunk?: GetPhoneNumberInboundSipTrunkConfigResponseModel.Raw | null;
        livekit_stack: LivekitStackType.Raw;
    }
}
