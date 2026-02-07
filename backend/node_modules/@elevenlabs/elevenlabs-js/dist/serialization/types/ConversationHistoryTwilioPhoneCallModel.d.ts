import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationHistoryTwilioPhoneCallModelDirection } from "./ConversationHistoryTwilioPhoneCallModelDirection";
export declare const ConversationHistoryTwilioPhoneCallModel: core.serialization.ObjectSchema<serializers.ConversationHistoryTwilioPhoneCallModel.Raw, ElevenLabs.ConversationHistoryTwilioPhoneCallModel>;
export declare namespace ConversationHistoryTwilioPhoneCallModel {
    interface Raw {
        direction: ConversationHistoryTwilioPhoneCallModelDirection.Raw;
        phone_number_id: string;
        agent_number: string;
        external_number: string;
        stream_sid: string;
        call_sid: string;
    }
}
