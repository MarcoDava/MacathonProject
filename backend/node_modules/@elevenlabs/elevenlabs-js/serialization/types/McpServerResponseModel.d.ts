import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { McpServerConfigOutput } from "./McpServerConfigOutput";
import { McpServerMetadataResponseModel } from "./McpServerMetadataResponseModel";
import { McpServerResponseModelDependentAgentsItem } from "./McpServerResponseModelDependentAgentsItem";
import { ResourceAccessInfo } from "./ResourceAccessInfo";
export declare const McpServerResponseModel: core.serialization.ObjectSchema<serializers.McpServerResponseModel.Raw, ElevenLabs.McpServerResponseModel>;
export declare namespace McpServerResponseModel {
    interface Raw {
        id: string;
        config: McpServerConfigOutput.Raw;
        access_info?: ResourceAccessInfo.Raw | null;
        dependent_agents?: McpServerResponseModelDependentAgentsItem.Raw[] | null;
        metadata: McpServerMetadataResponseModel.Raw;
    }
}
