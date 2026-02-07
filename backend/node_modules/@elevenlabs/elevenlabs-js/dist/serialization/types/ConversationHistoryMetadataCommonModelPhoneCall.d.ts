import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationHistorySipTrunkingPhoneCallModel } from "./ConversationHistorySipTrunkingPhoneCallModel";
import { ConversationHistoryTwilioPhoneCallModel } from "./ConversationHistoryTwilioPhoneCallModel";
export declare const ConversationHistoryMetadataCommonModelPhoneCall: core.serialization.Schema<serializers.ConversationHistoryMetadataCommonModelPhoneCall.Raw, ElevenLabs.ConversationHistoryMetadataCommonModelPhoneCall>;
export declare namespace ConversationHistoryMetadataCommonModelPhoneCall {
    type Raw = ConversationHistoryMetadataCommonModelPhoneCall.SipTrunking | ConversationHistoryMetadataCommonModelPhoneCall.Twilio;
    interface SipTrunking extends ConversationHistorySipTrunkingPhoneCallModel.Raw {
        type: "sip_trunking";
    }
    interface Twilio extends ConversationHistoryTwilioPhoneCallModel.Raw {
        type: "twilio";
    }
}
