import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ShareOptionResponseModelType: core.serialization.Schema<serializers.ShareOptionResponseModelType.Raw, ElevenLabs.ShareOptionResponseModelType>;
export declare namespace ShareOptionResponseModelType {
    type Raw = "user" | "group" | "key";
}
