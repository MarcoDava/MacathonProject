import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CaptionStyleWordAnimationModelEnterType } from "./CaptionStyleWordAnimationModelEnterType";
import { CaptionStyleWordAnimationModelExitType } from "./CaptionStyleWordAnimationModelExitType";
export declare const CaptionStyleWordAnimationModel: core.serialization.ObjectSchema<serializers.CaptionStyleWordAnimationModel.Raw, ElevenLabs.CaptionStyleWordAnimationModel>;
export declare namespace CaptionStyleWordAnimationModel {
    interface Raw {
        enter_type: CaptionStyleWordAnimationModelEnterType.Raw;
        exit_type: CaptionStyleWordAnimationModelExitType.Raw;
    }
}
