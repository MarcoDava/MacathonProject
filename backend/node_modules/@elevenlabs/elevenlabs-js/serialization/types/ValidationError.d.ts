import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ValidationErrorLocItem } from "./ValidationErrorLocItem";
export declare const ValidationError: core.serialization.ObjectSchema<serializers.ValidationError.Raw, ElevenLabs.ValidationError>;
export declare namespace ValidationError {
    interface Raw {
        loc: ValidationErrorLocItem.Raw[];
        msg: string;
        type: string;
    }
}
