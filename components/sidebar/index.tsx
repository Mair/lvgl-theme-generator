import * as React from "react";
import styled from "styled-components";
import { ColorPicker } from "./color-picker";
import { Slider } from "./numeric-slider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface SidebarProps {
  theme: Theme;
  dispatch: React.Dispatch<Action>;
}
export const Sidebar = (props: SidebarProps) => {
  return (
    <Container>
      <h5>Global</h5>
      <ColorPicker
        name="primary color"
        color={props.theme.colorPrimary}
        onChange={(color) => props.dispatch({ type: "updateMainColor", payload: { colorPrimary: color } })}
      />
      {/* <ColorPicker
        name="secondary color"
        color={props.theme.secondaryColor}
        onChange={(color) => props.dispatch({ type: "updateSecondaryColor", payload: { secondaryColor: color } })}
      /> */}
      <Slider
        min={0}
        max={30}
        name="border radius"
        value={props.theme.borderRadius}
        onChange={(val) => props.dispatch({ type: "updateBorderRadius", payload: { borderRadius: val } })}
      />
      <h5>Component specific</h5>
      ... (based on row of controls selected)
    </Container>
  );
};
