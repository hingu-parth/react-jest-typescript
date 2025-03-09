import { render, screen } from "@testing-library/react";
import { createContext } from "react";
import { ContextProps, Context } from "../../../Context";
import { FooterInfo } from "../FooterInfo";

type MockContextProps = Partial<ContextProps>;
const MockContext = createContext<MockContextProps>({});

describe("FooterInfo", () => {
  it("Отображает переданный текст в подвале", () => {
    // jest.mock("../../../Context", () => {
    //   // const {createContext} = require('react');
    //   const MainContextMock = createContext({} as any);
    //   return { Context: MainContextMock };
    render(
      <MockContext.Provider value={{ footerInfo: "CopyRight 2021" }}>
        <FooterInfo />
      </MockContext.Provider>
    );
    // });

    // screen.debug();
  });
});
