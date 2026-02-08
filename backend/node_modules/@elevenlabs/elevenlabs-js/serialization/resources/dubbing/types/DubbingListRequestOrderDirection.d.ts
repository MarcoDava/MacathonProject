import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const DubbingListRequestOrderDirection: core.serialization.Schema<serializers.DubbingListRequestOrderDirection.Raw, ElevenLabs.DubbingListRequestOrderDirection>;
export declare namespace DubbingListRequestOrderDirection {
    type Raw = "DESCENDING" | "ASCENDING";
}
