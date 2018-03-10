interface Store<State, ActionOut> {
    dispatch(action: ActionOut): void;
    getState(): State;
}
export type MiddlewareHelper<State, ActionIn, ActionOut> =
  (store: Store<State, ActionOut>) =>
  (next: (action: ActionIn) => void) =>
  (action: ActionIn) => void;
