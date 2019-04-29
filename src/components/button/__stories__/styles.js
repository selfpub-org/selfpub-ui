import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RowMax = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 16px;
  border-radius: 3px;
  border: 1px dashed #aaa;
`;

export const Examples = styled.ul`
  padding: 0;
  margin: 0;
`;

export const Example = styled.li`
  list-style: none;
  border-top: 1px solid rgba(120, 120, 120, 0.5);
  margin: 16px 0;
`;

export const Title = styled.h3`
  padding: 0;
  margin: 16px;
`;
export const Subtitle = styled.h4`
  padding: 0;
  margin: 4px;
`;

export const Column = styled.div`
  margin-right: 16px;
  padding: 8px;
  border: 1px dashed rgba(120, 120, 120, 0.5);
  border-radius: 3px;
`;
