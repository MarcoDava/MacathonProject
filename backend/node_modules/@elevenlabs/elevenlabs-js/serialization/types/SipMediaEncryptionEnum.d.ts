import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SipMediaEncryptionEnum: core.serialization.Schema<serializers.SipMediaEncryptionEnum.Raw, ElevenLabs.SipMediaEncryptionEnum>;
export declare namespace SipMediaEncryptionEnum {
    type Raw = "disabled" | "allowed" | "required";
}
