import { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Label1 = styled.div`
  position: relative;
  letter-spacing: -0.02em;
`;
const Label = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
`;
const Placeholder = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
`;
const InputArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
`;
const InputField = styled.div`
  align-self: stretch;
  border-radius: 13px;
  background-color: var(--ui-white);
  box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-base);
  align-items: center;
  justify-content: flex-start;
  font-size: var(--body-normal-medium-normal-size);
  color: var(--font-placeholder);
`;
const Input = styled.div`
  width: 507px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
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
const ProductImage1 = styled.div`
  flex: 1;
  position: relative;
  height: 200px;
`;
const ProductImage = styled.div`
  border-radius: var(--br-3xl);
  background-color: var(--ui-white);
  width: 191.36px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-base);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const ItemName = styled.div`
  position: relative;
  font-weight: 500;
`;
const SmallDescription = styled.div`
  position: relative;
  font-size: var(--body-small-regular-condensed-size);
  letter-spacing: -0.02em;
  color: var(--font-tertiary);
`;
const Icon13 = styled.img`
  position: relative;
  width: 18px;
  height: 18px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Button = styled.div`
  border-radius: var(--br-4xs);
  background-color: var(--font-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
`;
const Action = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: space-between;
`;
const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const ItemCard = styled.div`
  border-radius: var(--br-3xl);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const ProductImage2 = styled.div`
  border-radius: var(--br-3xl);
  background-color: var(--ui-white);
  width: 191.36px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-base);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
const ItemCard1 = styled.div`
  border-radius: var(--br-3xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const Row01 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-base);
`;
const Row02 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-base);
  align-items: center;
  justify-content: center;
  gap: var(--gap-base);
`;
const ContentArea = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs) 0px;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--body-normal-medium-normal-size);
  color: var(--font-dark);
`;
const ContentFrame = styled.div`
  position: absolute;
  top: 0px;
  left: 122px;
  width: 953px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const DashboardChild = styled.div`
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
const ImageIcon8 = styled.img`
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
const ProductImage16 = styled.div`
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
const Icon21 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Button8 = styled.div`
  border-radius: 14px;
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
const Cta = styled.div`
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
  gap: var(--gap-3xs);
  font-size: var(--subtitle-normal-medium-normal-size);
  color: var(--font-dark);
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
`;
const Icon22 = styled.img`
  position: relative;
  border-radius: 50px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const NavLink = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--font-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
`;
const NavLink1 = styled.div`
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
  background-color: var(--ui-white);
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;
const DashboardRoot = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: #ededed;
  width: 100%;
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--body-small-regular-condensed-size);
  color: var(--font-tertiary);
  font-family: var(--body-normal-medium-normal);
`;
const Dashboard = () => {
  const onProductImageContainer1Click = useCallback(() => {
    // Please sync "Item-View" to the project
  }, []);

  const onButtonContainer8Click = useCallback(() => {
    // Please sync "Bag" to the project
  }, []);

  const onNavLinkContainer1Click = useCallback(() => {
    // Please sync "Bag" to the project
  }, []);

  return (
    <DashboardRoot>
      <ContentFrame>
        <ContentArea>
          <Row01>
            <ItemCard>
              <Link to="/" className="recipePage-homeBtn">
                <ProductImage onClick={onProductImageContainer1Click}>
                  <ProductImage1>
                    <ImageIcon alt="" src="/image@2x.png" />
                  </ProductImage1>
                </ProductImage>
                <Content>
                  <ItemName>Apple Watch</ItemName>
                  <SmallDescription>Series 5 SE</SmallDescription>
                  <Action>
                    <ItemName>$ 529.99</ItemName>
                    <Button>
                      <Icon13 alt="" src="/icon.svg" />
                    </Button>
                  </Action>
                </Content>
              </Link>
            </ItemCard>
            <ItemCard1>
              <ProductImage2>
                <ProductImage1>
                  <ImageIcon alt="" src="/image1@2x.png" />
                </ProductImage1>
              </ProductImage2>
              <Content>
                <ItemName>Sony ZX330BT</ItemName>
                <SmallDescription>Light Grey</SmallDescription>
                <Action>
                  <ItemName>$ 39.99</ItemName>
                  <Button>
                    <Icon13 alt="" src="/icon1.svg" />
                  </Button>
                </Action>
              </Content>
            </ItemCard1>
            <ItemCard1>
              <ProductImage2>
                <ProductImage1>
                  <ImageIcon alt="" src="/image2@2x.png" />
                </ProductImage1>
              </ProductImage2>
              <Content>
                <ItemName>Iphone 11</ItemName>
                <SmallDescription>Serious Black</SmallDescription>
                <Action>
                  <ItemName>$ 619.99</ItemName>
                  <Button>
                    <Icon13 alt="" src="/icon2.svg" />
                  </Button>
                </Action>
              </Content>
            </ItemCard1>
            <ItemCard1>
              <ProductImage2>
                <ProductImage1>
                  <ImageIcon alt="" src="/image3@2x.png" />
                </ProductImage1>
              </ProductImage2>
              <Content>
                <ItemName>Iphone 11</ItemName>
                <SmallDescription>Subway Blue</SmallDescription>
                <Action>
                  <ItemName>$ 619.99</ItemName>
                  <Button>
                    <Icon13 alt="" src="/icon3.svg" />
                  </Button>
                </Action>
              </Content>
            </ItemCard1>
          </Row01>
          <Row02>
            <ItemCard1>
              <ProductImage2>
                <ProductImage1>
                  <ImageIcon alt="" src="/image4@2x.png" />
                </ProductImage1>
              </ProductImage2>
              <Content>
                <ItemName>Iphone 11</ItemName>
                <SmallDescription>Product RED</SmallDescription>
                <Action>
                  <ItemName>$ 619.99</ItemName>
                  <Button>
                    <Icon13 alt="" src="/icon.svg" />
                  </Button>
                </Action>
              </Content>
            </ItemCard1>
            <ItemCard1>
              <ProductImage2>
                <ProductImage1>
                  <ImageIcon alt="" src="/image5@2x.png" />
                </ProductImage1>
              </ProductImage2>
              <Content>
                <ItemName>Iphone 11</ItemName>
                <SmallDescription>Milky White</SmallDescription>
                <Action>
                  <ItemName>$ 619.99</ItemName>
                  <Button>
                    <Icon13 alt="" src="/icon1.svg" />
                  </Button>
                </Action>
              </Content>
            </ItemCard1>
            <ItemCard1>
              <ProductImage2>
                <ProductImage1>
                  <ImageIcon alt="" src="/image6@2x.png" />
                </ProductImage1>
              </ProductImage2>
              <Content>
                <ItemName>Iphone 13</ItemName>
                <SmallDescription>Product RED</SmallDescription>
                <Action>
                  <ItemName>$ 619.99</ItemName>
                  <Button>
                    <Icon13 alt="" src="/icon2.svg" />
                  </Button>
                </Action>
              </Content>
            </ItemCard1>
            <ItemCard1>
              <ProductImage2>
                <ProductImage1>
                  <ImageIcon alt="" src="/image7@2x.png" />
                </ProductImage1>
              </ProductImage2>
              <Content>
                <ItemName>Iphone 14</ItemName>
                <SmallDescription>Product RED</SmallDescription>
                <Action>
                  <ItemName>$ 619.99</ItemName>
                  <Button>
                    <Icon13 alt="" src="/icon3.svg" />
                  </Button>
                </Action>
              </Content>
            </ItemCard1>
          </Row02>
        </ContentArea>
      </ContentFrame>
      <DashboardChild />
      <BagArea>
        <Title>
          <ItemName>Bag</ItemName>
        </Title>
        <BagItems>
          <Row>
            <BagItem>
              <ProductImage16>
                <ImageIcon8 alt="" src="/image8@2x.png" />
              </ProductImage16>
            </BagItem>
            <BagItem>
              <ProductImage16>
                <ImageIcon alt="" src="/image9@2x.png" />
              </ProductImage16>
            </BagItem>
            <BagItem>
              <ProductImage16>
                <ImageIcon alt="" src="/image10@2x.png" />
              </ProductImage16>
            </BagItem>
          </Row>
          <Row1>
            <BagItem>
              <ProductImage16>
                <ImageIcon alt="" src="/image11@2x.png" />
              </ProductImage16>
            </BagItem>
          </Row1>
        </BagItems>
        <Cta>
          <Button8 onClick={onButtonContainer8Click}>
            <Icon21 alt="" src="/icon4.svg" />
            <ItemName>View Bag</ItemName>
          </Button8>
        </Cta>
      </BagArea>
      <Navbar>
        <NavLinkstop>
          <Logo>
            <LogoChild alt="" src="/group-1.svg" />
          </Logo>
          <Title>
            <Icon22 alt="" src="/icon5.svg" />
          </Title>
          <NavLink>
            <Icon21 alt="" src="/icon6.svg" />
          </NavLink>
          <NavLink1 onClick={onNavLinkContainer1Click}>
            <Icon21 alt="" src="/icon7.svg" />
          </NavLink1>
        </NavLinkstop>
        <Title>
          <NavLink2>
            <Icon21 alt="" src="/icon8.svg" />
          </NavLink2>
        </Title>
      </Navbar>
    </DashboardRoot>
  );
};

export default Dashboard;
