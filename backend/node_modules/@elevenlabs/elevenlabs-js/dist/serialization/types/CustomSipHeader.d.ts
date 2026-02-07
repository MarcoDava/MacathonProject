import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CustomSipHeader: core.serialization.ObjectSchema<serializers.CustomSipHeader.Raw, ElevenLabs.CustomSipHeader>;
export declare namespace CustomSipHeader {
    interface Raw {
        key: string;
        value: string;
    }
}
