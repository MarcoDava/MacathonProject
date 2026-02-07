import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ShareOptionResponseModelType } from "./ShareOptionResponseModelType";
export declare const ShareOptionResponseModel: core.serialization.ObjectSchema<serializers.ShareOptionResponseModel.Raw, ElevenLabs.ShareOptionResponseModel>;
export declare namespace ShareOptionResponseModel {
    interface Raw {
        name: string;
        id: string;
        type: ShareOptionResponseModelType.Raw;
    }
}
