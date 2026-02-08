import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ChapterResponse } from "./ChapterResponse";
export declare const GetChaptersResponse: core.serialization.ObjectSchema<serializers.GetChaptersResponse.Raw, ElevenLabs.GetChaptersResponse>;
export declare namespace GetChaptersResponse {
    interface Raw {
        chapters: ChapterResponse.Raw[];
    }
}
