import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ReferencedToolCommonModelType } from "./ReferencedToolCommonModelType";
export declare const ReferencedToolCommonModel: core.serialization.ObjectSchema<serializers.ReferencedToolCommonModel.Raw, ElevenLabs.ReferencedToolCommonModel>;
export declare namespace ReferencedToolCommonModel {
    interface Raw {
        id: string;
        type: ReferencedToolCommonModelType.Raw;
    }
}
