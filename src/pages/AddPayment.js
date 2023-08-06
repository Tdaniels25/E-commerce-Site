import { useCallback } from "react";
import styled from "styled-components";

const AddANew = styled.div`
  position: relative;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;
const Header = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
  font-size: var(--subtitle-small-regular-expanded-size);
`;
const SecureConnection = styled.div`
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
  border-radius: var(--br-smi);
  background-color: var(--ui-white);
  box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-base);
  align-items: center;
  justify-content: flex-start;
  font-size: var(--face-h5-size);
`;
const Input = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const Name1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--font-placeholder);
`;
const Icon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const InputArea1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Input2 = styled.div`
  width: 186px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const InputField2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Input3 = styled.div`
  width: 141px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const DateCvc = styled.div`
  width: 596px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  color: var(--font-placeholder);
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
  border: 1px solid var(--ui-tertiary);
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
const MastercardEndingIn = styled.div`
  position: relative;
`;
const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Save = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base) var(--padding-5xs);
  align-items: flex-start;
  justify-content: center;
  font-size: var(--face-h5-size);
`;
const Button1 = styled.div`
  position: relative;
  font-weight: 500;
`;
const Button = styled.div`
  align-self: stretch;
  border-radius: 10px;
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
  font-size: var(--face-h5-size);
  color: var(--ui-white);
`;
const Button3 = styled.div`
  position: relative;
  text-decoration: underline;
  letter-spacing: -0.02em;
`;
const Button2 = styled.div`
  border-radius: 11px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  color: var(--font-success);
`;
const Infromation = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Form = styled.div`
  position: absolute;
  top: 298px;
  left: 382px;
  border-radius: 15px;
  background-color: var(--ui-white);
  width: 676px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
const Header1 = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-base);
  align-items: center;
  justify-content: flex-start;
  font-size: var(--subtitle-small-regular-expanded-size);
  color: var(--font-dark);
`;
const IconArea = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
`;
const PaymentMethod = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  cursor: pointer;
`;
const PaymentMethods = styled.div`
  position: absolute;
  top: 68px;
  left: 382px;
  border-radius: var(--br-smi);
  background-color: var(--ui-white);
  width: 676px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  font-size: var(--face-h5-size);
  color: var(--font-placeholder);
`;
const AddPaymentRoot = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: #ededed;
  width: 100%;
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--body-small-regular-condensed-size);
  color: var(--font-dark);
  font-family: var(--face-h5);
`;
const AddPayment = () => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "Checkout" to the project
  }, []);

  const onPaymentMethodContainerClick = useCallback(() => {
    // Please sync "Checkout" to the project
  }, []);

  const onPaymentMethodContainer1Click = useCallback(() => {
    // Please sync "Checkout" to the project
  }, []);

  return (
    <AddPaymentRoot>
      <Form>
        <Header>
          <AddANew>Add a new Card</AddANew>
        </Header>
        <Name1>
          <Input>
            <Label>
              <SecureConnection>Cardholder Name</SecureConnection>
            </Label>
            <InputField>
              <InputArea>
                <Placeholder>John Maker</Placeholder>
              </InputArea>
            </InputField>
          </Input>
        </Name1>
        <Name1>
          <Input>
            <Label>
              <SecureConnection>Card Number</SecureConnection>
            </Label>
            <InputField>
              <InputArea1>
                <Icon alt="" src="/icon.svg" />
                <Placeholder>5126-5987-2214-7621</Placeholder>
              </InputArea1>
            </InputField>
          </Input>
        </Name1>
        <DateCvc>
          <InputField2>
            <Input2>
              <Label>
                <SecureConnection>Expiry Date</SecureConnection>
              </Label>
              <InputField>
                <InputArea1>
                  <Icon alt="" src="/icon1.svg" />
                  <Placeholder>MM / YYYY</Placeholder>
                </InputArea1>
              </InputField>
            </Input2>
          </InputField2>
          <InputField2>
            <Input3>
              <Label>
                <SecureConnection>{`CVC `}</SecureConnection>
              </Label>
              <InputField>
                <InputArea>
                  <Placeholder>123</Placeholder>
                </InputArea>
              </InputField>
            </Input3>
          </InputField2>
        </DateCvc>
        <Save>
          <Checkbox>
            <CheckboxInput>
              <CheckboxInput1 />
              <Inner />
            </CheckboxInput>
            <MastercardEndingIn>
              Save this as your default payment method
            </MastercardEndingIn>
          </Checkbox>
        </Save>
        <Cta>
          <Button onClick={onButtonContainerClick}>
            <Icon alt="" src="/icon2.svg" />
            <Button1>Add Payment Method</Button1>
          </Button>
        </Cta>
        <Infromation>
          <Button2>
            <Button3>Back</Button3>
          </Button2>
          <Info>
            <Icon alt="" src="/icon3.svg" />
            <SecureConnection>Secure Connection</SecureConnection>
          </Info>
        </Infromation>
      </Form>
      <PaymentMethods>
        <Header1>
          <AddANew>Select a Card</AddANew>
        </Header1>
        <PaymentMethod onClick={onPaymentMethodContainerClick}>
          <IconArea>
            <Icon alt="" src="/icon4.svg" />
          </IconArea>
          <MastercardEndingIn>MasterCard ending in 4242</MastercardEndingIn>
        </PaymentMethod>
        <PaymentMethod onClick={onPaymentMethodContainer1Click}>
          <IconArea>
            <Icon alt="" src="/icon4.svg" />
          </IconArea>
          <MastercardEndingIn>VISA Debit ending in 2894</MastercardEndingIn>
        </PaymentMethod>
      </PaymentMethods>
    </AddPaymentRoot>
  );
};

export default AddPayment;
