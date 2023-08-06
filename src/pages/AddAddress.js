import { useCallback } from "react";
import styled from "styled-components";

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
  background-color: var(--font-white);
  box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-base);
  align-items: center;
  justify-content: flex-start;
  font-size: var(--body-normal-medium-normal-size);
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
`;
const Placeholder1 = styled.div`
  flex: 1;
  position: relative;
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
const Label10 = styled.div`
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
  font-size: var(--body-normal-medium-normal-size);
`;
const Button1 = styled.div`
  position: relative;
  font-weight: 500;
`;
const Button = styled.div`
  align-self: stretch;
  border-radius: 10px;
  background-color: var(--ui-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
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
  color: var(--font-white);
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
const Icon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
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
  top: 95px;
  left: 382px;
  border-radius: 15px;
  background-color: var(--font-white);
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
const AddAddressRoot = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: #ededed;
  width: 100%;
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--body-small-regular-condensed-size);
  color: var(--font-placeholder);
  font-family: var(--body-small-regular-condensed);
`;
const AddAddress = () => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "Checkout" to the project
  }, []);

  return (
    <AddAddressRoot>
      <Form>
        <Name1>
          <Input>
            <Label>
              <SecureConnection>Shipping Name</SecureConnection>
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
              <SecureConnection>Street Name</SecureConnection>
            </Label>
            <InputField>
              <InputArea>
                <Placeholder1>123 Plae Grond Stret</Placeholder1>
              </InputArea>
            </InputField>
          </Input>
        </Name1>
        <Name1>
          <Input>
            <Label>
              <SecureConnection>City</SecureConnection>
            </Label>
            <InputField>
              <InputArea>
                <Placeholder1>Vermont</Placeholder1>
              </InputArea>
            </InputField>
          </Input>
        </Name1>
        <Name1>
          <Input>
            <Label>
              <SecureConnection>State / Province</SecureConnection>
            </Label>
            <InputField>
              <InputArea>
                <Placeholder1>California</Placeholder1>
              </InputArea>
            </InputField>
          </Input>
        </Name1>
        <Name1>
          <Input>
            <Label>
              <SecureConnection>Country</SecureConnection>
            </Label>
            <InputField>
              <InputArea>
                <Placeholder1>United States of America</Placeholder1>
              </InputArea>
            </InputField>
          </Input>
        </Name1>
        <Save>
          <Checkbox>
            <CheckboxInput>
              <CheckboxInput1 />
              <Inner />
            </CheckboxInput>
            <Label10>Save this as your default address</Label10>
          </Checkbox>
        </Save>
        <Cta>
          <Button onClick={onButtonContainerClick}>
            <Button1>Add Address</Button1>
          </Button>
        </Cta>
        <Infromation>
          <Button2>
            <Button3>Back</Button3>
          </Button2>
          <Info>
            <Icon alt="" src="/icon.svg" />
            <SecureConnection>Secure Connection</SecureConnection>
          </Info>
        </Infromation>
      </Form>
    </AddAddressRoot>
  );
};

export default AddAddress;
