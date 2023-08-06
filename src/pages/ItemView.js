import { useCallback } from "react";
import styled from "styled-components";

const Icon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Link = styled.div`
  position: relative;
`;
const NavLink = styled.div`
  border-radius: var(--br-3xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const ImageIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const ProductImage = styled.div`
  position: relative;
  width: 33.66px;
  height: 42px;
`;
const Image01 = styled.div`
  border-radius: var(--br-smi);
  background-color: var(--ui-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
`;
const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const ProductImage3 = styled.div`
  position: relative;
  width: 242px;
  height: 302px;
`;
const MainImage = styled.div`
  border-radius: var(--br-smi);
  background-color: var(--ui-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
`;
const ImageArea = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Link1 = styled.b`
  position: relative;
`;
const Series5Se = styled.div`
  position: relative;
  font-size: var(--subtitle-small-medium-normal-size);
  font-weight: 500;
  color: var(--font-placeholder);
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--title-normal-bold-normal-size);
`;
const Rating = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-base) 0px 0px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const Div = styled.div`
  position: relative;
  letter-spacing: -0.02em;
`;
const Special = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-base) var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  color: var(--font-accent);
`;
const Div1 = styled.div`
  position: relative;
  font-size: var(--subtitle-small-medium-normal-size);
  font-weight: 500;
`;
const LoremIpsumDolor = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
`;
const ShortDescription = styled.div`
  align-self: stretch;
  height: 122px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Bag = styled.div`
  position: relative;
  font-weight: 500;
`;
const Button = styled.div`
  border-radius: var(--br-sm);
  background-color: var(--font-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const Cta = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: flex-end;
  justify-content: center;
  color: var(--ui-white);
`;
const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
`;
const TopArea = styled.div`
  width: 905px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
`;
const BottomAreaChild = styled.div`
  position: relative;
  border-top: 3px solid var(--font-placeholder);
  box-sizing: border-box;
  width: 861px;
  height: 3px;
`;
const OrciVelRidiculus = styled.p`
  margin: 0;
`;
const LoremIpsumDolorContainer = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--body-normal-medium-normal-size);
  letter-spacing: -0.02em;
  color: var(--font-tertiary);
  display: inline-block;
  height: 383px;
  flex-shrink: 0;
`;
const Description = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base) var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const BottomArea = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--subtitle-small-medium-normal-size);
`;
const ContentArea = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 48px var(--padding-5xl);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const ContentFrame = styled.div`
  position: absolute;
  top: 0px;
  left: 122px;
  width: 953px;
  height: 1024px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const ItemViewChild = styled.div`
  position: absolute;
  top: 49px;
  left: 1093px;
  border-right: 4px solid var(--font-placeholder);
  box-sizing: border-box;
  width: 4px;
  height: 925.6px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
`;
const ImageIcon4 = styled.img`
  position: absolute;
  height: 131%;
  width: 100%;
  top: -15.5%;
  right: 0%;
  bottom: -15.5%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const ProductImage4 = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
`;
const BagItem = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--ui-white);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
`;
const Row = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Row1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const BagItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-base);
`;
const Button2 = styled.div`
  border-radius: var(--br-sm);
  background-color: var(--font-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  cursor: pointer;
`;
const Cta1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  align-items: center;
  justify-content: center;
  font-size: var(--body-normal-medium-normal-size);
  color: var(--ui-white);
`;
const BagArea = styled.div`
  position: absolute;
  top: 0px;
  left: 1095px;
  width: 345px;
  height: 1024px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 72px var(--padding-5xs) var(--padding-5xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  font-size: var(--subtitle-normal-medium-normal-size);
`;
const LogoChild = styled.img`
  position: relative;
  width: 16px;
  height: 20.71px;
`;
const Logo = styled.div`
  border-radius: 4px;
  background-color: var(--ui-white);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Icon3 = styled.img`
  position: relative;
  border-radius: 50px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const NavLink1 = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--font-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const NavLink2 = styled.div`
  border-radius: var(--br-3xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const NavLinkstop = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
const NavLink3 = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--ui-danger);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
`;
const Navbar = styled.div`
  position: absolute;
  height: 96.88%;
  top: 1.56%;
  bottom: 1.56%;
  left: 16px;
  border-radius: 8px;
  background-color: var(--ui-white);
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;
const ItemViewRoot = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: #ededed;
  width: 100%;
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--body-normal-medium-normal-size);
  color: var(--font-dark);
  font-family: var(--body-normal-medium-normal);
`;
const ItemView = () => {
  const onButtonContainer1Click = useCallback(() => {
    // Please sync "Bag" to the project
  }, []);

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onNavLinkContainer1Click = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onNavLinkContainer2Click = useCallback(() => {
    // Please sync "Bag" to the project
  }, []);

  return (
    <ItemViewRoot>
      <ContentFrame>
        <ContentArea>
          <NavLink>
            <Icon alt="" src="/icon.svg" />
            <Link>Back</Link>
          </NavLink>
          <TopArea>
            <ImageArea>
              <ImageGallery>
                <Image01>
                  <ProductImage>
                    <ImageIcon alt="" src="/image@2x.png" />
                  </ProductImage>
                </Image01>
                <Image01>
                  <ProductImage>
                    <ImageIcon alt="" src="/image@2x.png" />
                  </ProductImage>
                </Image01>
                <Image01>
                  <ProductImage>
                    <ImageIcon alt="" src="/image@2x.png" />
                  </ProductImage>
                </Image01>
              </ImageGallery>
              <MainImage>
                <ProductImage3>
                  <ImageIcon alt="" src="/image1@2x.png" />
                </ProductImage3>
              </MainImage>
            </ImageArea>
            <TextContent>
              <Header>
                <Link1>Apple Watch</Link1>
                <Series5Se>Series 5 SE</Series5Se>
              </Header>
              <Special>
                <Rating>
                  <Icon alt="" src="/star01.svg" />
                  <Icon alt="" src="/star01.svg" />
                  <Icon alt="" src="/star01.svg" />
                  <Icon alt="" src="/star01.svg" />
                  <Icon alt="" src="/star05.svg" />
                </Rating>
                <Div>4.5 / 5</Div>
              </Special>
              <Div1>$ 529.99</Div1>
              <ShortDescription>
                <LoremIpsumDolor>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  pellentesque tellus imperdiet mattis. Proin in quis ipsum non
                  amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc
                  volutpat, tincidunt lorem mi duis. Vitae elementum libero.
                </LoremIpsumDolor>
              </ShortDescription>
              <Cta>
                <Button>
                  <Icon alt="" src="/icon1.svg" />
                  <Bag>Add to Bag</Bag>
                </Button>
              </Cta>
            </TextContent>
          </TopArea>
          <BottomArea>
            <BottomAreaChild />
            <Description>
              <Bag>Description</Bag>
              <LoremIpsumDolorContainer>
                <OrciVelRidiculus>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim odio faucibus nec malesuada purus volutpat vel sed
                  viverra. Id sagittis, phasellus dui in arcu. Nec arcu, sit
                  nunc, nibh purus pellentesque sagittis. Felis rhoncus
                  facilisis massa eget purus in purus. Etiam at cras nulla nunc.
                  Malesuada in pretium diam scelerisque sit mattis in egestas
                  neque. Eu porta tempor sodales nisl integer turpis porttitor
                  sed sed. Ut senectus odio dictum enim velit tempor diam
                  quisque suspendisse.
                </OrciVelRidiculus>
                <OrciVelRidiculus>
                  Orci vel ridiculus diam viverra. Libero malesuada orci, quis
                  placerat suscipit augue imperdiet. Et praesent augue dictum
                  mauris eget lacus malesuada. Aenean nisi, sodales natoque
                  massa magna dignissim mi. Mattis tellus, justo, lorem sed
                  tempor diam sit viverra enim. Id id placerat eu etiam nulla
                  laoreet.
                </OrciVelRidiculus>
                <OrciVelRidiculus>
                  Dignissim leo fames turpis quis suspendisse vulputate laoreet
                  vulputate ac. Aliquam justo lectus eu dui porttitor. Cras a
                  aliquam phasellus sollicitudin ornare. Tristique volutpat
                  facilisis in ut proin. Est vitae facilisi sollicitudin id
                  lorem mattis nibh ipsum, nec. Consectetur consectetur morbi
                  morbi aliquet mi risus, velit, sit at. Integer morbi viverra
                  hendrerit risus.
                </OrciVelRidiculus>
                <OrciVelRidiculus>
                  Odio phasellus nibh senectus nec id enim quam sed. At potenti
                  sollicitudin sollicitudin lobortis morbi. Nunc molestie et
                  adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac
                  at facilisi leo viverra. Arcu ac ut fermentum, viverra et,
                  vitae etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh
                  mi ut feugiat varius risus eros.
                </OrciVelRidiculus>
              </LoremIpsumDolorContainer>
            </Description>
          </BottomArea>
        </ContentArea>
      </ContentFrame>
      <ItemViewChild />
      <BagArea>
        <Title>
          <Bag>Bag</Bag>
        </Title>
        <BagItems>
          <Row>
            <BagItem>
              <ProductImage4>
                <ImageIcon4 alt="" src="/image2@2x.png" />
              </ProductImage4>
            </BagItem>
            <BagItem>
              <ProductImage4>
                <ImageIcon alt="" src="/image3@2x.png" />
              </ProductImage4>
            </BagItem>
            <BagItem>
              <ProductImage4>
                <ImageIcon alt="" src="/image4@2x.png" />
              </ProductImage4>
            </BagItem>
          </Row>
          <Row1>
            <BagItem>
              <ProductImage4>
                <ImageIcon alt="" src="/image5@2x.png" />
              </ProductImage4>
            </BagItem>
          </Row1>
        </BagItems>
        <Cta1>
          <Button2 onClick={onButtonContainer1Click}>
            <Icon alt="" src="/icon2.svg" />
            <Bag>View Bag</Bag>
          </Button2>
        </Cta1>
      </BagArea>
      <Navbar>
        <NavLinkstop>
          <Logo onClick={onLogoContainerClick}>
            <LogoChild alt="" src="/group-1.svg" />
          </Logo>
          <Title>
            <Icon3 alt="" src="/icon3.svg" />
          </Title>
          <NavLink1 onClick={onNavLinkContainer1Click}>
            <Icon alt="" src="/icon4.svg" />
          </NavLink1>
          <NavLink2 onClick={onNavLinkContainer2Click}>
            <Icon alt="" src="/icon5.svg" />
          </NavLink2>
        </NavLinkstop>
        <Title>
          <NavLink3>
            <Icon alt="" src="/icon6.svg" />
          </NavLink3>
        </Title>
      </Navbar>
    </ItemViewRoot>
  );
};

export default ItemView;
