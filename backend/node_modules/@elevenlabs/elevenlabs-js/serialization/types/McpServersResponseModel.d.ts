import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { McpServerResponseModel } from "./McpServerResponseModel";
export declare const McpServersResponseModel: core.serialization.ObjectSchema<serializers.McpServersResponseModel.Raw, ElevenLabs.McpServersResponseModel>;
export declare namespace McpServersResponseModel {
    interface Raw {
        mcp_servers: McpServerResponseModel.Raw[];
    }
}
