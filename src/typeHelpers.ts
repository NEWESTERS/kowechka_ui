export type AllOrNothing<T> = T | { [key in keyof T]?: undefined };

export type TDictionaryItemKey = string;

export interface IDictionaryItem {
	key: TDictionaryItemKey;
	text: string;
}
