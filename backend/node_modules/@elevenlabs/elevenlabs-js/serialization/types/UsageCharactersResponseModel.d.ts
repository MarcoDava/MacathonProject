import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UsageCharactersResponseModel: core.serialization.ObjectSchema<serializers.UsageCharactersResponseModel.Raw, ElevenLabs.UsageCharactersResponseModel>;
export declare namespace UsageCharactersResponseModel {
    interface Raw {
        time: number[];
        usage: Record<string, number[]>;
    }
}
