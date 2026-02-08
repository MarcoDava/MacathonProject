import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SipTrunkTransportEnum: core.serialization.Schema<serializers.SipTrunkTransportEnum.Raw, ElevenLabs.SipTrunkTransportEnum>;
export declare namespace SipTrunkTransportEnum {
    type Raw = "auto" | "udp" | "tcp" | "tls";
}
