import clsx from "clsx";
import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer";
import React, { useEffect, useMemo, useState } from "react";
import prettier from "prettier/standalone";
import useCopyToClipboard from "../../components/hooks/useCopyToClipboard";
import jsParser from "prettier/parser-babel";
import htmlParser from "prettier/parser-html";
import typescripParser from "prettier/parser-typescript";

interface Props {
  children?: React.ReactNode;
  language?: "tsx" | "js" | "bash" | "html";
  linesOn?: boolean;
  blockClass?: string;
  iconClass?: string;
  hideIcon?: boolean;
  disabledFormat?: boolean;
  disableTabs?: boolean;
}

export const CodeBlock = ({
  blockClass,
  children,
  language = "tsx",
  linesOn = false,
  disableTabs = false,
}: Props) => {
  const [value, copy] = useCopyToClipboard();
  const [tooltipText, setTooltipText] = useState("Copy to clipboard");
  const codeParsed =
    typeof children === "string"
      ? children.toString().trim()
      : // @ts-ignore
        children?.props?.children.toString().trim();

  const languageSelected = useMemo(() => {
    switch (language) {
      case "tsx":
        return "typescript";
      case "js":
        return "babel";
      default:
        return "html";
    }
  }, [language]);

  const formatCode = prettier
    .format(codeParsed, {
      parser: languageSelected,
      plugins: [jsParser, htmlParser, typescripParser],
      useTabs: true,
      printWidth: 80,
      // htmlWhitespaceSensitivity: "ignore",
    })
    .trim()
    .replace(/;$/, "");

  return (
    <>
      <Highlight
        {...defaultProps}
        theme={null as any}
        code={formatCode}
        // @ts-ignore
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            <pre
              className={clsx(
                className,
                disableTabs
                  ? "m-[1rem_0rem_1.25rem_0rem] rounded-xl p-[14px]"
                  : "m-[0rem_0rem_1.25rem_0rem] p-[14px]",
                "max-h-[32rem] overflow-auto  rounded-b-xl text-left",
                blockClass
              )}
              style={style}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {linesOn && (
                    <span className="table-cell select-none pr-3 text-right text-white  opacity-50">
                      {i + 1}
                    </span>
                  )}
                  <span className="table-cell ">
                    {line.map((token, key) => (
                      <span
                        key={key}
                        {...getTokenProps({
                          token,
                          key,
                          className: "text-white ",
                        })}
                        // css={{ color: "white" }}
                      />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          </>
        )}
      </Highlight>
    </>
  );
};
