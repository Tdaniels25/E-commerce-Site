import { useCallback } from "react";
import styled from "styled-components";

const CheckYourBag = styled.div`
  position: relative;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs) var(--padding-5xs) var(--padding-5xl);
  align-items: flex-start;
  justify-content: center;
`;
const ImageIcon = styled.img`
  position: absolute;
  height: 131%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: -31%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const ProductImage = styled.div`
  position: relative;
  width: 203.54px;
  height: 254px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
`;
const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--body-normal-medium-normal-size);
  color: var(--font-tertiary);
`;
const Header1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
  font-size: var(--subtitle-small-regular-normal-size);
`;
const LoremIpsumDolor = styled.div`
  position: relative;
  letter-spacing: -0.02em;
`;
const SmallDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
`;
const Star01Icon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Stars = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-base) 0px 0px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const Rating = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  color: var(--font-accent);
`;
const Price = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Icon = styled.img`
  position: relative;
  width: 18px;
  height: 18px;
  overflow: hidden;
  flex-shrink: 0;
`;
const IncreaseButton = styled.div`
  border-radius: var(--br-4xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
`;
const Price1 = styled.div`
  width: 111px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
`;
const PriceRating = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: space-between;
`;
const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const ItemInBag = styled.div`
  align-self: stretch;
  border-radius: var(--br-2xl);
  background-color: var(--font-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-base) var(--padding-5xl);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const ImageIcon1 = styled.img`
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
const ProductImage1 = styled.div`
  position: relative;
  width: 203.54px;
  height: 254px;
`;
const BagContents = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  font-size: var(--body-normal-medium-normal-size);
`;
const ContentFrame = styled.div`
  position: absolute;
  top: 0px;
  left: 122px;
  width: 973px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 48px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-3xs);
`;
const BagChild = styled.div`
  position: absolute;
  top: 49px;
  left: 1093px;
  border-right: 4px solid var(--font-placeholder);
  box-sizing: border-box;
  width: 4px;
  height: 925.6px;
`;
const LogoChild = styled.img`
  position: relative;
  width: 16px;
  height: 20.71px;
`;
const Logo = styled.div`
  border-radius: 4px;
  background-color: var(--font-white);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Icon8 = styled.img`
  position: relative;
  border-radius: 50px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const MenuIcon = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
`;
const NavLink = styled.div`
  border-radius: var(--br-3xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const NavLink1 = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--ui-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
`;
const NavLinkstop = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
  gap: var(--gap-13xl);
`;
const NavLink2 = styled.div`
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
  background-color: var(--font-white);
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;
const BagTotal = styled.div`
  position: relative;
  font-weight: 500;
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
  background-color: var(--font-white);
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
const Total = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Button = styled.div`
  border-radius: 14px;
  background-color: var(--ui-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  cursor: pointer;
  color: var(--font-white);
`;
const Cta = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  align-items: center;
  justify-content: center;
  gap: var(--gap-13xl);
  font-size: var(--body-normal-medium-normal-size);
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
  gap: var(--gap-3xs);
  font-size: var(--subtitle-normal-medium-normal-size);
`;
const BagRoot = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: #ededed;
  width: 100%;
  height: 1024px;
  overflow-y: auto;
  text-align: left;
  font-size: var(--title-small-regular-normal-size);
  color: var(--ui-dark);
  font-family: var(--body-normal-medium-normal);
`;
const Bag = () => {
  const onLogoContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onNavLinkContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Checkout" to the project
  }, []);

  return (
    <BagRoot>
      <ContentFrame>
        <Header>
          <CheckYourBag>Check your Bag Items</CheckYourBag>
        </Header>
        <BagContents>
          <ItemInBag>
            <ProductImage>
              <ImageIcon alt="" src="/image@2x.png" />
            </ProductImage>
            <ContentArea>
              <Header1>
                <Title>
                  <CheckYourBag>Dell XPS 13</CheckYourBag>
                </Title>
                <Subtitle>
                  <CheckYourBag>White</CheckYourBag>
                </Subtitle>
              </Header1>
              <SmallDescription>
                <LoremIpsumDolor>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</LoremIpsumDolor>
              </SmallDescription>
              <Rating>
                <Stars>
                  <Star01Icon alt="" src="/star01.svg" />
                  <Star01Icon alt="" src="/star01.svg" />
                  <Star01Icon alt="" src="/star01.svg" />
                  <Star01Icon alt="" src="/star01.svg" />
                  <Star01Icon alt="" src="/star05.svg" />
                </Stars>
                <LoremIpsumDolor>4.5 / 5</LoremIpsumDolor>
              </Rating>
              <PriceRating>
                <Price>
                  <CheckYourBag>$ 1799.99</CheckYourBag>
                  <CheckYourBag>x</CheckYourBag>
                  <CheckYourBag>1</CheckYourBag>
                </Price>
                <Quantity>
                  <Price1>
                    <IncreaseButton>
                      <Icon alt="" src="/icon.svg" />
                    </IncreaseButton>
                    <CheckYourBag>1</CheckYourBag>
                    <IncreaseButton>
                      <Icon alt="" src="/icon1.svg" />
                    </IncreaseButton>
                  </Price1>
                </Quantity>
              </PriceRating>
            </ContentArea>
          </ItemInBag>
          <ItemInBag>
            <ProductImage1>
              <ImageIcon1 alt="" src="/image1@2x.png" />
            </ProductImage1>
            <ContentArea>
              <Header1>
                <Title>
                  <CheckYourBag>Iphone 11</CheckYourBag>
                </Title>
                <Subtitle>
                  <CheckYourBag>Navy Blue</CheckYourBag>
                </Subtitle>
              </Header1>
              <SmallDescription>
                <LoremIpsumDolor>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</LoremIpsumDolor>
              </SmallDescription>
              <Rating>
                <Stars>
                  <Star01Icon alt="" src="/star01.svg" />
                  <Star01Icon alt="" src="/star01.svg" />
                  <Star01Icon alt="" src="/star01.svg" />
                  <Star01Icon alt="" src="/star01.svg" />
                  <Star01Icon alt="" src="/star05.svg" />
                </Stars>
                <LoremIpsumDolor>4.5 / 5</LoremIpsumDolor>
              </Rating>
              <PriceRating>
                <Price>
                  <CheckYourBag>$ 729.99</CheckYourBag>
                  <CheckYourBag>x</CheckYourBag>
                  <CheckYourBag>3</CheckYourBag>
                </Price>
                <Quantity>
                  <Price1>
                    <IncreaseButton>
                      <Icon alt="" src="/icon.svg" />
                    </IncreaseButton>
                    <CheckYourBag>3</CheckYourBag>
                    <IncreaseButton>
                      <Icon alt="" src="/icon1.svg" />
                    </IncreaseButton>
                  </Price1>
                </Quantity>
              </PriceRating>
            </ContentArea>
          </ItemInBag>
          <ItemInBag>
            <ProductImage1>
              <ImageIcon1 alt="" src="/image2@2x.png" />
            </ProductImage1>
            <ContentArea>
              <Header1>
                <Title>
                  <CheckYourBag>Iphone 11</CheckYourBag>
                </Title>
                <Subtitle>
                  <CheckYourBag>Milky White</CheckYourBag>
                </Subtitle>
              </Header1>
              <SmallDescription>
                <LoremIpsumDolor>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</LoremIpsumDolor>
              </SmallDescription>
              <Rating>
                <Stars>
                  <Star01Icon alt="" src="/star011.svg" />
                  <Star01Icon alt="" src="/star011.svg" />
                  <Star01Icon alt="" src="/star011.svg" />
                  <Star01Icon alt="" src="/star011.svg" />
                  <Star01Icon alt="" src="/star05.svg" />
                </Stars>
                <LoremIpsumDolor>4.5 / 5</LoremIpsumDolor>
              </Rating>
              <PriceRating>
                <Price>
                  <CheckYourBag>$ 619.99</CheckYourBag>
                  <CheckYourBag>x</CheckYourBag>
                  <CheckYourBag>1</CheckYourBag>
                </Price>
                <Quantity>
                  <Price1>
                    <IncreaseButton>
                      <Icon alt="" src="/icon.svg" />
                    </IncreaseButton>
                    <CheckYourBag>1</CheckYourBag>
                    <IncreaseButton>
                      <Icon alt="" src="/icon1.svg" />
                    </IncreaseButton>
                  </Price1>
                </Quantity>
              </PriceRating>
            </ContentArea>
          </ItemInBag>
          <ItemInBag>
            <ProductImage1>
              <ImageIcon1 alt="" src="/image3@2x.png" />
            </ProductImage1>
            <ContentArea>
              <Header1>
                <Title>
                  <CheckYourBag>Iphone 11</CheckYourBag>
                </Title>
                <Subtitle>
                  <CheckYourBag>Serious Black</CheckYourBag>
                </Subtitle>
              </Header1>
              <SmallDescription>
                <LoremIpsumDolor>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</LoremIpsumDolor>
              </SmallDescription>
              <Rating>
                <Stars>
                  <Star01Icon alt="" src="/star012.svg" />
                  <Star01Icon alt="" src="/star012.svg" />
                  <Star01Icon alt="" src="/star012.svg" />
                  <Star01Icon alt="" src="/star012.svg" />
                  <Star01Icon alt="" src="/star012.svg" />
                </Stars>
                <LoremIpsumDolor>4.5 / 5</LoremIpsumDolor>
              </Rating>
              <PriceRating>
                <Price>
                  <CheckYourBag>$ 619.99</CheckYourBag>
                  <CheckYourBag>x</CheckYourBag>
                  <CheckYourBag>2</CheckYourBag>
                </Price>
                <Quantity>
                  <Price1>
                    <IncreaseButton>
                      <Icon alt="" src="/star012.svg" />
                    </IncreaseButton>
                    <CheckYourBag>2</CheckYourBag>
                    <IncreaseButton>
                      <Icon alt="" src="/star012.svg" />
                    </IncreaseButton>
                  </Price1>
                </Quantity>
              </PriceRating>
            </ContentArea>
          </ItemInBag>
        </BagContents>
      </ContentFrame>
      <BagChild />
      <Navbar>
        <NavLinkstop>
          <Logo onClick={onLogoContainerClick}>
            <LogoChild alt="" src="/group-1.svg" />
          </Logo>
          <MenuIcon>
            <Icon8 alt="" src="/icon2.svg" />
          </MenuIcon>
          <NavLink onClick={onNavLinkContainerClick}>
            <Star01Icon alt="" src="/icon3.svg" />
          </NavLink>
          <NavLink1>
            <Star01Icon alt="" src="/icon4.svg" />
          </NavLink1>
        </NavLinkstop>
        <MenuIcon>
          <NavLink2>
            <Star01Icon alt="" src="/icon5.svg" />
          </NavLink2>
        </MenuIcon>
      </Navbar>
      <BagArea>
        <MenuIcon>
          <BagTotal>Bag</BagTotal>
        </MenuIcon>
        <BagItems>
          <Row>
            <BagItem>
              <ProductImage4>
                <ImageIcon4 alt="" src="/image4@2x.png" />
              </ProductImage4>
            </BagItem>
            <BagItem>
              <ProductImage4>
                <ImageIcon1 alt="" src="/image5@2x.png" />
              </ProductImage4>
            </BagItem>
            <BagItem>
              <ProductImage4>
                <ImageIcon1 alt="" src="/image6@2x.png" />
              </ProductImage4>
            </BagItem>
          </Row>
          <Row1>
            <BagItem>
              <ProductImage4>
                <ImageIcon1 alt="" src="/image7@2x.png" />
              </ProductImage4>
            </BagItem>
          </Row1>
        </BagItems>
        <Cta>
          <Total>
            <BagTotal>Bag Total:</BagTotal>
            <BagTotal>{`$ 5,849.93   `}</BagTotal>
          </Total>
          <Button onClick={onButtonContainerClick}>
            <Star01Icon alt="" src="/icon6.svg" />
            <BagTotal>Checkout</BagTotal>
          </Button>
        </Cta>
      </BagArea>
    </BagRoot>
  );
};

export default Bag;
