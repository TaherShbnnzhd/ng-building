/* بسم الله الرحمن الرحیم */

export class Utility {

    /**
     * بررسی خالی بودن مقدار وارد شده
     * @param data مقدار
     * @returns boolean
     */
    public static isEmpty(data: any) {
        return data === null || data === undefined || isNaN(data);
    }
}
