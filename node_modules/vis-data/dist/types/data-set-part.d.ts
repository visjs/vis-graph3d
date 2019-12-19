import { DataInterface, EventCallbacksWithAny, EventNameWithAny, EventPayloads, Id } from "./data-interface";
declare type EventSubscribers<Item, IdProp extends string> = {
    [Name in keyof EventCallbacksWithAny<Item, IdProp>]: (...args: any[]) => void;
};
/**
 * [[DataSet]] code that can be reused in [[DataView]] or other similar implementations of [[DataInterface]].
 *
 * @typeParam Item - Item type that may or may not have an id.
 * @typeParam IdProp - Name of the property that contains the id.
 */
export declare abstract class DataSetPart<Item, IdProp extends string> implements Pick<DataInterface<Item, IdProp>, "on" | "off"> {
    protected _subscribers: {
        [Name in EventNameWithAny]: EventSubscribers<Item, IdProp>[Name][];
    };
    protected _trigger(event: "add", payload: EventPayloads<Item, IdProp>["add"], senderId?: Id | null): void;
    protected _trigger(event: "update", payload: EventPayloads<Item, IdProp>["update"], senderId?: Id | null): void;
    protected _trigger(event: "remove", payload: EventPayloads<Item, IdProp>["remove"], senderId?: Id | null): void;
    /** @inheritdoc */
    on(event: "*", callback: EventCallbacksWithAny<Item, IdProp>["*"]): void;
    /** @inheritdoc */
    on(event: "add", callback: EventCallbacksWithAny<Item, IdProp>["add"]): void;
    /** @inheritdoc */
    on(event: "remove", callback: EventCallbacksWithAny<Item, IdProp>["remove"]): void;
    /** @inheritdoc */
    on(event: "update", callback: EventCallbacksWithAny<Item, IdProp>["update"]): void;
    /** @inheritdoc */
    off(event: "*", callback: EventCallbacksWithAny<Item, IdProp>["*"]): void;
    /** @inheritdoc */
    off(event: "add", callback: EventCallbacksWithAny<Item, IdProp>["add"]): void;
    /** @inheritdoc */
    off(event: "remove", callback: EventCallbacksWithAny<Item, IdProp>["remove"]): void;
    /** @inheritdoc */
    off(event: "update", callback: EventCallbacksWithAny<Item, IdProp>["update"]): void;
    /**
     * @deprecated Use on instead (PS: DataView.subscribe === DataView.on).
     */
    subscribe: DataSetPart<Item, IdProp>["on"];
    /**
     * @deprecated Use off instead (PS: DataView.unsubscribe === DataView.off).
     */
    unsubscribe: DataSetPart<Item, IdProp>["off"];
}
export {};
//# sourceMappingURL=data-set-part.d.ts.map