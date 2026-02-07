import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateAgentResponseModel: core.serialization.ObjectSchema<serializers.CreateAgentResponseModel.Raw, ElevenLabs.CreateAgentResponseModel>;
export declare namespace CreateAgentResponseModel {
    interface Raw {
        agent_id: string;
    }
}
