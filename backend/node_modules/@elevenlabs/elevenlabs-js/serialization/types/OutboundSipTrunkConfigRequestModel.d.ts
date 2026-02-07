import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { SipMediaEncryptionEnum } from "./SipMediaEncryptionEnum";
import { SipTrunkCredentialsRequestModel } from "./SipTrunkCredentialsRequestModel";
import { SipTrunkTransportEnum } from "./SipTrunkTransportEnum";
export declare const OutboundSipTrunkConfigRequestModel: core.serialization.ObjectSchema<serializers.OutboundSipTrunkConfigRequestModel.Raw, ElevenLabs.OutboundSipTrunkConfigRequestModel>;
export declare namespace OutboundSipTrunkConfigRequestModel {
    interface Raw {
        address: string;
        transport?: SipTrunkTransportEnum.Raw | null;
        media_encryption?: SipMediaEncryptionEnum.Raw | null;
        headers?: Record<string, string> | null;
        credentials?: SipTrunkCredentialsRequestModel.Raw | null;
    }
}
