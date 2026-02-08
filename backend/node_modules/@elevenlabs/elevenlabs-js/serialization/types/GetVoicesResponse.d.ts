import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { Voice } from "./Voice";
export declare const GetVoicesResponse: core.serialization.ObjectSchema<serializers.GetVoicesResponse.Raw, ElevenLabs.GetVoicesResponse>;
export declare namespace GetVoicesResponse {
    interface Raw {
        voices: Voice.Raw[];
    }
}
