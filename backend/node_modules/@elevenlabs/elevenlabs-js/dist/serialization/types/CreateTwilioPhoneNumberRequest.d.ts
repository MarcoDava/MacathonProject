import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { RegionConfigRequest } from "./RegionConfigRequest";
export declare const CreateTwilioPhoneNumberRequest: core.serialization.ObjectSchema<serializers.CreateTwilioPhoneNumberRequest.Raw, ElevenLabs.CreateTwilioPhoneNumberRequest>;
export declare namespace CreateTwilioPhoneNumberRequest {
    interface Raw {
        phone_number: string;
        label: string;
        supports_inbound?: boolean | null;
        supports_outbound?: boolean | null;
        sid: string;
        token: string;
        region_config?: RegionConfigRequest.Raw | null;
    }
}
