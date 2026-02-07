import type * as ElevenLabs from "../index";
export interface ToolsResponseModel {
    tools: ElevenLabs.ToolResponseModel[];
    nextCursor?: string;
    hasMore: boolean;
}
