export type Callback = () => void;

export type UpdatableObject<T> = T & {
  tick: (deltaTime: number) => void;
};

export type TickCallback = (delta: number) => void;
