import * as React from "react";
import styled from "styled-components";
import { SketchPicker } from "react-color";

const ColorPickerSelect = styled.div<{ color: string }>`
  margin-left:3px;
  width: 36px;
  height: 14px;
  border-radius: 2px;
  background: ${(props) => props.color};
  padding: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const PopOver = styled.div`
  position: absolute;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
`;

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  name: string;
}
export const ColorPicker = (props: ColorPickerProps) => {
  const [pickerDisplayed, setPickerDisplayed] = React.useState(false);

  return (
    <Container>
      {props.name}
      <ColorPickerSelect color={props.color} onClick={() => setPickerDisplayed(!pickerDisplayed)} />
      {pickerDisplayed ? (
        <PopOver>
          <Cover onClick={() => setPickerDisplayed(false)} />
          <SketchPicker color={props.color} onChange={(col) => props.onChange(col.hex)} />
        </PopOver>
      ) : null}
    </Container>
  );
};
