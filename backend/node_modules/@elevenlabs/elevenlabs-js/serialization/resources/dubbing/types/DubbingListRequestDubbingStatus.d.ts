import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const DubbingListRequestDubbingStatus: core.serialization.Schema<serializers.DubbingListRequestDubbingStatus.Raw, ElevenLabs.DubbingListRequestDubbingStatus>;
export declare namespace DubbingListRequestDubbingStatus {
    type Raw = "dubbing" | "dubbed" | "failed";
}
