import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const AstOrOperatorNodeInput: core.serialization.ObjectSchema<serializers.AstOrOperatorNodeInput.Raw, ElevenLabs.AstOrOperatorNodeInput>;
export declare namespace AstOrOperatorNodeInput {
    interface Raw {
        children: serializers.AstOrOperatorNodeInputChildrenItem.Raw[];
    }
}
