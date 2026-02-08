import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LibraryVoiceResponse } from "./LibraryVoiceResponse";
export declare const GetLibraryVoicesResponse: core.serialization.ObjectSchema<serializers.GetLibraryVoicesResponse.Raw, ElevenLabs.GetLibraryVoicesResponse>;
export declare namespace GetLibraryVoicesResponse {
    interface Raw {
        voices: LibraryVoiceResponse.Raw[];
        has_more: boolean;
        last_sort_id?: string | null;
    }
}
