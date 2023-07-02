import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
const sliderData1 = [
  {
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/5b/d6/5bd65eb6aff46eb117ec37d5a9cc114972c2e908.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
  },

  {
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/f9/89/f989d39a7bf28c8ba387908561818793c67948c1.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
  },
  {
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/e7/52/e752c4882dde75103106662366a0a392e24b237f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
  },
  {
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/6d/d4/6dd426aa248836eae0ff9e9b1d1d19d1c9990a4a.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
  },
  {
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/a1/c8/a1c83bd95d557bf571efb85cbd0cd3ba2e7f0ef3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
  },
  {
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/13/9e/139eca1b27e4d7e766e1582e12441bff795f0d76.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
  },

  {
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/5d/44/5d444fc32f58458d44345511468631684c3cfb0a.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
  },
  {
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/e9/5e/e95ea7bea7b5d240f58d20684da1d1bc4c1166a6.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
  },
  {
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/f9/eb/f9ebd03863dcfeb6c255a96fc53a11354bd29a73.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
  },
  {
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/89/d9/89d9fb925e73ece7dd2c04bebf092d5c919cc973.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
  },
];

export default function HomeCar1() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="240px" marginLeft="100px" zIndex={1}>
      <ChevronLeftIcon
        boxSize={10}
        background="gray.50"
        borderRadius="50%"
        color="gray.500"
        _hover={{ color: "pink.400", background: "gray.50" }}
        {...props}
      />
    </Box>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="-220px" marginLeft="1250px">
      <ChevronRightIcon
        boxSize={10}
        background="gray.50"
        borderRadius="50%"
        color="gray.500"
        _hover={{ color: "pink.400", background: "gray.50" }}
        {...props}
      />
    </Box>
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
      }}
    >
      <Slider {...settings}>
        {sliderData1.map((el, index) => {
          return (
            <div key={index}>
              <Box padding="5px">
                <Image borderRadius="8px" src={el.image} />
              </Box>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
