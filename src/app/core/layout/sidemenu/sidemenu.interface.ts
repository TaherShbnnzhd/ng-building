/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

export interface Menu {
  name: string;
  title: string;
  icon?: string;
  subMenu?: Menu[];
}
