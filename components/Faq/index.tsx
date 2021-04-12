import Box from "../Box";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@modulz/radix-icons";
import { styled } from "../../stitches.config";
import { filterCssFromProps } from "../../lib/utils";
import ReactMarkdown from "react-markdown";

const AccordionChevron = styled(ChevronDownIcon, {
  transition: "transform 300ms",
  "[data-state=open] &": {
    transform: "rotate(180deg)",
  },
});

const Item = ({ emoji, question, answer }) => (
  <Box
    as={Accordion.Item}
    value={emoji}
    css={{
      borderBottom: "1px solid",
      borderColor: "$border",
      h3: {
        m: 0,
      },
      "&:last-child": {
        borderBottom: 0,
      },
    }}
  >
    <Box as={Accordion.Header} css={{ margin: 0 }}>
      <Box
        as={Accordion.Button}
        css={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "transparent",
          border: "none",
          py: "$4",
          outline: "none",
          flex: 1,
          textAlign: "left",
          background: "transparent",
          my: 0,
          width: "100%",
          fontSize: "$4",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        <Box
          css={{
            display: "flex",
            color: "$hiContrast",
            alignItems: "center",
            mr: "auto",
          }}
        >
          <Box css={{ mr: "$3" }}>
            <Box role="img" aria-label="What is Web3">
              {emoji}
            </Box>
          </Box>
          {question}
        </Box>
        <AccordionChevron />
      </Box>
    </Box>
    <Box
      as={Accordion.Panel}
      css={{ pb: "$3", mb: 0, fontSize: "$2", lineHeight: "$3" }}
    >
      {answer}
    </Box>
  </Box>
);

const answer4 = `
* Each listed project gets one vote. Reviews and voting periods coordinated by telegram informally initially.
* Projects that apply will be evaluated as to whether they have exposed the right API/data for the integration, whether their "fees" are captured truthfully and represent what people are paying to use the services of the network, and whether they fit into "web3 infrastructure" category.
* There can be a loose description of what web3 infra is, but ultimately it's just up to the discretion of the existing listing projects to vote a new project in.
* Listed projects can vote to formalize these rules and processes or change them going forward.
`;

const items = [
  {
    emoji: "🌐",
    question: "What is Web3?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    emoji: "🤙🏻",
    question: "What’s the purpose of The Web3 Index?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    emoji: "🔢",
    question: "What is the criteria for being listed on Index",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    emoji: "✅",
    question: "What is the process for getting listed on The Web3 Index?",
    answer: <ReactMarkdown>{answer4}</ReactMarkdown>,
  },
];
const Faq = ({ ...props }) => {
  return (
    <Box
      css={{ maxWidth: 600, mx: "auto", ...props?.css }}
      {...filterCssFromProps(props)}
    >
      <Accordion.Root type="single" defaultValue="🌐">
        {items.map((item, i) => (
          <Item
            key={i}
            emoji={item.emoji}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </Accordion.Root>
    </Box>
  );
};

export default Faq;
