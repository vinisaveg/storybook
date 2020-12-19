import react, { FunctionComponent } from "react";

export interface TitleProps {
  /**
   * Type the text to your title
   */
  text: string;
  /**
   * Type the size of your title
   */
  size: string;
}

export const Title: FunctionComponent<TitleProps> = ({ text, size }) => {
  return <h1 style={{ fontSize: size }}>{text}</h1>;
};
