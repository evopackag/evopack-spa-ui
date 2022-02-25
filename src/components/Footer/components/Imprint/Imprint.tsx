import Heading from "../../../base/Heading/Heading";
import Text from "../../../base/Text/Text";
import Bullets from "../../../base/Bullets/Bullets";
import HorizontalDivider from "../../../base/HorizontalDivider/HorizontalDivider";
import Spacing from "../../../base/Spacing/Spacing";

const legalContent = require("../../FooterContent.json");

const Imprint = () => {
  const theme = "light";

  const { title, content } = legalContent.imprint;
  return (
    <>
      <>
        <Heading theme={theme} text={title} type="h2" />
        <Spacing size="sm" />
        <HorizontalDivider />
        <Spacing size="sm" />
        <Spacing size="md" />
        {content[0]
          ? content[0].content.map((item: any) => {
              return (
                <>
                  <Heading theme={theme} text={item.sectionTitle} type="h4" />
                  <Spacing size="sm" />
                  <Text theme={theme}>{item.text}</Text>
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
    </>
  );
};

export default Imprint;
