import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PhoneNumberAgentInfo: core.serialization.ObjectSchema<serializers.PhoneNumberAgentInfo.Raw, ElevenLabs.PhoneNumberAgentInfo>;
export declare namespace PhoneNumberAgentInfo {
    interface Raw {
        agent_id: string;
        agent_name: string;
    }
}
