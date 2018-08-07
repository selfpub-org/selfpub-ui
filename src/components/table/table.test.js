import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import { Table, Tr, Td } from "../../components/table";

test("Table is rendered", () => {
  const table = render(
    <Table>
      <Tr>
        <Td style={{ width: "200px" }}>123</Td>
      </Tr>
    </Table>,
  );

  expect(toJson(table)).toMatchSnapshot();
});
