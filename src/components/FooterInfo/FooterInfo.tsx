import { useContext } from "react";
import { Context } from "../../Context";

export const FooterInfo = () => {
  const { footerInfo } = useContext(Context);

  return <p>{footerInfo}</p>;
};
