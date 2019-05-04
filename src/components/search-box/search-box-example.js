import React, { Component, Fragment } from "react";
import { ThemeProviderWrapper, SearchBox } from "./../index";

const defaultMatchedData = [
  {
    id: 2,
    title: "Quis vero quia quis distinctio animi.",
    text:
      "Qui possimus natus fugit ut et quia ut voluptatum. Dolores enim omnis aliquid ex corrupti omnis voluptas est. Maiores deserunt eveniet ipsa sed velit quia enim eligendi repellat.",
  },
  {
    id: 4,
    title: "Aut reprehenderit sint dolore ut unde ex.",
    text: "Et maxime animi eum et itaque nemo eos.",
  },
  {
    id: 6,
    title: "Corporis blanditiis placeat est non ut nulla maiores id aut.",
    text:
      "Aut illo modi dicta veniam culpa laboriosam dolore qui voluptatem. Unde sit dolorem dicta consequuntur aut et sint nesciunt. Nemo consequatur magnam iste occaecati enim. Commodi enim voluptatum architecto praesentium aut et accusamus voluptatem voluptate. Consequatur dolorum deleniti quia aut blanditiis placeat aut dolorem. Nulla cupiditate et voluptate veniam sit rerum.",
  },
  {
    id: 7,
    title: "Molestias doloremque eaque cupiditate nam ut sed.",
    text: "Aut ea velit dolorum ipsa officiis.",
  },
  {
    id: 11,
    title: "Quia harum itaque recusandae itaque ea et.",
    text:
      "Voluptas nostrum aliquid dicta ut odio amet enim. Aliquid animi commodi vel provident. Autem qui nostrum molestiae sit corrupti eos enim. Nihil sapiente perspiciatis iusto ut.\n \rHic ut cupiditate sit fugiat sint. Voluptates architecto suscipit. Neque placeat quibusdam. Voluptatem blanditiis rem quia accusamus officia repellat itaque in blanditiis.\n \rUt alias eaque velit. Nisi sapiente voluptas laborum non. Officiis facere quibusdam dolor non. Dolorem natus amet. Et facilis commodi possimus.",
  },
  {
    id: 14,
    title: "Est aperiam quis deleniti odit.",
    text: "Dolore voluptas consequuntur.",
  },
  {
    id: 15,
    title: "Sit id non adipisci omnis.",
    text:
      "Labore autem velit voluptas at.\nDolore sequi id nobis officia sit libero.\nDeserunt non voluptatem impedit est sed.\nNihil error nobis fuga est quia sint non.\nQuidem numquam architecto dolor vitae et.",
  },
  {
    id: 16,
    title: "Dolores qui qui.",
    text: "doloremque",
  },
  {
    id: 17,
    title: "Illo quia eligendi quasi dicta aperiam velit deserunt ipsa minus.",
    text:
      "Et est qui et consequatur totam. Nihil velit sit labore. Consequatur necessitatibus reprehenderit earum laboriosam ex corporis commodi eius doloribus. Ut eum ullam omnis. Labore quas voluptatem quibusdam sint voluptas ut rerum. Dolore nihil pariatur.",
  },
];

export default class SearchBoxExample extends Component {
  state = {
    data: [],
    findCount: 0,
    matchedData: defaultMatchedData,
    loading: false,
  };

  _onChange = (matchedData, searchString, findCount) => {
    this.setState({ matchedData, findCount });
  };

  render() {
    const { matchedData, findCount } = this.state;

    return (
      <ThemeProviderWrapper>
        <Fragment>
          <SearchBox
            onUpdate={this._onChange}
            placeholder="Search for a string..."
            dataUpdater="https://mock-server-wkquwnltbi.now.sh/articles?q=%s"
            loading={this.state.loading}
            debounceTime={800}
          />
          <div style={{ maxHeight: "300px", overflowX: "scroll" }}>
            Find: {findCount}
            <br />
            ---
            <br />
            {matchedData.map(item => (
              <Fragment key={item.id}>
                <br />
                {item.id}. {item.title} {item.text}
                <br />
                ---
              </Fragment>
            ))}
          </div>
        </Fragment>
      </ThemeProviderWrapper>
    );
  }
}
