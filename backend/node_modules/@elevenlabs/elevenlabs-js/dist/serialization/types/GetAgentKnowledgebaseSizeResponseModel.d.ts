import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const GetAgentKnowledgebaseSizeResponseModel: core.serialization.ObjectSchema<serializers.GetAgentKnowledgebaseSizeResponseModel.Raw, ElevenLabs.GetAgentKnowledgebaseSizeResponseModel>;
export declare namespace GetAgentKnowledgebaseSizeResponseModel {
    interface Raw {
        number_of_pages: number;
    }
}
