import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DubbingRenderResponseModel: core.serialization.ObjectSchema<serializers.DubbingRenderResponseModel.Raw, ElevenLabs.DubbingRenderResponseModel>;
export declare namespace DubbingRenderResponseModel {
    interface Raw {
        version: number;
        render_id: string;
    }
}
