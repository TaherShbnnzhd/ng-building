/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

/** Menu object model */
export interface Menu {
  name: string;
  title: string;
  icon?: string;
  subMenu?: Menu[];
}
