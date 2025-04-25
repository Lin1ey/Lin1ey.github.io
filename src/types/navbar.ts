import { Ref } from "vue"
import type { ComponentPublicInstance } from "vue";

export type NavBarTab = {
    title: string,
    sectionRef: Ref<ComponentPublicInstance, null>
}