import Bullets from "../../../base/Bullets/Bullets";
import Heading from "../../../base/Heading/Heading";
import HorizontalDivider from "../../../base/HorizontalDivider/HorizontalDivider";
import Spacing from "../../../base/Spacing/Spacing";
import Text from "../../../base/Text/Text";

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
      <Spacing size="xs" />
      <Text theme={theme} text={subTitle} bold />
      <Spacing size="md" />
      <Text theme={theme} text={text} />
      <Spacing size="sm" />
      <HorizontalDivider />
      <Spacing size="sm" />
      {/* First Section */}
      <Heading theme={theme} text={content[1].title} type="h3" />
      <Spacing size="md" />
      {content[0]
        ? content[0].content.map((item: any) => {
            return (
              <>
                <Heading theme={theme} text={item.sectionTitle} type="h4" />
                <Spacing size="sm" />
                <Text theme={theme} text={item.text} />
                <Spacing size="xs" />
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
                <Spacing size="md" />
              </>
            );
          })
        : null}
      <Heading theme={theme} text={content[1].title} type="h3" />
      <Spacing size="md" />
      {content[1]
        ? content[1].content.map((item: any) => {
            return (
              <>
                <Heading theme={theme} text={item.sectionTitle} type="h4" />
                <Spacing size="sm" />
                <Text theme={theme} text={item.text} />
                <Spacing size="xs" />
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
                <Spacing size="md" />
              </>
            );
          })
        : null}
      <Heading theme={theme} text={content[2].title} type="h3" />
      <Spacing size="md" />
      {content[2]
        ? content[2].content.map((item: any) => {
            return (
              <>
                <Heading theme={theme} text={item.sectionTitle} type="h4" />
                <Spacing size="sm" />
                <Text theme={theme} text={item.text} />
                <Spacing size="xs" />
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
                <Spacing size="md" />
              </>
            );
          })
        : null}
    </>
  );
};

export default DataPolicy;
