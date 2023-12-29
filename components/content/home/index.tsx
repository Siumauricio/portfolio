import { Text, Avatar, Card, Button, Link } from "@nextui-org/react";
import { Box } from "../../styles/box";
import { Flex } from "../../styles/flex";
import { GithubIcon } from "../../icons/github-icon";
import { LinkedinIcon } from "../../icons/linkedin-icon";
import { SectionAnimation } from "../../animations/section";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { LinkIcon } from "../../icons/link-icon";
import { GridContainer } from "../../styles/grid";

export const Home = () => {
  const router = useRouter();

  return (
    <Box css={{ px: "$12", "@xsMax": { px: "$10" }, width: "100%" }}>
      <Card variant="flat" css={{ marginBottom: "$10" }}>
        <Card.Body css={{ backgroundColor: "$accents2" }}>
          <Text css={{ fontFamily: "inherit", textAlign: "center" }} as={"p"}>
            Hello, I&apos;m Mauricio Siu. I&apos;m a software engineer based in
            Honduras!
          </Text>
        </Card.Body>
      </Card>
      <Flex justify={"between"} css={{ pb: "$10" }}>
        <Box css={{ alignSelf: "center" }}>
          <Text h2 css={{ my: "$0" }}>
            Mauricio Siu
          </Text>
          <Text css={{ fontFamily: "inherit" }}>
            Software Engineer ( Backend / Frontend / Developer )
          </Text>
        </Box>

        <Avatar
          css={{ "--nextui--avatarXl": "7.5rem" }}
          pointer
          bordered
          size={"xl"}
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </Flex>
      <SectionAnimation delay={0.1}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Work</Text>
          <Text
            span
            css={{
              textIndent: "1em",
              display: "block",
            }}
          >
            Sofware engineer with solid experience working with a variety of
            programming languages, I am also familiar with different development
            frameworks and tools. I am a quick learner and always strive to keep
            up with the latest technologies and industry trends. In addition, I
            have a strong sense of teamwork and communication skills that allow
            me to collaborate effectively with other developers, designers and
            stakeholders.
          </Text>

          <Flex justify={"center"} css={{ mt: "$8" }}>
            <NextLink href="/projects">
              <Link block css={{ gap: "$4" }}>
                Projects <LinkIcon />
              </Link>
            </NextLink>
          </Flex>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.2}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Bio</Text>

          <Box as={"ul"} css={{ m: 0 }}>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                1999
              </Text>
              <Text span>Born in Cortes, Honduras.</Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2018 - 2022
              </Text>
              <Text span>Bachelor&apos;s degree in Computer Science.</Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2020 - 2022
              </Text>
              <Text span>Freelancer as a Software Developer.</Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2022 - 2023
              </Text>
              <Text span>Software Engineer at CodeExitos.</Text>
            </Box>
             <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                  2021 - Present
              </Text>
              <Text span>Middle Software Engineer At Jinza</Text>
            </Box>
              <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                  2023 - Present
              </Text>
              <Text span>Software Engineer At Trades.org</Text>
            </Box>
          </Box>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>I ❤️ </Text>
          <Text as={"span"} css={{ textIndent: "1em" }}>
            I love to learn new things, I am passionate about technology and I
            always try to learn something new every day, I love to solve
            problems and I am always looking for new challenges.
          </Text>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Skills</Text>
          <GridContainer
            as={"ul"}
            gap={"md"}
            css={{
              m: 0,
              px: 0,
              gridTemplateColumns: "repeat(4, 1fr)",
              "@xsMax": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
            }}
          >
            <Box as={"li"}>ReactJS</Box>
            <Box as={"li"}>NextJS</Box>
             <Box as={"li"}>Graphql</Box>
              <Box as={"li"}>React Native</Box>
            <Box as={"li"}>NodeJS</Box>
            <Box as={"li"}>NestJS</Box>
            <Box as={"li"}>TypeScript</Box>
            <Box as={"li"}>C# / .NET Core</Box>
            <Box as={"li"}>Git</Box>
            <Box as={"li"}>Git</Box>
            <Box as={"li"}>SQL</Box>
            <Box as={"li"}>Windows/Linux</Box>
            <Box as={"li"}>C++</Box>
          </GridContainer>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Languages</Text>
          <GridContainer as={"ul"} gap={"md"} css={{ m: 0, px: 0 }}>
            <Box as={"li"}>Spanish </Box>
            <Box as={"li"}>English </Box>
          </GridContainer>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>On the Web </Text>
          <Box as={"ul"} css={{ m: 0 }}>
            <Box as={"li"}>
              <Link
                block
                target={"_blank"}
                color="primary"
                href="https://github.com/Siumauricio"
              >
                <Button
                  light
                  color="primary"
                  auto
                  icon={<GithubIcon />}
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  @Siumauricio
                </Button>
              </Link>
            </Box>
            <Box as={"li"}>
              <Link
                block
                target={"_blank"}
                color="primary"
                href="https://www.linkedin.com/in/carlos-mauricio-ortiz-siu-6b9011184/"
              >
                <Button
                  light
                  color="primary"
                  auto
                  icon={<LinkedinIcon />}
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  @Mauricio Siu
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </SectionAnimation>
    </Box>
  );
};
