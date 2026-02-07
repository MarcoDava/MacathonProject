import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ChapterContentBlockInputModelSubType: core.serialization.Schema<serializers.ChapterContentBlockInputModelSubType.Raw, ElevenLabs.ChapterContentBlockInputModelSubType>;
export declare namespace ChapterContentBlockInputModelSubType {
    type Raw = "p" | "h1" | "h2" | "h3";
}
