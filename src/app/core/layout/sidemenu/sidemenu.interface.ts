/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

export interface menu {
    name: string;
    title: string;
    icon?: string;
    submenu?: menu[];
}