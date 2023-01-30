import { Link, Text } from "@nextui-org/react";
import { Code } from "./Code";

export const components = {
  h1: (props: any) => <Text h1 {...props} css={{ mb: "$6" }} />,
  h2: (props: any) => <Text h2 {...props} />,
  h3: (props: any) => <Text h3 {...props} />,
  h4: (props: any) => <Text h4 {...props} />,
  h5: (props: any) => <Text h5 {...props} />,
  h6: (props: any) => <Text h6 {...props} />,
  pre: (props: any) => <Code {...props} />,
  code: (props: any) => <Code {...props} />,
  p: (props: any) => (
    <Text
      as="p"
      css={{
        fontFamily: "inherit",
        my: "$9",
        lineHeight: "$xl",
        letterSpacing: "$normal",
      }}
    >
      {props.children}
    </Text>
  ),
  a: (props: any) => {
    const isRelativeUrl = !/^([a-z0-9]*:|.{0})\/\/.*$/gim.test(props.href);
    return (
      <Link
        href={props.href}
        target={isRelativeUrl ? "_self" : "_blank"}
        css={{ width: "fit-content", display: "initial" }}
      >
        {props.children}
      </Link>
    );
  },
};
