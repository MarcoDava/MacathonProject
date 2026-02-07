import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const VoiceResponseModelSafetyControl: core.serialization.Schema<serializers.VoiceResponseModelSafetyControl.Raw, ElevenLabs.VoiceResponseModelSafetyControl>;
export declare namespace VoiceResponseModelSafetyControl {
    type Raw = "NONE" | "BAN" | "CAPTCHA" | "ENTERPRISE_BAN" | "ENTERPRISE_CAPTCHA";
}
