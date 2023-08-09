import React from "react";

function Searchbar() {
  return (
    <div>
      <TopBar>
        <Input>
          <Label>
            <Label1>Search Item</Label1>
          </Label>
          <InputField>
            <InputArea>
              <Placeholder>
                Apple Watch, Samsung S21, Macbook Pro, ...
              </Placeholder>
            </InputArea>
          </InputField>
        </Input>
      </TopBar>
    </div>
  );
}

export default Searchbar;
