import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WidgetConfigResponse } from "./WidgetConfigResponse";
export declare const GetAgentEmbedResponseModel: core.serialization.ObjectSchema<serializers.GetAgentEmbedResponseModel.Raw, ElevenLabs.GetAgentEmbedResponseModel>;
export declare namespace GetAgentEmbedResponseModel {
    interface Raw {
        agent_id: string;
        widget_config: WidgetConfigResponse.Raw;
    }
}
