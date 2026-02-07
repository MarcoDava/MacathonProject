import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const EmbeddingModelEnum: core.serialization.Schema<serializers.EmbeddingModelEnum.Raw, ElevenLabs.EmbeddingModelEnum>;
export declare namespace EmbeddingModelEnum {
    type Raw = "e5_mistral_7b_instruct" | "multilingual_e5_large_instruct";
}
