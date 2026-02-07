import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { Tool } from "./Tool";
export declare const ListMcpToolsResponseModel: core.serialization.ObjectSchema<serializers.ListMcpToolsResponseModel.Raw, ElevenLabs.ListMcpToolsResponseModel>;
export declare namespace ListMcpToolsResponseModel {
    interface Raw {
        success: boolean;
        tools: Tool.Raw[];
        error_message?: string | null;
    }
}
