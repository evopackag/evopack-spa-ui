import Bullets from "../../../base/Bullets/Bullets";
import Heading, { HeadingSizes } from "../../../base/Heading/Heading";
import HorizontalDivider from "../../../base/HorizontalDivider/HorizontalDivider";
import VerticalSpacing, {
  SpacingSizes,
} from "../../../base/Spacing/VerticalSpacing";
import Text, { TextWeight } from "../../../base/Text/Text";

const legalContent = require("../../FooterContent.json");

const DataPolicy = () => {
  const theme = "light";

  const { title, subTitle, text, content } = legalContent.policy;

  // const sections = content
  //   ? content.map((item: any) => {
  //       return item.title;
  //     })
  //   : null;
  // }

  // console.log(sections["policy"].title);
  return (
    <>
      <Heading theme={theme} text={title} level="h2" size={HeadingSizes.xl} />
      <VerticalSpacing size={SpacingSizes.xs16px} />
      <Text theme={theme} weight={TextWeight.medium} bold>
        {subTitle}
      </Text>
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      <Text theme={theme} weight={TextWeight.medium}>
        {text}
      </Text>
      <VerticalSpacing size={SpacingSizes.lg32px} />
      <HorizontalDivider />
      <VerticalSpacing size={SpacingSizes.lg32px} />
      {/* First Section */}
      <Heading
        theme={theme}
        text={content[1].title}
        level="h3"
        size={HeadingSizes.lg}
      />
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      {content[0]
        ? content[0].content.map((item: any) => {
            return (
              <>
                <Heading
                  theme={theme}
                  text={item.sectionTitle}
                  level="h4"
                  size={HeadingSizes.md}
                />
                <VerticalSpacing size={SpacingSizes.lg32px} />
                <Text theme={theme}>{item.text}</Text>
                <VerticalSpacing size={SpacingSizes.xs16px} />
                {item.bullets && item.bullets.length > 0
                  ? item.bullets.map((bullet: any) => {
                      return (
                        <Bullets
                          bulletTitle={bullet.bulletTitle}
                          bulletText={bullet.bulletText}
                        />
                      );
                    })
                  : null}
                <VerticalSpacing size={SpacingSizes.xxxl64px} />
              </>
            );
          })
        : null}
      <Heading
        theme={theme}
        text={content[1].title}
        level="h3"
        size={HeadingSizes.lg}
      />
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      {content[1]
        ? content[1].content.map((item: any) => {
            return (
              <>
                <Heading
                  theme={theme}
                  text={item.sectionTitle}
                  level="h4"
                  size={HeadingSizes.md}
                />
                <VerticalSpacing size={SpacingSizes.lg32px} />
                <Text theme={theme} weight={TextWeight.medium}>
                  {item.text}
                </Text>
                <VerticalSpacing size={SpacingSizes.xs16px} />
                {item.bullets && item.bullets.length > 0
                  ? item.bullets.map((bullet: any) => {
                      return (
                        <Bullets
                          bulletTitle={bullet.bulletTitle}
                          bulletText={bullet.bulletText}
                        />
                      );
                    })
                  : null}
                <VerticalSpacing size={SpacingSizes.xxxl64px} />
              </>
            );
          })
        : null}
      <Heading
        theme={theme}
        text={content[2].title}
        level="h3"
        size={HeadingSizes.lg}
      />
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      {content[2]
        ? content[2].content.map((item: any) => {
            return (
              <>
                <Heading
                  theme={theme}
                  text={item.sectionTitle}
                  level="h4"
                  size={HeadingSizes.md}
                />
                <VerticalSpacing size={SpacingSizes.lg32px} />
                <Text theme={theme} weight={TextWeight.medium}>
                  {item.text}
                </Text>
                <VerticalSpacing size={SpacingSizes.xs16px} />
                {item.bullets && item.bullets.length > 0
                  ? item.bullets.map((bullet: any) => {
                      return (
                        <Bullets
                          bulletTitle={bullet.bulletTitle}
                          bulletText={bullet.bulletText}
                        />
                      );
                    })
                  : null}
                <VerticalSpacing size={SpacingSizes.xxxl64px} />
              </>
            );
          })
        : null}
    </>
  );
};

export default DataPolicy;
