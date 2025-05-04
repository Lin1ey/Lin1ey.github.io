export type ProjectData = {
    title: string,
    image: string,
    desc: string,
    buttons: {
        demo: string | null,
        code: string | null,
        live: string | null
    }
}