import { Story, Meta } from "@storybook/react/types-6-0";
import { Title, TitleProps } from "./Title";

export default {
  title: "MyStories/Title",
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Bigger = Template.bind({});
Bigger.args = {
  text: "Bigger Title here...",
  size: "28px",
};

export const Smaller = Template.bind({});
Smaller.args = {
  text: "Smaller Title here...",
  size: "20px",
};
