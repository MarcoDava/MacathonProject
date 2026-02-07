import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ChapterContentBlockExtendableNodeResponseModel } from "./ChapterContentBlockExtendableNodeResponseModel";
import { ChapterContentBlockTtsNodeResponseModel } from "./ChapterContentBlockTtsNodeResponseModel";
export declare const ChapterContentBlockResponseModelNodesItem: core.serialization.Schema<serializers.ChapterContentBlockResponseModelNodesItem.Raw, ElevenLabs.ChapterContentBlockResponseModelNodesItem>;
export declare namespace ChapterContentBlockResponseModelNodesItem {
    type Raw = ChapterContentBlockResponseModelNodesItem.TtsNode | ChapterContentBlockResponseModelNodesItem.Other;
    interface TtsNode extends ChapterContentBlockTtsNodeResponseModel.Raw {
        type: "tts_node";
    }
    interface Other extends ChapterContentBlockExtendableNodeResponseModel.Raw {
        type: "_other";
    }
}
