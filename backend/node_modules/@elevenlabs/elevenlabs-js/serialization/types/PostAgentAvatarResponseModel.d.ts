import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PostAgentAvatarResponseModel: core.serialization.ObjectSchema<serializers.PostAgentAvatarResponseModel.Raw, ElevenLabs.PostAgentAvatarResponseModel>;
export declare namespace PostAgentAvatarResponseModel {
    interface Raw {
        agent_id: string;
        avatar_url?: string | null;
    }
}
