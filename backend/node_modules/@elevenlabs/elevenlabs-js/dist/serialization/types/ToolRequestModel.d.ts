import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ToolRequestModelToolConfig } from "./ToolRequestModelToolConfig";
export declare const ToolRequestModel: core.serialization.ObjectSchema<serializers.ToolRequestModel.Raw, ElevenLabs.ToolRequestModel>;
export declare namespace ToolRequestModel {
    interface Raw {
        tool_config: ToolRequestModelToolConfig.Raw;
    }
}
