import Head from "next/head";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "../components/components/button";
import { Sidebar } from "../components/sidebar";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const MainSection = styled.div`
  display: flex;
  width: 80%;
  padding: 3px;
  flex-grow: 0;
`;

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
  max-height: 80px;
  width:100%;
`;
const SideSection = styled.div`
  display: flex;
  width: 20%;
  border-left: 1px solid grey;
  padding: 3px;
`;

const getTheme = () => {
  const theme: Theme = {
    colorPrimary: "#01a2b1",
    secondaryColor: "#974DC4",
    borderRadius: 15,
    
  };
  return theme;
};

function reducer(state: State, action: Action) :State {
  switch (action.type) {
    case "updateMainColor":
      return {
        ...state,
        colorPrimary: action.payload.colorPrimary,
      };
      case "updateSecondaryColor":
        return {
          ...state,
          secondaryColor: action.payload.secondaryColor,
        };
    case "updateBorderRadius":
      return {
        ...state,
        borderRadius: action.payload.borderRadius,
      };
  }
}


export default function Home() {
  const [theme, dispatch] = React.useReducer(reducer, getTheme());

  const download = async ()=>{
    const templateResponse = await fetch("/custom_theme_template.c");
    const template = await templateResponse.text();
    let cFile = template.replace(/{{borderRadius}}/g,theme.borderRadius.toString())
    .replace(/{{colorPrimary}}/g,theme.colorPrimary.replace("#","0x"))
    .replace(/{{secondaryColor}}/g,theme.secondaryColor.replace("#","0x"));
    
    const link = document.createElement("a");

    const filename = "custom_theme.c";


    link.setAttribute("href",'data:text/plain;charset=utf-8,' + encodeURIComponent(cFile));
    link.setAttribute("download", filename);

    link.click();
    
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={download}>download theme</button>
      <Container>
        <SideSection>
          <Sidebar theme={theme} dispatch={dispatch} />
        </SideSection>
        <ThemeProvider theme={theme}>
          <MainSection>
            <Row>
              <Button state="LV_STATE_DEFAULT">LV_STATE_DEFAULT</Button>
              <Button state="LV_STATE_CHECKED">LV_STATE_CHECKED</Button>
            </Row>
          </MainSection>
        </ThemeProvider>
      </Container>
    </>
  );
}
