import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ToolResponseModel } from "./ToolResponseModel";
export declare const ToolsResponseModel: core.serialization.ObjectSchema<serializers.ToolsResponseModel.Raw, ElevenLabs.ToolsResponseModel>;
export declare namespace ToolsResponseModel {
    interface Raw {
        tools: ToolResponseModel.Raw[];
        next_cursor?: string | null;
        has_more: boolean;
    }
}
