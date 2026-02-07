import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ValidationError } from "./ValidationError";
export declare const HttpValidationError: core.serialization.ObjectSchema<serializers.HttpValidationError.Raw, ElevenLabs.HttpValidationError>;
export declare namespace HttpValidationError {
    interface Raw {
        detail?: ValidationError.Raw[] | null;
    }
}
