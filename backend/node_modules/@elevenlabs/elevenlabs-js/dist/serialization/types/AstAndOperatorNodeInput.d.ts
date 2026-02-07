import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const AstAndOperatorNodeInput: core.serialization.ObjectSchema<serializers.AstAndOperatorNodeInput.Raw, ElevenLabs.AstAndOperatorNodeInput>;
export declare namespace AstAndOperatorNodeInput {
    interface Raw {
        children: serializers.AstAndOperatorNodeInputChildrenItem.Raw[];
    }
}
