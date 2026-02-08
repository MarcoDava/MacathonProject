import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const DubbingListRequestFilterByCreator: core.serialization.Schema<serializers.DubbingListRequestFilterByCreator.Raw, ElevenLabs.DubbingListRequestFilterByCreator>;
export declare namespace DubbingListRequestFilterByCreator {
    type Raw = "personal" | "others" | "all";
}
