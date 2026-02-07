import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ImageAvatar } from "./ImageAvatar";
import { OrbAvatar } from "./OrbAvatar";
import { UrlAvatar } from "./UrlAvatar";
export declare const WidgetConfigOutputAvatar: core.serialization.Schema<serializers.WidgetConfigOutputAvatar.Raw, ElevenLabs.WidgetConfigOutputAvatar>;
export declare namespace WidgetConfigOutputAvatar {
    type Raw = WidgetConfigOutputAvatar.Orb | WidgetConfigOutputAvatar.Url | WidgetConfigOutputAvatar.Image;
    interface Orb extends OrbAvatar.Raw {
        type: "orb";
    }
    interface Url extends UrlAvatar.Raw {
        type: "url";
    }
    interface Image extends ImageAvatar.Raw {
        type: "image";
    }
}
