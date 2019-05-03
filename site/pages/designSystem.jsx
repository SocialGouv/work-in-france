import React from "react";

import { H1, H2, H3, H4, H5, H6, Text } from "../components/commons/typography";
import { LayoutNormal } from "../components/commons/grid";

const designSystem = () => {
  return (
    <LayoutNormal>
      <H1 color="black">h1 title (can pass any size and any colors)</H1>
      <H2>h2 title</H2>
      <H3>h3 title</H3>
      <H4 textTransform="uppercase">h4 title</H4>
      <H5>h5 title</H5>
      <H6>h6 title</H6>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus, tortor eget imperdiet
        suscipit, ligula lectus laoreet orci, aliquam finibus nulla nulla finibus erat. Quisque a
        fringilla quam, quis consequat risus. Aenean viverra dui vitae nibh finibus porttitor. Nam
        sit amet commodo sem. Integer dapibus rhoncus cursus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed consequat erat nec imperdiet dignissim. Mauris iaculis
        sollicitudin mattis. Aliquam sagittis nulla a ipsum congue, eget sagittis sem finibus. Nam
        dignissim sagittis ipsum, sed fermentum massa dapibus sit amet. Etiam consectetur
        consectetur magna nec elementum. Proin aliquam ex lacus, a sodales augue interdum vel.
      </Text>
    </LayoutNormal>
  );
};

export default designSystem;
