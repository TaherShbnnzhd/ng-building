/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

/** حالت پیش فرض جواب  */
export class BaseResponse<type> {
  /** وضعیت انجام عملیات */
  success!: boolean;

  /** متن خظا در صورت انجام نشدن عمیات */
  errorMessage!: string;

  /** فهرست فیلدها */
  data?: type;

  /** توکن*/
  token?: string;

  /** تعداد کل اطلاعات */
  totalCount?: number;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  address: {
    country: string;
    city: string;
    street: string;
    alley: string;
    number: number;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: string;
}
