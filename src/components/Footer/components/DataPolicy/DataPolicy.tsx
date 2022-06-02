import Bullets from "../../../base/Bullets/Bullets";
import Heading from "../../../base/Heading/Heading";
import HorizontalDivider from "../../../base/HorizontalDivider/HorizontalDivider";
import VerticalSpacing from "../../../base/Spacing/VerticalSpacing";
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
      <Heading theme={theme} text={title} type="h2" />
      <VerticalSpacing size="xs" />
      <Text theme={theme} weight={TextWeight.medium} bold>
        {subTitle}
      </Text>
      <VerticalSpacing size="md" />
      <Text theme={theme} weight={TextWeight.medium}>
        {text}
      </Text>
      <VerticalSpacing size="sm" />
      <HorizontalDivider />
      <VerticalSpacing size="sm" />
      {/* First Section */}
      <Heading theme={theme} text={content[1].title} type="h3" />
      <VerticalSpacing size="md" />
      {content[0]
        ? content[0].content.map((item: any) => {
            return (
              <>
                <Heading theme={theme} text={item.sectionTitle} type="h4" />
                <VerticalSpacing size="sm" />
                <Text theme={theme}>{item.text}</Text>
                <VerticalSpacing size="xs" />
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
                <VerticalSpacing size="md" />
              </>
            );
          })
        : null}
      <Heading theme={theme} text={content[1].title} type="h3" />
      <VerticalSpacing size="md" />
      {content[1]
        ? content[1].content.map((item: any) => {
            return (
              <>
                <Heading theme={theme} text={item.sectionTitle} type="h4" />
                <VerticalSpacing size="sm" />
                <Text theme={theme} weight={TextWeight.medium}>
                  {item.text}
                </Text>
                <VerticalSpacing size="xs" />
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
                <VerticalSpacing size="md" />
              </>
            );
          })
        : null}
      <Heading theme={theme} text={content[2].title} type="h3" />
      <VerticalSpacing size="md" />
      {content[2]
        ? content[2].content.map((item: any) => {
            return (
              <>
                <Heading theme={theme} text={item.sectionTitle} type="h4" />
                <VerticalSpacing size="sm" />
                <Text theme={theme} weight={TextWeight.medium}>
                  {item.text}
                </Text>
                <VerticalSpacing size="xs" />
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
                <VerticalSpacing size="md" />
              </>
            );
          })
        : null}
    </>
  );
};

export default DataPolicy;
