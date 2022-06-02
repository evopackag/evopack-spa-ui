import Heading from "../../../base/Heading/Heading";
import Text from "../../../base/Text/Text";
import Bullets from "../../../base/Bullets/Bullets";
import HorizontalDivider from "../../../base/HorizontalDivider/HorizontalDivider";
import VerticalSpacing from "../../../base/Spacing/VerticalSpacing";

const legalContent = require("../../FooterContent.json");

const Imprint = () => {
  const theme = "light";

  const { title, content } = legalContent.imprint;
  return (
    <>
      <>
        <Heading theme={theme} text={title} type="h2" />
        <VerticalSpacing size="sm" />
        <HorizontalDivider />
        <VerticalSpacing size="sm" />
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
      </>
    </>
  );
};

export default Imprint;
