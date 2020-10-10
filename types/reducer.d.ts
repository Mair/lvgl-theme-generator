interface Theme {
  colorPrimary: string;
  secondaryColor: string;
  borderRadius: number;
}

interface Payload extends Partial<State> {}

type ActionTypes = "updateMainColor" | "updateSecondaryColor" | "updateBorderRadius";

interface Action {
  type: ActionTypes;
  payload: Payload;
}

interface State extends Theme {}

type LVGLStates = "LV_STATE_DEFAULT" | "LV_STATE_CHECKED";
