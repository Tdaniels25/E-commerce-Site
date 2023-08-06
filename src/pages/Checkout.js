import { useCallback } from "react";
import styled from "styled-components";

const ShippingAddress = styled.div`
  position: relative;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
`;
const JohnMaker = styled.div`
  position: relative;
`;
const CurrentAddress = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const LoremIpsumDolor = styled.div`
  position: relative;
  letter-spacing: -0.02em;
`;
const Button = styled.div`
  border-radius: var(--br-2xs);
  border: 1px solid var(--ui-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
`;
const Actions = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  font-size: var(--body-small-regular-condensed-size);
`;
const Conent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  font-size: var(--body-normal-medium-normal-size);
`;
const AddressCard = styled.div`
  border-radius: var(--br-smi);
  background-color: var(--ui-white);
  width: 871px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Icon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const GiftCardBalance = styled.span`
  color: var(--font-tertiary);
`;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const GiftCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const CheckboxInput1 = styled.div`
  position: absolute;
  height: 106.25%;
  width: 106.25%;
  top: -3.12%;
  right: -3.12%;
  bottom: -3.12%;
  left: -3.12%;
  border-radius: 2px;
  border: 1px solid var(--font-tertiary);
  box-sizing: border-box;
`;
const Inner = styled.div`
  position: absolute;
  height: 75%;
  width: 75%;
  top: 12.5%;
  right: 12.5%;
  bottom: 12.5%;
  left: 12.5%;
  border-radius: 1px;
  background-color: var(--font-accent);
`;
const CheckboxInput = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
`;
const BillingAddress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ChangeBillingAddress1 = styled.div`
  position: relative;
  text-decoration: underline;
`;
const ChangeBillingAddress = styled.div`
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--ui-placeholder);
`;
const CurrentAddress1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Button2 = styled.div`
  border-radius: var(--br-2xs);
  border: 1px solid var(--ui-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Actions1 = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--body-small-regular-condensed-size);
`;
const Header2 = styled.div`
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
const Header3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
  font-size: var(--subtitle-small-regular-normal-size);
`;
const SmallDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
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
const Icon2 = styled.img`
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
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-base) var(--padding-5xl);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const BagContentsChild = styled.div`
  align-self: stretch;
  position: relative;
  border-top: 1px solid var(--ui-placeholder);
  box-sizing: border-box;
  height: 1px;
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
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--body-normal-medium-normal-size);
`;
const ContentFrame1 = styled.div`
  border-radius: var(--br-smi);
  background-color: var(--ui-white);
  width: 871px;
  overflow-y: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const ContentFrame = styled.div`
  position: absolute;
  top: 56px;
  left: 102px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  font-size: var(--subtitle-small-regular-normal-size);
`;
const Button4 = styled.div`
  position: absolute;
  top: 403px;
  left: 1207px;
  border-radius: var(--br-2xs);
  border: 1px solid var(--ui-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  cursor: pointer;
`;
const OrderSummary = styled.div`
  position: relative;
  font-weight: 500;
`;
const Line01 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--body-normal-medium-normal-size);
  color: #000;
`;
const Line02 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Divider = styled.div`
  align-self: stretch;
  position: relative;
  border-top: 1px solid var(--ui-light);
  box-sizing: border-box;
  height: 1px;
`;
const Total = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: var(--body-normal-medium-normal-size);
  color: var(--font-danger);
`;
const Button6 = styled.div`
  align-self: stretch;
  border-radius: var(--br-2xs);
  background-color: var(--ui-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
  color: var(--ui-white);
`;
const TotalSummary = styled.div`
  position: absolute;
  top: 59px;
  left: 1075px;
  border-radius: 12px;
  background-color: var(--ui-white);
  width: 243px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  color: var(--font-tertiary);
`;
const CheckoutRoot = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: #ededed;
  width: 100%;
  height: 1024px;
  overflow-y: auto;
  text-align: left;
  font-size: var(--body-small-regular-condensed-size);
  color: var(--ui-dark);
  font-family: var(--body-small-regular-condensed);
`;
const Checkout = () => {
  const onActionsContainerClick = useCallback(() => {
    // Please sync "Add-Address" to the project
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    // Please sync "Add-Payment" to the project
  }, []);

  const onButtonContainer2Click = useCallback(() => {
    // Please sync "Bag" to the project
  }, []);

  return (
    <CheckoutRoot>
      <ContentFrame>
        <AddressCard>
          <Header>
            <ShippingAddress>Shipping Address</ShippingAddress>
          </Header>
          <Conent>
            <CurrentAddress>
              <JohnMaker> John Maker</JohnMaker>
              <JohnMaker>123 Plae Grond Stret</JohnMaker>
              <JohnMaker>Vermont, California</JohnMaker>
              <JohnMaker>United States of America</JohnMaker>
            </CurrentAddress>
            <Actions onClick={onActionsContainerClick}>
              <Button>
                <LoremIpsumDolor>Change</LoremIpsumDolor>
              </Button>
            </Actions>
          </Conent>
        </AddressCard>
        <AddressCard>
          <Header>
            <ShippingAddress>Payment Method</ShippingAddress>
          </Header>
          <Conent>
            <CurrentAddress1>
              <Card>
                <Icon alt="" src="/icon.svg" />
                <JohnMaker>
                  <span>{`Mastercard `}</span>
                  <GiftCardBalance>ending in 1252</GiftCardBalance>
                </JohnMaker>
              </Card>
              <GiftCard>
                <Icon alt="" src="/icon1.svg" />
                <JohnMaker>
                  <span>{`$ 53.21 `}</span>
                  <GiftCardBalance>gift card balance</GiftCardBalance>
                </JohnMaker>
              </GiftCard>
              <BillingAddress>
                <Card>
                  <CheckboxInput>
                    <CheckboxInput1 />
                    <Inner />
                  </CheckboxInput>
                  <JohnMaker>
                    Billing address same as Shipping Address
                  </JohnMaker>
                </Card>
              </BillingAddress>
              <ChangeBillingAddress>
                <ChangeBillingAddress1>
                  Change Billing Address
                </ChangeBillingAddress1>
              </ChangeBillingAddress>
            </CurrentAddress1>
            <Actions1>
              <Button2 onClick={onButtonContainer1Click}>
                <LoremIpsumDolor>Change</LoremIpsumDolor>
              </Button2>
            </Actions1>
          </Conent>
        </AddressCard>
        <ContentFrame1>
          <Header2>
            <ShippingAddress>Review youR Bag</ShippingAddress>
          </Header2>
          <BagContents>
            <ItemInBag>
              <ProductImage>
                <ImageIcon alt="" src="/image@2x.png" />
              </ProductImage>
              <ContentArea>
                <Header3>
                  <Title>
                    <JohnMaker>Dell XPS 13</JohnMaker>
                  </Title>
                  <Subtitle>
                    <JohnMaker>White</JohnMaker>
                  </Subtitle>
                </Header3>
                <SmallDescription>
                  <LoremIpsumDolor>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</LoremIpsumDolor>
                </SmallDescription>
                <Rating>
                  <Stars>
                    <Icon alt="" src="/star01.svg" />
                    <Icon alt="" src="/star01.svg" />
                    <Icon alt="" src="/star01.svg" />
                    <Icon alt="" src="/star01.svg" />
                    <Icon alt="" src="/star05.svg" />
                  </Stars>
                  <LoremIpsumDolor>4.5 / 5</LoremIpsumDolor>
                </Rating>
                <PriceRating>
                  <Price>
                    <JohnMaker>$ 1799.99</JohnMaker>
                    <JohnMaker>x</JohnMaker>
                    <JohnMaker>1</JohnMaker>
                  </Price>
                  <Quantity>
                    <Price1>
                      <IncreaseButton>
                        <Icon2 alt="" src="/icon2.svg" />
                      </IncreaseButton>
                      <JohnMaker>1</JohnMaker>
                      <IncreaseButton>
                        <Icon2 alt="" src="/icon3.svg" />
                      </IncreaseButton>
                    </Price1>
                  </Quantity>
                </PriceRating>
              </ContentArea>
            </ItemInBag>
            <BagContentsChild />
            <ItemInBag>
              <ProductImage1>
                <ImageIcon1 alt="" src="/image1@2x.png" />
              </ProductImage1>
              <ContentArea>
                <Header3>
                  <Title>
                    <JohnMaker>Iphone 11</JohnMaker>
                  </Title>
                  <Subtitle>
                    <JohnMaker>Navy Blue</JohnMaker>
                  </Subtitle>
                </Header3>
                <SmallDescription>
                  <LoremIpsumDolor>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</LoremIpsumDolor>
                </SmallDescription>
                <Rating>
                  <Stars>
                    <Icon alt="" src="/star011.svg" />
                    <Icon alt="" src="/star011.svg" />
                    <Icon alt="" src="/star011.svg" />
                    <Icon alt="" src="/star011.svg" />
                    <Icon alt="" src="/star011.svg" />
                  </Stars>
                  <LoremIpsumDolor>4.5 / 5</LoremIpsumDolor>
                </Rating>
                <PriceRating>
                  <Price>
                    <JohnMaker>$ 729.99</JohnMaker>
                    <JohnMaker>x</JohnMaker>
                    <JohnMaker>3</JohnMaker>
                  </Price>
                  <Quantity>
                    <Price1>
                      <IncreaseButton>
                        <Icon2 alt="" src="/star011.svg" />
                      </IncreaseButton>
                      <JohnMaker>3</JohnMaker>
                      <IncreaseButton>
                        <Icon2 alt="" src="/star011.svg" />
                      </IncreaseButton>
                    </Price1>
                  </Quantity>
                </PriceRating>
              </ContentArea>
            </ItemInBag>
            <BagContentsChild />
            <ItemInBag>
              <ProductImage1>
                <ImageIcon1 alt="" src="/image2@2x.png" />
              </ProductImage1>
              <ContentArea>
                <Header3>
                  <Title>
                    <JohnMaker>Iphone 11</JohnMaker>
                  </Title>
                  <Subtitle>
                    <JohnMaker>Milky White</JohnMaker>
                  </Subtitle>
                </Header3>
                <SmallDescription>
                  <LoremIpsumDolor>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</LoremIpsumDolor>
                </SmallDescription>
                <Rating>
                  <Stars>
                    <Icon alt="" src="/star011.svg" />
                    <Icon alt="" src="/star011.svg" />
                    <Icon alt="" src="/star011.svg" />
                    <Icon alt="" src="/star011.svg" />
                    <Icon alt="" src="/star011.svg" />
                  </Stars>
                  <LoremIpsumDolor>4.5 / 5</LoremIpsumDolor>
                </Rating>
                <PriceRating>
                  <Price>
                    <JohnMaker>$ 619.99</JohnMaker>
                    <JohnMaker>x</JohnMaker>
                    <JohnMaker>1</JohnMaker>
                  </Price>
                  <Quantity>
                    <Price1>
                      <IncreaseButton>
                        <Icon2 alt="" src="/star011.svg" />
                      </IncreaseButton>
                      <JohnMaker>1</JohnMaker>
                      <IncreaseButton>
                        <Icon2 alt="" src="/star011.svg" />
                      </IncreaseButton>
                    </Price1>
                  </Quantity>
                </PriceRating>
              </ContentArea>
            </ItemInBag>
            <BagContentsChild />
            <ItemInBag>
              <ProductImage1>
                <ImageIcon1 alt="" src="/image2@2x.png" />
              </ProductImage1>
              <ContentArea>
                <Header3>
                  <Title>
                    <JohnMaker>Iphone 11</JohnMaker>
                  </Title>
                  <Subtitle>
                    <JohnMaker>Serious Black</JohnMaker>
                  </Subtitle>
                </Header3>
                <SmallDescription>
                  <LoremIpsumDolor>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</LoremIpsumDolor>
                </SmallDescription>
                <Rating>
                  <Stars>
                    <Icon alt="" src="/star011.svg" />
                    <Icon alt="" src="/star011.svg" />
                    <Icon alt="" src="/star011.svg" />
                    <Icon alt="" src="/star011.svg" />
                    <Icon alt="" src="/star011.svg" />
                  </Stars>
                  <LoremIpsumDolor>4.5 / 5</LoremIpsumDolor>
                </Rating>
                <PriceRating>
                  <Price>
                    <JohnMaker>$ 619.99</JohnMaker>
                    <JohnMaker>x</JohnMaker>
                    <JohnMaker>2</JohnMaker>
                  </Price>
                  <Quantity>
                    <Price1>
                      <IncreaseButton>
                        <Icon2 alt="" src="/star011.svg" />
                      </IncreaseButton>
                      <JohnMaker>2</JohnMaker>
                      <IncreaseButton>
                        <Icon2 alt="" src="/star011.svg" />
                      </IncreaseButton>
                    </Price1>
                  </Quantity>
                </PriceRating>
              </ContentArea>
            </ItemInBag>
          </BagContents>
        </ContentFrame1>
      </ContentFrame>
      <Button4 onClick={onButtonContainer2Click}>
        <Icon alt="" src="/icon4.svg" />
        <LoremIpsumDolor>Back</LoremIpsumDolor>
      </Button4>
      <TotalSummary>
        <Line01>
          <OrderSummary>Order Summary</OrderSummary>
        </Line01>
        <Line02>
          <LoremIpsumDolor>Items:</LoremIpsumDolor>
          <LoremIpsumDolor>{`$ 5849.37 `}</LoremIpsumDolor>
        </Line02>
        <Line02>
          <LoremIpsumDolor>Shipping:</LoremIpsumDolor>
          <LoremIpsumDolor>$ 6.99</LoremIpsumDolor>
        </Line02>
        <Line02>
          <LoremIpsumDolor>Estimated GST:</LoremIpsumDolor>
          <LoremIpsumDolor>{`$ 760.41 `}</LoremIpsumDolor>
        </Line02>
        <Line02>
          <LoremIpsumDolor>Gift Card:</LoremIpsumDolor>
          <LoremIpsumDolor>$ 0.00</LoremIpsumDolor>
        </Line02>
        <Divider />
        <Total>
          <OrderSummary>Order Total:</OrderSummary>
          <OrderSummary>{`$ 6609.78 `}</OrderSummary>
        </Total>
        <Divider />
        <Button6>
          <LoremIpsumDolor>Place your order</LoremIpsumDolor>
        </Button6>
      </TotalSummary>
    </CheckoutRoot>
  );
};

export default Checkout;
