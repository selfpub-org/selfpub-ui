import React from "react";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";

import { themes } from "./constants";
import Button from "./../index";
import {
  Examples,
  Example,
  Title,
  Row,
  Column,
  Subtitle,
  RowMax,
  RowWrapper,
} from "./styles";

const ButtonSized = styled(Button)`
  width: 140px;
`;

export default function(props) {
  return () => (
    <Examples>
      {Object.keys(themes).map(variation => (
        <Example key={variation}>
          <Title>{`${variation}`}</Title>
          <Row>
            <Column>
              <Subtitle>flat</Subtitle>
              <Button
                {...props}
                variation={variation}
                onClick={action("clicked")}
              />
            </Column>
            <Column>
              <Subtitle>raised</Subtitle>
              <Button
                {...props}
                variation={variation}
                appearance="raised"
                onClick={action("clicked")}
              />
            </Column>
          </Row>
        </Example>
      ))}
      <Example>
        <Title>with specified size</Title>
        <Row>
          <Column>
            <Subtitle>flat</Subtitle>
            <ButtonSized {...props} onClick={action("clicked")} />
          </Column>
          <Column>
            <Subtitle>raised</Subtitle>
            <ButtonSized
              {...props}
              onClick={action("clicked")}
              appearance="raised"
            />
          </Column>
        </Row>
      </Example>
      <Example>
        <RowMax>
          <Title>Wide button 100%</Title>
          <Subtitle>flat</Subtitle>
          <RowWrapper>
            <Button {...props} onClick={action("clicked")} stretched />
          </RowWrapper>
          <Subtitle>raised</Subtitle>
          <RowWrapper>
            <Button
              {...props}
              onClick={action("clicked")}
              appearance="raised"
              stretched
            />
          </RowWrapper>
        </RowMax>
      </Example>
    </Examples>
  );
}
