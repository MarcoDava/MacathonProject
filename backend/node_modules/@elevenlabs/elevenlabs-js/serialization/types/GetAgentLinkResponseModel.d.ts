import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationTokenDbModel } from "./ConversationTokenDbModel";
export declare const GetAgentLinkResponseModel: core.serialization.ObjectSchema<serializers.GetAgentLinkResponseModel.Raw, ElevenLabs.GetAgentLinkResponseModel>;
export declare namespace GetAgentLinkResponseModel {
    interface Raw {
        agent_id: string;
        token?: ConversationTokenDbModel.Raw | null;
    }
}
